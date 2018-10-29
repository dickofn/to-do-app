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
    async signIn({ commit }, loginData) {
        let authData;
        await this.$axios.post("https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyCbO7DQOZWbVs7Yeey60muwbXqxsNVJxGk", loginData)
            .then(res => {
                authData = {
                    token: res.data.idToken,
                    uid: res.data.localId,
                }
            })
            .then(() => {
                this.$axios.get('/users.json?orderBy="email"&equalTo="' + loginData.email + '"')
                    .then(res => {
                        for (let key in res.data) {
                            authData.user = {
                                name: res.data[key].name,
                                email: res.data[key].email
                            }
                        }
                        console.log(authData)
                        commit('AUTH_USER', authData)
                    })
            })
    },
    signOut({ commit }) {
        commit('CLEAR_AUTH')
    }
}