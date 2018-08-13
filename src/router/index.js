
import Vue from 'vue'
import Router from 'vue-router'
import myOrder from '@/components/myOrder'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/my-order',
      name: 'myOrder',
      component: myOrder
    },
    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
