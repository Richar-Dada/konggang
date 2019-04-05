import Vue from 'vue'
import Router from 'vue-router'
import Gift from '@/views/Gift'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/gift', name: 'Gift', component: Gift },
    { path: '*', redirect: '/gift' }
  ]
})
