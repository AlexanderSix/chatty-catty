import Vue from 'vue'
import Router from 'vue-router'
import CatContainer from '@/components/CatContainer'
import Login from '@/components/Login'

Vue.use(Router)

const router = new Router({
  routes: [
    { path: '/', name: 'CatContainer', component: CatContainer },
    { path: '/login', name: 'Login', component: Login }
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

  // If the router is going to login, continue there
  if (to.path === '/login') {
    next()
  }

  if (loginToken === "" || loginToken === undefined || loginToken === null) {
    next('/login')
  } else {
    next()
  }
})

export default router
