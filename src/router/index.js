import { meta } from 'eslint-plugin-prettier'
import { createRouter, createWebHistory } from 'vue-router'


const routes = [

  { path: '/', redirect: { name: 'user-login' } },
  {
    meta: {
      title: 'User Login'
    },
    path: '/auth/login',
    name: 'user-login',
    component: () => import("../views/LoginView.vue")
  },

  {
    path: '/:username/',
    component: () => import("../views/MainView.vue"),
    name: 'user-view',
    children: [
      { path: 'dashboard', name: 'dashboard', component: () => import("../views/pages/DashboardView.vue"), meta:{ title: 'Dashboard'}},
      { path: 'edit-profile', name: 'edit-profile', component: () => import("../views/pages/ProfileView.vue"), meta: {title: 'Update Profile'} },
      { path: 'expenses', name: 'expenses', component: () => import("../views/pages/ExpenseView.vue"), meta: {title: 'Expenses'} },
    ],
    // meta: {
    //   title: 'Authentication'
    // }
  },
  

]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return savedPosition || { left: 0, top: 0 }
  }
})

router.beforeEach((to, from, next) => {
  document.title = `Expense Tracker - ${to.meta.title}`
  next()
})

export default router
