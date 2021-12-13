import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Register from '@/components/Register'
import Login from '@/components/Login'
import Sessions from '@/components/Sessions'
import CreateSession from '@/components/CreateSession'
import UpcomingSessions from '@/components/UpcomingSessions'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/sessions',
      name: 'sessions',
      component: Sessions
    },
    {
      path: '/upcomingsessions',
      name: 'upcomingsessions',
      component: UpcomingSessions
    },
    {
      path: '/createsessions',
      name: 'createssions',
      component: CreateSession
    }
  ]
})