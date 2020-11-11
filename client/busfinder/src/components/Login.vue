<template>
  <div class="login">
        <!-- Titre -->
        <h1><b-icon icon="arrow-bar-right"></b-icon> Se connecter</h1>
        <br />

        <!-- Champs de saisie -->
        <input v-model="message" placeholder="Saisissez votre identifiant ..." />
        <br /><br />
        <input v-model="message" type="password" placeholder="Saisissez votre mot de passe ..." />
        <br /><br />

        <b-button variant="outline-primary" size="lg">Connexion</b-button>
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

export default {
  name: 'Login'
}
</script>

<style>

input {
    width: 25%;
}

</style>