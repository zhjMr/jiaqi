import Vue from 'vue'
import VueRouter from 'vue-router'
import IndexView from '../views/index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    component: IndexView,
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
      }
    ]
  },

]

const router = new VueRouter({
  routes
})

export default router
