import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import Service from '@/pages/Service'
import Login from '@/pages/Login'

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
      path: '/service',
      name: 'Service',
      component: Service
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})
