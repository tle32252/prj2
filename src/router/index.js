import Vue from 'vue'
import Router from 'vue-router'
import SignIn from '@/components/SignIn'
import Home from '@/components/Home'
import Home2 from '@/components/Home2'
import Input from '@/components/Input'
import Calculate from '@/components/Calculate'

Vue.use(Router)

// singleton pattern for ES6
// https://k94n.com/es6-modules-single-instance-pattern
// importing @/router/index.js will always return the same instance
export default new Router({
  routes: [
    {
      path: '/',
      component: SignIn
    },
    {
      path: '/sign_in',
      name: 'Users.sign_in',
      component: SignIn
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/input',
      name: 'Input',
      component: Input
    },
    {
      path: '/calculate',
      name: 'Calculate',
      component: Calculate
    },
    {
      path: '/home2',
      name: 'Home2',
      component: Home2
    }
  ]
})
