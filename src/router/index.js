import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: () => import('@/views/Main.vue'),
      children: [
        // {
        //   path: '/',
        //   name: 'home',
        //   component: () => import('@/views/Home/Home')
        // },
        {
          path: '/',
          name: 'OrderList',
          component: () => import('@/views/OrderList.vue')
        },
        {
          path: '/AddOrder',
          name: 'AddOrder',
          component: () => import('@/views/AddOrder.vue')
        }
      ]
    }
  ]
})
