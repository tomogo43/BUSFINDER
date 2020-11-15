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
      lazy-validation
    >
      <v-text-field
        v-model="login"
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
        @click="checkEntry"
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
      @click="$router.push('home')"
    >
      Accès Utilisateur
    </v-btn>

    <v-snackbar
      v-model="snackbar"
    >
      Login ou mot de passe incorrect

      <template v-slot:action="{ attrs }">
        <v-btn
          color="red"
          text
          v-bind="attrs"
          @click="snackbar = false"
        >
          Fermer
        </v-btn>
      </template>
    </v-snackbar>

  </v-container>
  
</template>

<script>
  import 'bootstrap/dist/css/bootstrap.css'
  import 'bootstrap-vue/dist/bootstrap-vue.css'
  import CryptoJS from 'crypto-js'


  
  export default {
    data: () => ({
      login: '',
      password: '',
      snackbar: false
    }),
    methods: {
      validate () {
        this.$refs.form.validate()
      },
      reset () {
        this.$refs.form.reset()
      },



      checkEntry () {
        
        if (this.login === 'admin' && this.password === CryptoJS.AES.decrypt('U2FsdGVkX19xs5uqY4XG9eVvTTn2lblItxLM/suwQkw=', "Secret Passphrase").toString(CryptoJS.enc.Utf8)) {
          this.snackbar = false;
          this.$router.push('admin')
        } else {
          this.snackbar = true;
        }
        
      }
    }
  }

</script>