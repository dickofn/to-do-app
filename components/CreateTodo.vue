<template>
    <v-flex xs10 offset-xs1>
        <v-card>
            <v-card-title primary-title>
            <div>
                <h3 class="headline mb-0">Add New Todo</h3>
            </div>
            </v-card-title>
     
            <div style="padding-left: 17px; padding-right:50%">
            <v-text-field
                v-model="task"
                label="What are you working on?"
                @keydown.enter="create">
                <v-fade-transition slot="append">
                    <v-icon v-if="task" @click="create">add_circle</v-icon>
                </v-fade-transition>
            </v-text-field>

            </div>

            <h2 class="display-1 success--text pl-3">
                Tasks:&nbsp;
                <v-fade-transition leave-absolute>
                    <span :key="`tasks-${tasks.length}`">
                    {{ tasks.length }}
                    </span>
                </v-fade-transition>
            </h2>

            <div v-if="tasks.length > 0">
                <template v-for="(task, i) in tasks">
                    <v-divider v-if="i !== 0" :key="`${i}-divider`"></v-divider>

                    <v-list-tile :key="`${i}-${task.text}`">
                        <v-list-tile-action>
                            <v-layout row>
                                <v-flex>
                                    <v-icon @click="remove">remove_circle</v-icon>
                                </v-flex>
                                <v-flex>
                                    <div v-text="task.text" @click="remove" style="cursor:pointer"></div>
                                </v-flex>                            
                            </v-layout>
                        </v-list-tile-action>
                    </v-list-tile>
                </template>
            </div>

            <v-divider class="mb-3"></v-divider>

            <v-card-actions>
                <v-spacer/>
                <v-btn flat color="orange">Create</v-btn>
                <v-btn flat color="orange" @click="reset">Reset</v-btn>
            </v-card-actions>
        </v-card>
    </v-flex>
</template>

<script>
export default {
  data: () => ({
    tasks: [],
    task: null
  }),

  methods: {
    create() {
      this.tasks.push({
        done: false,
        text: this.task
      });

      this.task = null;
    },
    remove(i) {
      this.tasks.splice(i, 1);
    },
    reset() {
      this.task = null;
      this.tasks = [];
    }
  }
};
</script>

<style>
</style>
