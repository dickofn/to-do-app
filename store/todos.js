export const state = () => ({
    todos: []
})

export const mutations = {
    'ADD_TODO'(state, todo) {
        state.todos.push({
            title: todo.title,
            tasks: todo.tasks
        })
    },
    'DELETE_TODO'(state, index) {
        state.todos.splice(index, 1)
    },
    'UPDATE_TASK'(state, index) {
        console.log(state.todos[index.indexTodo].tasks[index.indexTask].done);
        state.todos[index.indexTodo].tasks[index.indexTask].done = !state.todos[index.indexTodo].tasks[index.indexTask].done
    }
}

export const actions = {
    addTodo({ commit }, todo) {
        commit('ADD_TODO', todo);
    },
    deleteTodo({ commit }, index) {
        commit('DELETE_TODO', index);
    },
    updateTask({ commit }, index) {
        commit('UPDATE_TASK', index);
    }
}