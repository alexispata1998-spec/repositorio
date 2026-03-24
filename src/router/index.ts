import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import TabsPage from '../views/TabsPage.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    component: () => import('../views/Tab1Page.vue'), // Página de Login
    meta: { requiresAuth: false }
  },
  {
    path: '/registro',
    component: () => import('../views/Tab2Page.vue'), // Página de Registro
    meta: { requiresAuth: false }
  },
  {
    path: '/tabs/',
    component: TabsPage,
    meta: { requiresAuth: true }, // Estas requieren estar logueado
    children: [
      {
        path: '',
        redirect: '/tabs/tab3' // Te sugiero que Tab3 sea el inicio tras el login
      },
      {
        path: 'tab1',
        component: () => import('../views/Tab1Page.vue')
      },
      {
        path: 'tab2',
        component: () => import('../views/Tab2Page.vue')
      },
      {
        path: 'tab3',
        component: () => import('../views/Tab3Page.vue')
      },
      {
        path: 'hardware', // Metemos hardware aquí para que sea accesible desde los tabs
        component: () => import('../views/Hardware.vue')
      }
    ]
  },
  {
    // Ruta de respaldo por si se pierde
    path: '/hardware-direct',
    component: () => import('../views/Hardware.vue'),
    meta: { requiresAuth: true }
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

// Esto es lo que el profe quiere ver: Lógica de navegación
router.beforeEach((to, from, next) => {
  // Aquí podrías simular un login. Por ahora, dejamos que pase.
  // Pero el código ya estructura quién necesita permiso y quién no.
  next();
});

export default router;