import Vue from 'vue'
import VueRouter from 'vue-router'
import IndexView from '../views/index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    component: IndexView,
    redirect: "/home",
    children: [
      {
        path: '/home',
        name: 'home',
        component: () => import('../views/home.vue')
      },
      {
        path: 'article',
        name: 'article',
        component: () => import('../views/article.vue')
      },
      {
        path: 'classify',
        name: 'classify',
        component: () => import('../views/classify.vue')
      },
      {
        path: 'label',
        name: 'label',
        component: () => import('../views/label.vue')
      },
      {
        path: 'advertising',
        name: 'advertising',
        component: () => import('../views/advertising.vue')
      },
      {
        path: 'user',
        name: 'user',
        component: () => import('../views/user.vue')
      },
      {
        path: 'role',
        name: 'role',
        component: () => import('../views/role.vue')
      },
      {
        path: 'menu',
        name: 'menu',
        component: () => import('../views/menu.vue')
      },
    ]
  },

]

const router = new VueRouter({
  routes
})

export default router
