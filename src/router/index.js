import Vue from 'vue'
import Router from 'vue-router'

// common
import Home from '@/pages/common/Home'
import Instructors from '@/pages/common/Instructors'
import HowToUse from '@/pages/common/HowToUse'
import Faq from '@/pages/common/Faq'
import Contact from '@/pages/common/Contact'
import Magazine from '@/pages/common/Magazine'
import Community from '@/pages/common/Community'

// student
import Training from '@/pages/student/Training'

// auth
import SignIn from '@/pages/auth/SignIn'
import SignUp from '@/pages/auth/SignUp'
import SignUpStudent from '@/components/auth/SignUpStudent'
import SignUpInstructor from '@/components/auth/SignUpInstructor'
import MyPage from '@/pages/auth/MyPage'
import ChangeInfo from '@/pages/auth/ChangeInfo'
import ChangePassword from '@/pages/auth/ChangePassword'

// shaerd
import NotFound from '@/pages/shared/NotFound'

Vue.use(Router)

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
      path: '/magazine',
      name: 'magazine',
      component: Magazine
    },
    {
      path: '/community',
      name: 'community',
      component: Community
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
      meta: { NotRequiresAuth: true }
    },
    {
      path: '/signup',
      name: 'signup',
      component: SignUp,
      meta: { NotRequiresAuth: true },
      children: [
        {
          path: 'student',
          component: SignUpStudent,
          meta: { NotRequiresAuth: true }
        },
        {
          path: 'instructor',
          component: SignUpInstructor,
          meta: { NotRequiresAuth: true }
        }
      ]
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
    },
    {
      path: '/changeinfo',
      name: 'changeinfo',
      component: ChangeInfo,
      meta: { requiresAuth: true }
    },
    {
      path: '/changepassword',
      name: 'changepassword',
      component: ChangePassword,
      meta: { requiresAuth: true }
    },
    {
      path: '*',
      name: 'notfound',
      component: NotFound
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

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.NotRequiresAuth)) {
    // 로그인 있을 시 홈으로 리다이렉트
    const auth = JSON.parse(sessionStorage.getItem('_auth')) || { logined: false }
    if (auth.logined) {
      next({
        path: '/'
      })
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router
