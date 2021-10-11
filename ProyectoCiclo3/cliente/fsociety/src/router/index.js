import Vue from 'vue'
import VueRouter from 'vue-router'



Vue.use(VueRouter)

const routes = [
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/',
    name: 'Productos',
    component: () => import('../views/Productos.vue')
  },


  {
    path: '/editarproducto',
    name: 'EditarProductos',
    component: () => import('../views/EditarProductos.vue'),
  },
 

  {
    path: '/adminEquipo',
    name: 'AdminEquipo',
    component: () => import('../views/AdminEuipo.vue')
  },
  
  {
    path: '/contactanos',
    name: 'Contactanos',
    component: () => import('../views/Contactanos.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
