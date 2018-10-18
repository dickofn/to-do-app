<template>
  <v-app>
    <!-- Header -->
    <Header/>
    <!-- Content -->
    <v-content>
      <v-container>
        <nuxt/>
      </v-container>
    </v-content>
    <!-- Footer -->
    <v-footer class="pa-3">
      <v-spacer></v-spacer>
      <div>
        &copy; {{ new Date().getFullYear() }} -
        <strong>To Do</strong>
      </div>
      <v-spacer></v-spacer>
    </v-footer>
  </v-app>
</template>

<script>
import Header from "@/components/layout/Header";
export default {
  components: {
    Header
  },
  created(){
    this.$store.dispatch("auth/tryAutoSignIn")
  }
};
</script>


<style scoped>
.white-text {
  text-decoration: none;
  color: white;
}

.black-text {
  text-decoration: none;
  color: #333;
}
</style>
