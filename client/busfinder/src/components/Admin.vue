<template>
  <v-container>

    <!-- Titre --> 
    <br />
    <h1>Espace Administrateur</h1>

    <!-- Tableau de gestion -->
    <br />
    <v-tabs
          v-model="tab"
          align-with-title
          color="#9A06F0"
    >
        <v-tabs-slider color="#5DE63C"></v-tabs-slider>

        <v-tab
            v-for="item in items"
            :key="item"
        >
            {{ item }}
        </v-tab>
    </v-tabs>

    <v-tabs-items v-model="tab">
      <v-tab-item
        v-for="item in items"
        :key="item"
      >
        <v-card flat>
          <v-card-text v-text="text"></v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </v-container>
</template>

<script>
  export default {
    data () {
      return {
        tab: null,
        items: [
          'Trajets', 'Lignes', 'Chauffeurs'
        ],
        text: 'Ceci est un test'
      }
    },
  }
</script>