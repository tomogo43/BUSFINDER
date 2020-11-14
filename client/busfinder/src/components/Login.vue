<template>

  <v-container>
    <br />

    <!-- Texte d'accueil -->
    <h1>
      Bienvenue sur Bus Finder !
    </h1>

    <!-- Formulaire de connexion -->
    <br />
    <v-form
      ref="form"
      v-model="valid"
      lazy-validation
    >
      <v-text-field
        v-model="identifiant"
        :rules="nameRules"
        label="Saisissez votre identifiant ..."
        required
        width="75"
      ></v-text-field>

      <v-text-field
        v-model="password"
        :type="'password'"
        label="Saississez votre mot de passe ..."
        required
      ></v-text-field>

      <v-btn
        color="success"
        class="mr-4"
        @click="$router.push('hello')"
      >
        Connexion
      </v-btn>

      <v-btn
        color="error"
        class="mr-4"
        @click="reset"
      >
        Annuler
      </v-btn>
    </v-form>

    <br /><br /><br />

    <!-- Bouton d'accès Utilisateur -->
    <v-btn
      x-large
      color="success"
      dark
    >
      Accès Utilisateur
    </v-btn>

  </v-container>
  
</template>

<script>
  import 'bootstrap/dist/css/bootstrap.css'
  import 'bootstrap-vue/dist/bootstrap-vue.css'

  
  export default {
    methods: {
      validate () {
        this.$refs.form.validate()
      },
      reset () {
        this.$refs.form.reset()
      }
    }
  }

</script>