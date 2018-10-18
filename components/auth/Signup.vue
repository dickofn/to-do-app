<template>
    <v-card>
        <v-card-title class="headline">Sign Up</v-card-title>
        <form @keyup.enter="signUp">
            <v-text-field
                v-model="name"
                :error-messages="nameErrors"
                label="Name *"
                required
                @blur="$v.name.$touch()"
                style="margin:5px 10px"
            ></v-text-field>
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
            <v-text-field
                type="password"
                v-model="confirmPassword"
                :error-messages="confirmPasswordErrors"
                label="Confirm Password *"
                required
                @blur="$v.confirmPassword.$touch()"
                style="margin:5px 10px"
            ></v-text-field>
            <v-card-text v-if="error!=''" style="color:red; font-size:12px">{{error}}</v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="green darken-1" flat @click="$emit('changeToSignIn')">Sign In</v-btn>
                <v-btn color="green darken-1" dark @click="signUp">Sign Up</v-btn>
            </v-card-actions>
        </form>
    </v-card>
</template>

<script>
import { required, email, minLength, sameAs } from "vuelidate/lib/validators";

export default {
  data() {
    return {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      error: ""
    };
  },
  methods: {
    signUp() {
      this.$v.$touch();
      if (!this.$v.$invalid) {
        this.error = "";
        console.log("a");
      } else {
        this.error = "*Please check the form again!";
      }
    }
  },
  computed: {
    nameErrors() {
      const errors = [];
      if (!this.$v.name.$dirty) return errors;
      !this.$v.name.required && errors.push("Name is required");
      return errors;
    },
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
    },
    confirmPasswordErrors() {
      const errors = [];
      if (!this.$v.confirmPassword.$dirty) return errors;
      !this.$v.confirmPassword.sameAs && errors.push("Password does not match");
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
      //   unique: val => {
      //     if (val === "") return true;
      //     return axios
      //       .get('/users.json?orderBy="email"&equalTo="' + val + '"')
      //       .then(res => {
      //         return Object.keys(res.data).length === 0;
      //       });
      //   }
    },
    password: {
      required,
      minLen: minLength(6)
    },
    confirmPassword: {
      sameAs: sameAs("password")
    }
  }
};
</script>

<style scoped>
</style>
