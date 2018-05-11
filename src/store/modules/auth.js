import firebase from '@/providers/firebase'

// initial state
const state = {
  auth: {
    logined: false
  }
}

// getters
const getters = {
  getState: state => state.auth
}

// mutations
const mutations = {
  signIn (state, payload) {
    state.auth = Object.assign({ logined: true }, payload)
    // set state auth
    sessionStorage.setItem('_auth', JSON.stringify(state.auth))
  },
  setState (state) {
    state.auth = JSON.parse(sessionStorage.getItem('_auth')) || { logined: false }
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
      await firebase.database().ref(`members/${key}`).update({ lastLoginedAt: new Date().getTime() })
      context.commit('signIn', Object.assign({ key: authData.key }, authData.val()))
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
  },
  async signUpUpload (context, payload) {
    try {
      const metadata = { contentType: payload.file.type }
      const response = await firebase.storage().ref(`instructors/${payload.key}/${payload.file.name}`).put(payload.file, metadata)
      return response
    } catch (err) {
      console.log(err)
    }
  },
  async signUpDelete (context, payload) {
    try {
      await firebase.storage().ref(payload.path).delete()
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
