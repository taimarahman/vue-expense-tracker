import { createRouter, createWebHistory } from 'vue-router'


const routes = [


  
  // {
  //   path: '/:companyName/',
  //   component: CandidateLoginView,
  //   name: 'candidateView',
  //   children: [
  //     { path: 'login', name: 'login', component: LoginForm },
  //     { path: 'signup', name: 'signup', component: SignupForm },
  //   ],
  //   meta: {
  //     title: 'Authentication'
  //   }
  // },
  

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
