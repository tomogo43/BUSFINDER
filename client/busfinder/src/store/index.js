import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const url = "http://localhost:3030/lignes";
const headers = { Accept: "application/json" };

export default new Vuex.Store({
  state: {
    // currentTrajet: {},
    allTrajets: []
  },
  mutations: {
    // synchrone
    setTrajet(state, payload) {
      state.allTrajets = payload;
    }
  },
  actions: {
    // asynchrone
    async setCurrentTrajet(state) {
      const trajet = await fetch(url, { headers});
      console.log(trajet);
      const t = await trajet.json();
      // state.allTrajets = [];
      // t.data.forEach(trajet => {
      state.commit("setTrajet", t.data)
      // })

    }
  },
  modules: {
  },
  getters: {
    getTrajets: state => state.allTrajets
  }
})
