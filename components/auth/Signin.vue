<template>
    <v-card>
        <v-card-title class="headline">Sign In</v-card-title>
        <v-card-text>Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.</v-card-text>
        <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="green darken-1" flat @click="$emit('changeToSignUp')">Sign Up</v-btn>
            <v-btn color="green darken-1" dark @click="signIn">Sign In</v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
export default {
    methods:{
        signIn(){}
    }
};
</script>

<style>
</style>
