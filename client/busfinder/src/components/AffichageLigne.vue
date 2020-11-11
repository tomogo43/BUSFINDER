<template>
  <div>
        <!-- Titre -->
        <h1><b-icon icon="arrow-bar-right"></b-icon> Affichage lignes</h1>
        <br />

        <!-- Champs de saisie -->
        <input v-model="message" placeholder="Sélectionner ligne ..." />
        <br />
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

export default {
  name: 'AffichageLigne'
}

const app = Vue.createApp({
  el: '#demo',
  data() {
    return {
      searchQuery: '',
      gridColumns: ['Arret', 'Horaires'],
      gridData: [
        {Arret: 'JJaures', Horaires: '15:45' },
        { Arret: 'Bruce Lee', Horaires: '10:00' },
        { Arret: 'Jackie Chan', Horaires: '07:30' },
        { Arret: 'Jet Li', Horaires: '18:30' }
      ]
    }
  }
})

// register the grid component
app.component('demo-grid', {
  template: '#grid-template',
  props: {
    heroes: Array,
    columns: Array,
    filterKey: String
  },
  data: function() {
    return {
      sortKey: ''
    }
  },
  computed: {
    filteredHeroes: function() {
      const sortKey = this.sortKey
      const filterKey = this.filterKey && this.filterKey.toLowerCase()
      const order = this.sortOrders[sortKey] || 1
      let heroes = this.heroes
      if (filterKey) {
        heroes = heroes.filter(function(row) {
          return Object.keys(row).some(function(key) {
            return (
              String(row[key])
                .toLowerCase()
                .indexOf(filterKey) > -1
            )
          })
        })
      }
      if (sortKey) {
        heroes = heroes.slice().sort(function(a, b) {
          a = a[sortKey]
          b = b[sortKey]
          return (a === b ? 0 : a > b ? 1 : -1) * order
        })
      }
      return heroes
    },
    sortOrders() {
      const columnSortOrders = {}
      
      this.columns.forEach(function(key) {
        columnSortOrders[key] = 1
      })

      return columnSortOrders
    }
  },
  methods: {
    capitalize(str) {
      return str.charAt(0).toUpperCase() + str.slice(1)
    },
    sortBy(key) {
      this.sortKey = key
      this.sortOrders[key] = this.sortOrders[key] * -1
    }
  }
})

app.mount('#demo')
</script>

<style>

input {
    width: 25%;
}

</style>