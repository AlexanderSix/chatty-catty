import Vue from 'vue'
import Router from 'vue-router'
import CatContainer from '@/components/CatContainer'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', name: 'CatContainer', component: CatContainer }
  ]
})
