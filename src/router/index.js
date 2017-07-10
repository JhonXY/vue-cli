import Vue from 'vue'
import Vuex from 'vuex'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import comA from '@/components/comA'
import comB from '@/components/comB'

Vue.use(Router)
Vue.use(Vuex)

export default new Router({
  mode: 'history',
  routes: [{
      path: '/',
      name: 'hello',
      component: Hello
    },
    {
      path: '/1',
      name: 'comA',
      component: comA
    },
    {
      path: '/2',
      name: 'comB',
      component: comB
    }
  ]
})

let store = new Vuex.Store({
    state: {
        totalPrice:0
    },
    mutations: {
        increment (state, price){
            state.totalPrice += price
        },
        decrement (state, price){
            state.totalPrice -= price
        }
    }
})

export { store }
