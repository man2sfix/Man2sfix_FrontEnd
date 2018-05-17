import axios from 'axios'
import { Message } from 'element-ui'

// initial state
const state = {
  auth: {
    logined: false
  }
}

// getters
const getters = {
  getStateAuth: state => state.auth
}

// mutations
const mutations = {
  signIn (state, payload) {
    state.auth = {
      logined: true,
      key: payload.key,
      name: payload.name,
      type: payload.type,
      email: payload.email,
      lastLoginedAt: payload.lastLoginedAt
    }
    // set state auth
    sessionStorage.setItem('_auth', JSON.stringify(state.auth))
  },
  setState (state) {
    state.auth = JSON.parse(sessionStorage.getItem('_auth')) || { logined: false }
  },
  deleteLocalStorage (state, payload) {
    localStorage.removeItem(`firebase:authUser:${payload.m}:[DEFAULT]`)
  },
  errorHandling (state, payload) {
    let message = ''
    let type = ''

    switch (payload.code) {
      case 'auth/user-not-found':
        message = '회원가입된 이메일이 아닙니다.'
        type = 'warning'
        break

      case 'auth/wrong-password':
        message = '비밀번호가 맞지 않습니다.'
        type = 'warning'
        break

      case 'auth/email-already-in-use':
        message = '이미 가입된 이메일입니다.'
        type = 'warning'
        break

      case 'auth/network-request-failed':
        message = '네티워크가 불안정합니다.'
        type = 'error'
        break

      default:
        message = payload.code
        type = 'error'
        break
    }

    Message({
      showClose: true,
      message: message,
      type: type
    })
  }
}

// actions
const actions = {
  async signIn (context, payload) {
    try {
      axios.post('localhost:3000/member', payload, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })

      /*
      // firebase auth
      const signInData = await firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
      // delete localstorage
      context.commit('deleteLocalStorage', signInData)
      // auth data
      const key = payload.email.split('@').join('').split('.').join('')
      const authData = await firebase.database().ref(`members/${key}`).once('value')
      await firebase.database().ref(`members/${key}`).update({ lastLoginedAt: payload.lastLoginedAt })
      context.commit('signIn', Object.assign({ key: authData.key }, authData.val()))
      */
      // return
      return true
    } catch (err) {
      console.log(err)
      context.commit('errorHandling', err)
    }
  },
  async signUp (context, payload) {
    try {
      console.log(payload)
      axios.post('http://localhost:3000/member/', payload)
      /*
      // firebase auth
      const signUpData = await firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
      // const refreshToken = signUp.refreshToken
      // delete localstorage
      context.commit('deleteLocalStorage', signUpData)
      // delete paddword
      delete (payload.password)
      // key
      const key = payload.email.split('@').join('').split('.').join('')
      // if instructor
      if (payload.type === 'instructor') {
        // academic
        payload.academicFile = await context.dispatch('authUploadFile', { key: key, file: payload.academicFile })
        // career
        payload.careerFile = await context.dispatch('authUploadFile', { key: key, file: payload.careerFile })
        // completion
        payload.completionFile = await context.dispatch('authUploadFile', { key: key, file: payload.completionFile })
      }
      // if profile
      if (payload.profile) {
        payload.profile = await context.dispatch('authUploadFile', { key: key, file: payload.profile })
      }
      // save storage
      await firebase.database().ref(`members/${key}`).set(payload)
      */
      // return
      // return true
    } catch (err) {
      context.commit('errorHandling', err)
    }
  },
  async changePassword (context, payload) {
    /*
    try {
      // firebase login
      const res = await firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
      // update password
      await firebase.auth().currentUser.updatePassword(payload.newPassword)
      // update password date
      await firebase.database().ref(`members/${payload.key}`).update({ passwordChangedAt: payload.passwordChangedAt })
      // delete localstorage
      context.commit('deleteLocalStorage', res)
      // return
      return true
    } catch (err) {
      context.commit('errorHandling', err)
    }
    */
  },
  async passwordResetEmail (context, payload) {
    /*
    try {
      await firebase.auth().sendPasswordResetEmail(payload.value)
      return true
    } catch (err) {
      context.commit('errorHandling', err)
    }
    */
  },
  async authUploadFile (context, payload) {
    /*
    try {
      const metadata = { contentType: payload.file.type }
      const response = await firebase.storage().ref(`members/${payload.key}/${payload.file.name}`).put(payload.file, metadata)
      return {
        name: response.metadata.name,
        size: response.metadata.size,
        downloadURL: response.metadata.downloadURLs[0],
        updated: response.metadata.updated
      }
    } catch (err) {
      context.commit('errorHandling', err)
    }
    */
  },
  async authDeleteFile (context, payload) {
    /*
    try {
      await firebase.storage().ref(payload.path).delete()
      return true
    } catch (err) {
      context.commit('errorHandling', err)
    }
    */
  },
  async getUser (context, payload) {
    /*
    const user = await firebase.database().ref(`members/${payload.key}`).once('value')
    return Object.assign({ key: user.key }, user.val())
    */
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
