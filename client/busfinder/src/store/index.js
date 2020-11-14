import Vue from 'vue'
import Vuex from 'vuex'

import app from '../feathers-client';

Vue.use(Vuex)

// const url = "http://localhost:3030/lignes";
// const headers = { Accept: "application/json" };

export default new Vuex.Store({
  state: {
    // currentTrajet: {},
    allTrajets: [],
    allChauffeurs: []
  },
  // mutations: {
  //   // synchrone
  //   setTrajet(state, payload) {
  //     state.allTrajets = payload;
  //   }
  // },
  // actions: {
  //   // asynchrone
  //   async setCurrentTrajet(state) {
  //     const trajet = await fetch(url, { headers});
  //     console.log(trajet);
  //     const t = await trajet.json();
  //     // state.allTrajets = [];
  //     // t.data.forEach(trajet => {
  //     state.commit("setTrajet", t.data)
  //     // })

  //   }
  // },
  mutations: {
    CREATE_TRAJET: function(state, trajet) {
      state.allTrajets.push(trajet)
    },
    CREATE_CHAUFFEUR: function(state, chauffeur) {
      state.allChauffeurs.push(chauffeur)
    }
  },
  actions: {
    FETCH_TRAJETS: async function( { commit }) {
      let trajet = await app.service('lignes').find();
      this.state.allTrajets = []
      trajet.data.forEach(t => {
        commit('CREATE_TRAJET', t)
      })
    },
    FETCH_CHAUFFEURS: async function({ commit }) {
      let chauffeur = await app.service('chauffeurs').find();
      this.state.allChauffeurs = [];
      
      chauffeur.data.forEach(c => {
        commit('CREATE_CHAUFFEUR', c)
      })
    }
  },
  modules: {
  },
  getters: {
    getTrajets: state => state.allTrajets
  }
})
