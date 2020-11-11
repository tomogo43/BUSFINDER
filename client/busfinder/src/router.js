import Vue from 'vue'
import Router from 'vue-router'
// Components
import Login from './components/Login.vue'
import HelloWorld from './components/HelloWorld.vue'

Vue.use(Router)

export default new Router({
   routes: [
      {
         path: '/',
         name: 'login',
         component: Login
      },
      {
         path: '/hello',
         name: 'hello',
         component: HelloWorld
      }
   ]
})