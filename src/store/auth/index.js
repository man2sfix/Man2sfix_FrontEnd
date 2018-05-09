import firebase from '@/providers/firebase'

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
  signUp (context, payload) {
    firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
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
