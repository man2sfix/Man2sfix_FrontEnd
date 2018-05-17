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
import Company from '@/pages/common/Company'
import Service from '@/pages/common/Service'
import CustomerCenter from '@/pages/common/CustomerCenter'
import TermsOfUse from '@/pages/common/TermsOfUse'
import PrivacyPolicy from '@/pages/common/PrivacyPolicy'

// student
import Training from '@/pages/student/Training'

// auth
import SignIn from '@/pages/auth/SignIn'
import FindAccount from '@/pages/auth/FindAccount'
import FindEmail from '@/components/auth/FindEmail'
import FindPassword from '@/components/auth/FindPassword'
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
    // Common Page Router
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
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
      component: Magazine,
      children: [
        {
          path: ':id',
          component: Magazine
        }
      ]
    },
    {
      path: '/community',
      name: 'community',
      component: Community,
      children: [
        {
          path: ':id',
          component: Community
        }
      ]
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
      path: '/company',
      name: 'company',
      component: Company
    },
    {
      path: '/service',
      name: 'service',
      component: Service
    },
    {
      path: '/how-to-use',
      name: 'howtouse',
      component: HowToUse
    },
    {
      path: '/customer-center',
      name: 'customercenter',
      component: CustomerCenter
    },
    {
      path: '/terms-of-use',
      name: 'termsofuse',
      component: TermsOfUse
    },
    {
      path: '/privacy-policy',
      name: 'privacypolicy',
      component: PrivacyPolicy
    },
    // Only Student Page Router
    {
      path: '/training',
      name: 'training',
      component: Training
    },
    // Auth Page Router
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
      path: '/find-account',
      name: 'findaccount',
      component: FindAccount,
      meta: { NotRequiresAuth: true },
      children: [
        {
          path: 'email',
          component: FindEmail
        },
        {
          path: 'password',
          component: FindPassword
        }
      ]
    },
    {
      path: '/change-info',
      name: 'changeinfo',
      component: ChangeInfo,
      meta: { requiresAuth: true }
    },
    {
      path: '/change-password',
      name: 'changepassword',
      component: ChangePassword,
      meta: { requiresAuth: true }
    },
    {
      path: '/mypage',
      name: 'mypage',
      component: MyPage,
      meta: { requiresAuth: true }
    },
    // NotFound Page Router
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
    // 로그인 정보 있을 시 홈으로 리다이렉트
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
