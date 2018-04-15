import Vue from 'vue'
import Router from 'vue-router'
import CatContainer from '@/components/CatContainer'
import Login from '@/components/Login'

Vue.use(Router)

const router = new Router({
  routes: [
    { path: '/', name: 'CatContainer', component: CatContainer },
    { path: '/login', name: 'Login', component: Login },
    { path: '/logout', name: 'Logout', component: Login }
  ]
})

/**
 * Middleware that runs before each route
 */
router.beforeEach((to, from, next) => {
  // Stores the login token in localstorage so even if the
  // page is closed, the login will be valid (until
  // logged out intentionally)
  let loginToken = localStorage.getItem('logintoken')
  let registeredToken = localStorage.getItem('registeredtoken')

  // If the router is going to login, continue there
  if (to.path === '/login') {
    next()
  }

  // If the router is going to logout, first remove the
  // logintoken, THEN go to the login screen
  if (to.path === '/logout') {
    localStorage.removeItem('logintoken')
    next()
  }

  if (loginToken === "" || loginToken === undefined || loginToken === null) {
    if (registeredToken === 'registered') {
      next('/login')
    } else {
      if (to.path === '/') {
        next()
      } else {
        next('/')
      }
    }
  } else {
    if (to.path === '/login') {
      next('/')
    } else {
      next()
    }

  }
})

export default router
