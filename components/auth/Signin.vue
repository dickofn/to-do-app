<template>
    <v-card>
        <v-card-title class="headline">Sign In</v-card-title>
        <form @keyup.enter="signIn">
            <v-text-field
                v-model="email"
                :error-messages="emailErrors"
                label="E-mail *"
                required
                @blur="$v.email.$touch()"
                style="margin:5px 10px"
            ></v-text-field>
            <v-text-field
                type="password"
                v-model="password"
                :error-messages="passwordErrors"
                label="Password *"
                required
                @blur="$v.password.$touch()"
                style="margin:5px 10px"
            ></v-text-field>
            <v-checkbox
                v-model="checkbox"
                label="Keep sign in?"
                style="margin:5px 10px"
            ></v-checkbox>
            <v-card-text v-if="error!=''" style="color:red; font-size:12px">{{error}}</v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="green darken-1" flat @click="$emit('changeToSignUp')">Sign Up</v-btn>
                <v-btn color="green darken-1" dark @click="signIn">Sign In</v-btn>
            </v-card-actions>
        </form>
    </v-card>
</template>

<script>
import { required, email, minLength } from "vuelidate/lib/validators";

export default {
  data() {
    return {
      email: "",
      password: "",
      error: "",
      checkbox: true,
    };
  },
  methods: {
    signIn() {
      this.$v.$touch();
      if (!this.$v.$invalid) {
        let authData = {
          email: this.email,
          password: this.password
        };
        this.error = "";
        this.$store.dispatch("auth/signIn", authData);
      } else {
        this.error = "*Please check the form again!";
      }
    }
  },
  computed: {
    emailErrors() {
      const errors = [];
      if (!this.$v.email.$dirty) return errors;
      !this.$v.email.email && errors.push("Must be valid e-mail");
      !this.$v.email.required && errors.push("E-mail is required");
      return errors;
    },
    passwordErrors() {
      const errors = [];
      if (!this.$v.password.$dirty) return errors;
      !this.$v.password.required && errors.push("Password is required");
      !this.$v.password.minLen &&
        errors.push("Must be at least 6 characters long");
      return errors;
    }
  },
  validations: {
    name: {
      required
    },
    email: {
      required,
      email
    },
    password: {
      required,
      minLen: minLength(6)
    }
  }
};
</script>

<style scoped>
</style>
