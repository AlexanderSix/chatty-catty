import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import GoodDay from '@/components/GoodDay'
import AverageDay from '@/components/AverageDay'
import BadDay from '@/components/BadDay'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', name: 'HelloWorld', component: HelloWorld },
    { path: '/good-day', name: 'GoodDay', component: GoodDay },
    { path: '/average-day', name: 'AverageDay', component: AverageDay },
    { path: '/bad-day', name: 'BadDay', component: BadDay }
  ]
})
