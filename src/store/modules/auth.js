import axios from 'axios'
import jwt from 'jsonwebtoken'
import enviroment from '../../../enviroments/enviroment'

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
    state.auth = payload
    // set state auth
    sessionStorage.setItem('_auth', JSON.stringify(state.auth))
  },
  setState (state) {
    const auth = JSON.parse(sessionStorage.getItem('_auth')) || { logined: false }
    if (auth.logined) {
      jwt.verify(auth.access_token, 'SECRET', (err, decode) => {
        if (err) {
          if (err.name === 'TokenExpiredError') {
            sessionStorage.removeItem('_auth')
            location.replace('/')
          } else {
            // todo
          }
        } else {
          state.auth = Object.assign(auth, decode)
        }
      })
    } else {
      state.auth = auth
    }
  },
  errorHandling (state, payload) {
    let message = ''
    let type = ''

    switch (payload.code) {
      case 'auth/wrong-email':
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

      case 'auth/user-not-found':
        message = '회원을 찾을 수 없습니다.'
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

    console.log(message, type)
  }
}

// actions
const actions = {
  async signIn (context, payload) {
    try {
      const auth = await axios({
        method: 'post',
        baseURL: enviroment.api,
        url: '/auth',
        data: payload,
        headers: {
          'Content-Type': 'application/json'
        }
      })
      context.commit('signIn', auth.data)
      return true
    } catch (err) {
      context.commit('errorHandling', err.response.data)
    }
  },
  async signUp (context, payload) {
    try {
      const bool = await axios({
        method: 'post',
        baseURL: enviroment.api,
        url: '/member',
        data: payload,
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
      return bool
    } catch (err) {
      context.commit('errorHandling', err.response.data)
    }
  },
  async findEmail (context, payload) {
    try {
      const email = await axios({
        method: 'post',
        baseURL: enviroment.api,
        url: '/member/find/email',
        data: payload,
        headers: {
          'Content-Type': 'application/json'
        }
      })
      return email.data
    } catch (err) {
      context.commit('errorHandling', err.response.data)
    }
  },
  async findPassword (context, payload) {
    try {
      const bool = await axios({
        method: 'post',
        baseURL: enviroment.api,
        url: '/member/find/password',
        data: payload,
        headers: {
          'Content-Type': 'application/json'
        }
      })
      return bool.data
    } catch (err) {
      context.commit('errorHandling', err.response.data)
    }
  },
  async changePassword (context, payload) {
    try {
      context.commit('setState')
      const auth = context.getters.getStateAuth
      payload = Object.assign({ id: auth.id }, payload)
      // request
      const bool = await axios({
        method: 'post',
        baseURL: enviroment.api,
        url: 'member/change/password',
        data: payload,
        headers: {
          'Content-Type': 'application/json'
        }
      })
      return bool.data
    } catch (err) {
      context.commit('errorHandling', err.response.data)
    }
  },
  async chageInfo (context, payload) {
    try {
      const bool = await axios({
        method: 'put',
        baseURL: enviroment.api,
        url: '/member',
        data: payload,
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
      return bool.data
    } catch (err) {
      context.commit('errorHandling', err.response.data)
    }
  },
  async getUser (context, payload) {
    try {
      context.commit('setState')
      const auth = context.getters.getStateAuth
      const member = await axios({
        method: 'get',
        baseURL: enviroment.api,
        url: `/member/${auth.id}`,
        headers: {
          'Content-Type': 'application/json'
        }
      })
      return member.data
    } catch (err) {
      context.commit('errorHandling', err.response.data)
    }
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
