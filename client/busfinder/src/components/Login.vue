<template>
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
      @click="validate"
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