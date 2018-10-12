<template>
  <v-app>

    <!-- Header -->
    <v-toolbar class="">
      <v-toolbar-title>
        <nuxt-link class="title black-text" to="/">To Do</nuxt-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn flat="flat" to="/">Home</v-btn>
        <v-btn flat="flat" to="/todos">To Dos</v-btn>
        <v-btn flat="flat" to="/about">About</v-btn>
      </v-toolbar-items>
    </v-toolbar>

    <!-- Content -->
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>

    <!-- Footer -->
    <v-footer class="pa-3">
      <v-spacer></v-spacer>
      <div>&copy; {{ new Date().getFullYear() }} - <strong>To Do</strong></div>
      <v-spacer></v-spacer>
  </v-footer>
  </v-app>
</template>

<style scoped>
.white-text{
  text-decoration: none;
  color: white;
}

.black-text{
  text-decoration: none;
  color: #333;
}
</style>
