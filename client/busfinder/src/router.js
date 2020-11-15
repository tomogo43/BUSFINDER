import Vue from 'vue'
import Router from 'vue-router'
// Components
import Login from './components/Login.vue'
import HelloWorld from './components/HelloWorld.vue'
import Trajets2 from './components/Trajets2.vue'
import Admin from './components/Admin.vue'
import ListeChauffeurs from './components/ListeChauffeurs.vue'
import ListeLignes from './components/ListeLignes.vue'
import ListeTrajets from './components/ListeTrajets.vue'

Vue.use(Router)

export default new Router({
   routes: [
      {
         path: '/',
         name: 'login',
         component: Login
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
      },
      {
         path: '/admin',
         name: 'admin',
         component: Admin
      },
      {
         path: '/chauffeurs',
         name: 'Liste des Chauffeurs',
         component: ListeChauffeurs
      },
      {
         path: '/lignes',
         name: 'Liste des Lignes',
         component: ListeLignes
      },
      {
         path: '/trajets',
         name: 'Liste des Trajets',
         component: ListeTrajets
      }
   ]
})