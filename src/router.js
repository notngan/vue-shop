import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Cart from './views/Cart.vue'

import Index from './admin/Index.vue'
import New from './admin/New.vue'
import Edit from './admin/Edit.vue'
import Products from './admin/Products.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/admin',
      name: 'about',
      component: Index,
      children: [
        {
          path: 'new',
          name: 'new',
          component: New
        },
        {
          path: 'edit/:id',
          name: 'edit',
          component: Edit
        },
        {
          path: '',
          name: 'products',
          component: Products
        }
      ]
    },
    {
      path: '/cart',
      name: 'cart',
      component: Cart
    }
  ]
})
