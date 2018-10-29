<template>
  <v-container fluid grid-list-md>
    <v-btn fab dark color="cyan" @click="isCreating = !isCreating">
      <v-icon v-if="!isCreating" dark>add</v-icon>
      <v-icon v-else dark>cancel</v-icon>
    </v-btn>
    <v-btn fab dark color="green" v-if="!isCreating">
      <v-icon dark @click="saveData">save</v-icon>
    </v-btn>
    <v-btn fab dark color="indigo" v-if="!isCreating">
      <v-icon dark @click="loadData">get_app</v-icon>
    </v-btn>
    <v-layout v-if="!isCreating" row wrap="">
      <Todo
        v-for="(todo, index) in todos"
        :key="index + todo.title"
        :todo="todo"
        :indexTodo="index"
      />
    </v-layout>
    <v-layout v-else align-center justify-space-between row wrap="">
      <CreateTodo/>
    </v-layout>
  </v-container>
</template>

<script>
import Todo from "@/components/todos/Todo";
import CreateTodo from "@/components/todos/CreateTodo";
export default {
  data() {
    return {
      isCreating: false
    };
  },
  methods: {
    async saveData() {
      await this.$axios
        .put("/todos/" + this.$store.state.auth.uid + ".json", this.$store.state.todos.todos)
        .then(res => console.log(res));
    },
    loadData() {
      this.$store.dispatch("todos/loadTodos", this.$store.state.auth.uid);
    }
  },
  computed: {
    todos() {
      return this.$store.state.todos.todos;
    }
  },
  components: {
    Todo,
    CreateTodo
  }
};
</script>

<style scoped>
</style>
