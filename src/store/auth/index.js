// initial state
const state = {
  auth: {}
}

// getters
const getters = {
  getAuth: state => state.auth
}

// actions
const actions = {
  signUp () {
    console.log(this.$firebase.auth())
  }
}

// mutations
const mutations = {

}

export default {
  state,
  getters,
  actions,
  mutations
}
