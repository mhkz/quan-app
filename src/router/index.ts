import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from '../views/user/login/Login.vue'
import Layout from '../views/layout/Layout.vue';
import BookMenu from '../components/Book/menu/Menu.vue'
import Book from '../views/book/Book.vue';



import Spider from "@/views/book/spider/Spider.vue";
import BindCategory from "@/views/book/bindCategory/BindCategory.vue"
import Manage from "@/views/book/manage/Manage.vue";

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
          main: Book
        },
        children: [{
          path: 'spider',
          component: Spider,
        },{
          path: 'bind-category/:id',
          component: BindCategory
        },{
            path: 'manage',
            component: Manage
        }]
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
