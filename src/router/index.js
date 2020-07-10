import Vue from 'vue'
import Router from 'vue-router'
import Curriculum from '@/components/Front/Curriculum'
import Passion from '@/components/Front/Passion'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Curriculum',
      component: Curriculum
    },
    {
      path: '/passion',
      name: 'Passion',
      component: Passion
    }
  ]
})
