import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/components/Dashboard'
import GoodDay from '@/components/GoodDay'
import AverageDay from '@/components/AverageDay'
import BadDay from '@/components/BadDay'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', name: 'Dashboard', component: Dashboard },
    { path: '/good-day', name: 'GoodDay', component: GoodDay },
    { path: '/average-day', name: 'AverageDay', component: AverageDay },
    { path: '/bad-day', name: 'BadDay', component: BadDay }
  ]
})
