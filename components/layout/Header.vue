<template>
  <v-toolbar class="">
    <v-toolbar-title>
      <nuxt-link class="title black-text" to="/">To Do</nuxt-link>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <span class="title" v-if="isAuthenticated" style="margin-right:10px">
        Welcome, {{this.$store.state.auth.user.name}}
    </span>
    <v-toolbar-items>
      <v-btn v-if="!isAuthenticated" fab small color="success" depressed @click="dialog = true">
        <v-icon>account_circle</v-icon>
      </v-btn>
      <v-btn v-else color="error" depressed @click="signOut">Sign Out</v-btn>
      <v-dialog v-model="dialog" max-width="500px">
        <v-card>
          <v-slide-y-transition hide-on-leave>
            <component :is="sign" @changeToSignUp="signUp" @changeToSignIn="signIn" @closeDialog="dialog = false"></component>
          </v-slide-y-transition>
        </v-card>
      </v-dialog>
      <v-btn flat to="/">Home</v-btn>
      <v-btn flat to="/todos">To Dos</v-btn>
      <v-btn flat to="/about">About</v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
import Signup from "../auth/Signup";
import Signin from "../auth/Signin";

export default {
  data() {
    return {
      dialog: false,
      sign: "Signin"
    };
  },
  methods: {
    signIn() {
      this.sign = "Signin";
    },
    signUp() {
      this.sign = "Signup";
    },
    signOut(){
      this.$store.dispatch("auth/signOut")
    }
  },
  computed: {
    isAuthenticated() {
      return this.$store.state.auth.token;
    }
  },
  components: {
    Signup,
    Signin
  }
};
</script>

<style>
.black-text {
  text-decoration: none;
  color: #333;
}
</style>
