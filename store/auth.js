export const state = () => ({
    idToken: null,
    userId: null,
    user: null
})

export const mutations = {
    'AUTH_USER'(state, userData) {
        state.idToken = userData.token
        state.userId = userData.userId
    },
    'STORE_USER'(state, user) {
        state.user = user
    },
    'CLEAR_AUTH'(state) {
        state.idToken = null
        state.userId = null
    }
}

export const actions = {
    signUp(authData) {

    },
    signIn({ commit }, authData) {

    },
    signOut({ commit }) {
        commit('clearAuthData')
    }
}