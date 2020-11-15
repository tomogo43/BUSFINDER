import Vue from 'vue'
import Vuex from 'vuex'

import app from '../feathers-client';

Vue.use(Vuex)


export default new Vuex.Store({
  state: {
<<<<<<< HEAD
    // currentTrajet: {},
    allTrajets: {},
    allChauffeurs: {},
    allLignes: {}
=======
    allTrajets: [],
    allChauffeurs: [],
    allLignes: []
>>>>>>> dev
  },
  mutations: {
    CREATE_TRAJET: function(state, trajet) {
      Vue.set(state.allTrajets, trajet.id, trajet)
    },
    CREATE_CHAUFFEUR: function(state, chauffeur) {
      Vue.set(state.allChauffeurs, chauffeur.id, chauffeur)
    },
    CREATE_LIGNE: function(state, ligne) {
      Vue.set(state.allLignes, ligne.id, ligne)
    },
    DELECTE_TRAJET: function(state, trajet) {
      Vue.delete(state.allTrajets, trajet.id)
    },
    DELETE_CHAUFFEUR: function(state, chauffeur) {
      Vue.delete(state.allChauffeurs, chauffeur.id)
    },
    DELETE_LIGNE: function(state, ligne) {
      Vue.delete(state.allLignes, ligne.id)
    }
  },
  actions: {
    FETCH_TRAJETS: async function( { commit }) {
      let trajet = await app.service('trajets').find();
      trajet.data.forEach(t => {
        commit('CREATE_TRAJET', t)
      })
    },
    FETCH_CHAUFFEURS: async function({ commit }) {
      let chauffeur = await app.service('chauffeurs').find();      
      chauffeur.data.forEach(c => {
        commit('CREATE_CHAUFFEUR', c)
      })
    },
    FETCH_LIGNES: async function({ commit }) {
      let ligne = await app.service('lignes').find();
      ligne.data.forEach(l => {
        commit('CREATE_LIGNE', l)
      })
    }
  },
  modules: {
  },
  getters: {
    getTrajets: state => state.allTrajets
  }
})
