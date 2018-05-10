import firebase from '@/providers/firebase'

// initial state
const state = {
  auth: {}
}

// getters
const getters = {
  getAuth: state => state.auth
}

// mutations
const mutations = {
  signIn (state, payload) {
    state.auth = Object.assign({
      logined: true
    }, payload)
    // set state auth
    sessionStorage.setItem(`auth:${state.auth.key}`, JSON.stringify(state.auth))
  },
  deleteLocalStorage (state, payload) {
    localStorage.removeItem(`firebase:authUser:${payload.m}:[DEFAULT]`)
  }
}

// actions
const actions = {
  async signIn (context, payload) {
    try {
      // firebase auth
      const signInData = await firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
      // delete localstorage
      context.commit('deleteLocalStorage', signInData)
      // auth data
      const key = payload.email.split('@').join('').split('.').join('')
      const authData = await firebase.database().ref(`members/${key}`).once('value')
      await firebase.database().ref(`members/${key}`).update({lastLoginedAt: new Date().getTime()})
      context.commit('signIn', Object.assign({key: authData.key}, authData.val()))
      // reutrn
      return true
    } catch (err) {
      console.log(err)
    }
  },
  async signUp (context, payload) {
    try {
      // firebase auth
      const signUpData = await firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
      // const refreshToken = signUp.refreshToken
      // delete localstorage
      context.commit('deleteLocalStorage', signUpData)
      // delete paddword
      delete (payload.password)
      // key
      const key = payload.email.split('@').join('').split('.').join('')
      // save storage
      await firebase.database().ref(`members/${key}`).set(payload)
      // return
      return true
    } catch (err) {
      console.log(err)
    }
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
