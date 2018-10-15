<template>
    <v-flex xs10 offset-xs1>
        <v-card>
            <v-card-title primary-title>
                <div>
                    <h3 class="headline mb-0">Add New Todo</h3>
                </div>
            </v-card-title>
            <div style="padding-left: 17px; padding-right:50%">
                <v-text-field v-model="todoTitle" label="Todo Title">
                    <v-fade-transition slot="append">
                        <v-icon v-if="todoTitle.trim() != ''" @click="resetTitle">cancel</v-icon>
                    </v-fade-transition>
                </v-text-field>
            </div>
            <v-divider></v-divider>
            <div style="padding-left: 17px; padding-right:50%">
                <v-text-field
                    v-model="task"
                    label="What are you working on?"
                    @keyup.enter="createTask"
                >
                    <v-fade-transition slot="append">
                        <v-icon v-if="task.trim() != ''" @click="createTask">add_circle</v-icon>
                    </v-fade-transition>
                </v-text-field>
            </div>
            <h2 class="display-1 success--text pl-3">Tasks:&nbsp;
                <v-fade-transition leave-absolute>
                    <span :key="`${tasks.length}`">{{ tasks.length }}</span>
                </v-fade-transition>
            </h2>
            <div v-if="tasks.length > 0" v-for="(task, i) in tasks" :key="`${i}-${task.text}`">
                <v-divider v-if="i !== 0"></v-divider>
                <v-list-tile>
                    <v-list-tile-action>
                        <v-layout row>
                            <v-flex>
                                <v-icon @click="removeTask">remove_circle</v-icon>
                            </v-flex>
                            <v-flex>
                                <div v-text="task.text" @click="removeTask" style="cursor:pointer"></div>
                            </v-flex>
                        </v-layout>
                    </v-list-tile-action>
                </v-list-tile>
            </div>
            <v-divider class="mb-3"></v-divider>
            <v-card-actions>
                <v-spacer/>
                <v-btn
                    flat
                    color="orange"
                    :disabled="tasks.length===0 || todoTitle.trim()===''"
                    @click="createTodo"
                >Create</v-btn>
                <v-btn flat color="orange" @click="resetTodo">Reset</v-btn>
            </v-card-actions>
            <v-snackbar v-model="snackbar" :timeout="snackbarTimeout" top>Todo added!
                <v-btn color="pink" flat @click="snackbar = false">Close</v-btn>
            </v-snackbar>
        </v-card>
    </v-flex>
</template>

<script>
export default {
  data: () => ({
    tasks: [],
    task: "",
    todoTitle: "",
    snackbar: false,
    snackbarTimeout: 5000
  }),

  methods: {
    resetTitle() {
      this.todoTitle = "";
    },
    createTask() {
      if (this.task.trim() != "") {
        this.tasks.push({
          done: false,
          text: this.task
        });
      }
      this.task = "";
    },
    removeTask(i) {
      this.tasks.splice(i, 1);
    },
    createTodo() {
      this.$store.dispatch("todos/addTodo", {
        title: this.todoTitle,
        tasks: this.tasks
      });
      this.snackbar = true;
      this.todoTitle = "";
      this.task = "";
      this.tasks = [];
    },
    resetTodo() {
      this.todoTitle = "";
      this.task = "";
      this.tasks = [];
    }
  }
};
</script>

<style>
</style>
