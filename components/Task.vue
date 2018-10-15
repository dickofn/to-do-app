<template>
    <div>
        <v-divider></v-divider>
        <v-list-tile>
            <v-list-tile-action>
                <v-layout row>
                    <v-flex>
                        <v-icon
                            @click="updateTask(indexTodo, indexTask)"
                        >{{task.done ? "check_box" : "check_box_outline_blank"}}</v-icon>
                    </v-flex>
                    <v-flex>
                        <div
                            :class="task.done && 'grey--text strikethrough' || 'text--primary'"
                            @click="updateTask(indexTodo, indexTask)"
                            style="cursor:pointer"
                            v-text="task.text"
                        ></div>
                    </v-flex>
                </v-layout>
            </v-list-tile-action>
            <v-spacer></v-spacer>
            <v-scroll-x-transition>
                <v-icon v-if="task.done" color="success">check</v-icon>
            </v-scroll-x-transition>
        </v-list-tile>
    </div>
</template>

<script>
export default {
  props: ["task", "indexTodo", "indexTask"],
  methods: {
    updateTask(indexTodo, indexTask) {
      this.$store.dispatch("todos/updateTask", { indexTodo, indexTask });
    }
  },
  computed: {
    taskStatus() {
      return this.task.done;
    }
  }
};
</script>

<style scoped>
.strikethrough {
  text-decoration: line-through;
}
</style>

