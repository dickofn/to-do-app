<template>
    <v-flex d-flex xs12 md6 lg4>
        <v-card>
            <v-card-title primary-title>
                <div>
                    <h3 class="headline mb-0">{{todo.title}}</h3>
                </div>
                <v-spacer></v-spacer>
                <v-icon @click="deleteTodo(indexTodo)">delete_forever</v-icon>
            </v-card-title>
            <h2 class="display-1 success--text pl-3">Tasks:&nbsp;
                <v-fade-transition leave-absolute>
                    <span :key="`${todo.tasks.length}`">{{ todo.tasks.length }}</span>
                </v-fade-transition>
            </h2>
            <v-layout my-1 align-center>
                <strong class="mx-3 info--text text--darken-3">Remaining: {{ remainingTasks }}</strong>
                <v-divider vertical></v-divider>
                <strong class="mx-3 black--text">Completed: {{ completedTasks }}</strong>
                <v-spacer></v-spacer>
                <v-progress-circular :value="progress" class="mr-2"></v-progress-circular>
            </v-layout>
            <Task
                v-if="todo.tasks.length > 0"
                v-for="(task, i) in todo.tasks"
                :key="`${i}-${task.text}`"
                :task="task"
                :indexTodo="indexTodo"
                :indexTask="i"
            />
        </v-card>
    </v-flex>
</template>

<script>
import Task from "./Task";

export default {
  props: ["todo", "indexTodo"],
  computed: {
    completedTasks() {
      return this.todo.tasks.filter(task => task.done).length;
    },
    progress() {
      return (this.completedTasks / this.todo.tasks.length) * 100;
    },
    remainingTasks() {
      return this.todo.tasks.length - this.completedTasks;
    }
  },
  methods: {
    deleteTodo(indexTodo) {
      this.$store.dispatch("todos/deleteTodo", indexTodo);
    }
  },
  components: {
    Task
  }
};
</script>

<style>
</style>
                