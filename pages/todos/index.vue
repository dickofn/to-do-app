<template>
  <v-container fluid grid-list-md>
    <v-btn fab dark color="cyan" @click="isCreating = !isCreating">
      <v-icon v-if="!isCreating" dark>add</v-icon>
      <v-icon v-else dark>cancel</v-icon>
    </v-btn>
    <v-layout v-if="!isCreating" row wrap>
        <Todo v-for="(todo, index) in todos" :key="index + todo.title" :todo="todo" :indexTodo="index"/>
    </v-layout>
    <v-layout v-else align-center justify-space-between row wrap>
      <CreateTodo/>
    </v-layout>
  </v-container>
</template>

<script>
import Todo from "@/components/Todo";
import CreateTodo from "@/components/CreateTodo";
export default {
  data() {
    return {
      isCreating: false
    };
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
