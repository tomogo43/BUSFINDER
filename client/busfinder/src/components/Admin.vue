<template>
  <v-card>
    <v-tabs
      v-model="tabs"
      centered
      color="#9A06F0"
      slider-color="#5DE63C"
    >
      <v-tab
        v-for="item in items"
        :key="item"
      >
        {{ item }}
      </v-tab>
    </v-tabs>

    <v-tabs-items v-model="tabs">
      <v-tab-item>
        <v-card flat>
          <v-card-text>
            <ListeTrajets />
          </v-card-text>
        </v-card>
      </v-tab-item>
      <v-tab-item>
        <v-card flat>
          <v-card-text>
            <ListeLignes />
          </v-card-text>
        </v-card>
      </v-tab-item>
      <v-tab-item>
        <v-card flat>
          <v-card-text>
            <ListeChauffeurs />
          </v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </v-card>
</template>

<script>

  import ListeChauffeurs from './ListeChauffeurs.vue'
  import ListeLignes from './ListeLignes.vue'
  import ListeTrajets from './ListeTrajets.vue'

  export default {
    data () {
      return {
        tabs: null,
        items: [
          "Trajets", "Lignes", "Chauffeurs"
        ]
      }
    },
    components: {
        ListeChauffeurs,
        ListeLignes,
        ListeTrajets,
    }
  }
</script>