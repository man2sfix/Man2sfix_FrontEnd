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

Vue.use(Router)

export default new Router({
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
      component: SignIn
    },
    {
      path: '/signup',
      name: 'signup',
      component: SignUp
    }
  ]
})
