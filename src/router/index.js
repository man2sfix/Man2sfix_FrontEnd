import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/pages/Home'
import Instructors from '@/pages/Instructors'
import HowToUse from '@/pages/HowToUse'
import Faq from '@/pages/Faq'
import Contact from '@/pages/Contact'
import Training from '@/pages/Training'
import SignIn from '@/pages/auth/SignIn'
import SignUp from '@/pages/auth/SignUp'
import MyPage from '@/pages/user/MyPage'

Vue.use(Router)

const notRequireAuth = (to, from, next) => {
  const auth = JSON.parse(sessionStorage.getItem('_auth')) || { logined: false }
  if (auth.logined) {
    next('/')
  } else {
    next()
  }
}

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/instructors',
      name: 'instructors',
      component: Instructors
    },
    {
      path: '/howtouse',
      name: 'howtouse',
      component: HowToUse
    },
    {
      path: '/faq',
      name: 'faq',
      component: Faq
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    },
    {
      path: '/training',
      name: 'training',
      component: Training
    },
    {
      path: '/signin',
      name: 'signin',
      component: SignIn,
      beforeEnter: notRequireAuth
    },
    {
      path: '/signup',
      name: 'signup',
      component: SignUp
    },
    {
      path: '/signout',
      name: 'signout',
      beforeEnter: (to, from, next) => {
        sessionStorage.removeItem('_auth')
        location.replace('/')
      }
    },
    {
      path: '/mypage',
      name: 'mypage',
      component: MyPage,
      meta: { requiresAuth: true }
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // 로그인 정보 없을 시 로그인페이지로 리다이렉트
    const auth = JSON.parse(sessionStorage.getItem('_auth')) || { logined: false }
    if (!auth.logined) {
      next({
        path: '/signin',
        query: { redirect: to.fullPath }
      })
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router
