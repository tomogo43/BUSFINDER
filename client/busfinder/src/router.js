import Vue from 'vue'
import Router from 'vue-router'
// Components
import Login from './components/Login.vue'
import HelloWorld from './components/HelloWorld.vue'
import Trajets from './components/Trajets.vue'
import Trajets2 from './components/Trajets2.vue'

Vue.use(Router)

export default new Router({
   routes: [
      {
         path: '/',
         name: 'login',
         component: Login
      },
      {
         path: '/trajets',
         name: 'trajets',
         component: Trajets
      },
      {
         path: '/trajets2',
         name: 'trajets2',
         component: Trajets2
      },
      {
         path: '/hello',
         name: 'hello',
         component: HelloWorld
      }
   ]
})