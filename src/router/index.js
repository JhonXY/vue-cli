import Vue from 'vue'
import IndexPage from '../pages/index'
import Router from 'vue-router'


Vue.use(Router)


export default new Router({
  mode: 'history',
  routes: [{
      path: '/',
      component: IndexPage
    }
  ]
})
