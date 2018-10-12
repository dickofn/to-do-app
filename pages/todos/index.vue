<template>
    <v-container grid-list-md> 
        <v-btn fab dark color="cyan"
        @click="isCreating = !isCreating">
            <v-icon v-if="!isCreating" dark>add</v-icon>
            <v-icon v-if="isCreating" dark>cancel</v-icon>
        </v-btn>
        <v-layout v-if="!isCreating" align-center justify-space-between row wrap>        
            <Todo/>            
        </v-layout>
        <v-layout v-else align-center justify-space-between row wrap>
            <CreateTodo/>
        </v-layout>
    </v-container>
</template>

<script>
import Todo from '@/components/Todo'
import CreateTodo from '@/components/CreateTodo'
export default {
    data(){
        return{
            isCreating: false
        }
    },
    components: {
        Todo,
        CreateTodo
    },
}
</script>

<style>
</style>
