import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

import Login from '../views/user/login/Login.vue'
import Layout from '../views/layout/Layout.vue';
import BookMenu from '../components/Book/menu/Menu.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: '登陆',
    component: Login
  },
  {
    path: '/',
    component: Layout,
    children: [{
        path: 'book',
        components: {
          aside: BookMenu,
        },
      },
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
