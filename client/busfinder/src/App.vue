<template>
  <v-app>
    <v-app-bar
      app
      color="#9A06F0"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Mini Logo"
          class="shrink mr-2"
          contain
          src="../images/mini-logo.png"
          transition="scale-transition"
          width="25"
        />

        <h2>Bus Finder</h2>
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="/"
        target="_blank"
        text
      >
        <span class="mr-2">Connexion</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
