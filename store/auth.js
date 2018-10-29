export const state = () => ({
    token: null,
    uid: null,
    user: null
})

export const mutations = {
    'AUTH_USER'(state, authData) {
        state.token = authData.token
        state.uid = authData.uid
        state.user = authData.user
    },
    'CLEAR_AUTH'(state) {
        state.token = null
        state.uid = null
        state.user = null
    }
}

export const actions = {
    async signIn({ commit }, authData) {
        await this.$axios.post("https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyCbO7DQOZWbVs7Yeey60muwbXqxsNVJxGk", authData)
            .then(res => {
                let authData = {
                    token: res.data.idToken,
                    uid: res.data.localId,
                }
                // await this.$axios.get("")
                commit('AUTH_USER', authData)
            })
    },
    signOut({ commit }) {
        commit('CLEAR_AUTH')
    }
}