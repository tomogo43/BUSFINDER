<template>
  <v-data-table
    :headers="headers"
    :items="allTrajets"
    sort-by="calories"
    class="elevation-1"
  >
    <template v-slot:top>
      <v-toolbar
        flat
      >
        <v-toolbar-title>Les trajets</v-toolbar-title>
        <v-divider
          class="mx-4"
          inset
          vertical
        ></v-divider>
        <v-spacer></v-spacer>
        <v-dialog
          v-model="dialog"
          max-width="1500px"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              color="#5DE63C"
              dark
              class="mb-2"
              v-bind="attrs"
              v-on="on"
            >
              Ajouter un nouveau trajet
            </v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="headline">{{ formTitle }}</span>
            </v-card-title>

            <v-card-text>
              <v-container>
                <v-row>
                  <v-col
                    cols="12"
                    sm="4"
                    md="4"
                  >
                    <v-select
                    :items="allLignes"
                    v-model = "editedItem.ligne"
                    label="Les lignes"
                    outlined
                  ></v-select>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="4"
                    md="4"
                  >
                  <!-- Heure de départ -->
                    <v-menu
                      ref="menu"
                      v-model="menu"
                      :close-on-content-click="false"
                      :nudge-right="40"
                      :return-value.sync="h_depart"
                      transition="scale-transition"
                      offset-y
                      max-width="290px"
                      min-width="290px"
                    >
                      <template v-slot:activator="{ on, attrs }">
                        <v-text-field
                          v-model="h_depart"
                          label="Heure de départ"
                          prepend-icon="mdi-clock-time-four-outline"
                          readonly
                          v-bind="attrs"
                          v-on="on"
                        ></v-text-field>
                      </template>
                      <v-time-picker
                        v-if="menu"
                        v-model="h_depart"
                        format="24hr"
                        full-width
                        @click:minute="$refs.menu.save(h_depart)"
                      ></v-time-picker>
                    </v-menu>
                    </v-col>
                <v-col
                    cols="12"
                    sm="4"
                    md="4"
                  >
                  <v-select
                    :items="allChauffeurs"
                    v-model="editedItem.chauffeur"
                    label="Les chauffeurs"
                    outlined
                  ></v-select>  
                  </v-col>
                  <v-spacer></v-spacer>
                  <v-col
                    cols="11"
                    sm="5"
                  >
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="blue darken-1"
                text
                @click="close"
              >
                Annuler
              </v-btn>
              <v-btn
                color="blue darken-1"
                text
                @click="save"
              >
                Valider
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <v-dialog v-model="dialogDelete" max-width="500px">
          <v-card>
            <v-card-title class="headline">Etes-vous sur de vouloir supprimer ce trajet ?</v-card-title>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="closeDelete">Annuler</v-btn>
              <v-btn color="blue darken-1" text @click="deleteItemConfirm">Oui</v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
    </template>
    <template v-slot:item.actions="{ item }">
      <v-icon
        small
        class="mr-2"
        @click="editItem(item)"
      >
        mdi-pencil
      </v-icon>
      <v-icon
        small
        @click="deleteItem(item)"
      >
        mdi-delete
      </v-icon>
    </template>
  </v-data-table>
</template>

<script>

  import app from '@/feathers-client'

  export default {
    data: () => ({
      h_depart: null,
      menu: false,
      modal2: false,
      dialog: false,
      dialogDelete: false,
      duree: 0,
      items: [],
      headers: [
        { text: 'Ligne', value: 'ligne' },
        { text: 'Chauffeur', value: 'chauffeur' },
        { text: 'Heure de départ', value: 'h_depart' },
        { text: 'Heure d\'arrivée', value: 'h_arrivée' },
        { text: 'Actions', value: 'actions', sortable: false },
      ],
      desserts: [],
      editedIndex: -1,
      editedItem: {
        ligne: '',
        chauffeur: '',
        heure: null,
      },
      defaultItem: {
        ligne: '',
        chauffeur: '',
        heure: null,
      },
    }),
    mounted() {
      this.$store.dispatch("FETCH_LIGNES"),
      this.$store.dispatch("FETCH_CHAUFFEURS"),
      this.$store.dispatch("FETCH_TRAJETS")
    },

    computed: {
      formTitle () {
        return this.editedIndex === -1 ? 'Nouveau trajet' : 'Modifier un trajet'
      },

      allLignes () {
        let lignes = this.$store.state.allLignes;
        let arrayLigne = [];
        lignes.forEach(l => {
          let description = "";
          description = l.numero + " De " + l.depart + "  à "+ l.destination;
          arrayLigne.push(description)
        })
        return arrayLigne;
      },

      allChauffeurs () {
        let chauffeurs = this.$store.state.allChauffeurs;
        let arrayChauffeur = [];
        chauffeurs.forEach(c => {
          let description = c.nom + " " + c.prenom;
          arrayChauffeur.push(description);
        })
        return arrayChauffeur;
      },

      allTrajets () {
        let trajets = this.$store.state.allTrajets;
        return Object.values(trajets);

      }
    },

    watch: {
      dialog (val) {
        val || this.close()
      },
      dialogDelete (val) {
        val || this.closeDelete()
      },
    },

    methods: {
      

      editItem (item) {
        this.editedIndex = this.desserts.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },

      deleteItem (item) {
        this.editedIndex = this.desserts.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialogDelete = true
      },

      deleteItemConfirm () {
        app.service('trajets').remove(this.editedItem._id);
        this.$store.dispatch('FETCH_TRAJETS')
        this.closeDelete()
      },

      close () {
        this.dialog = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },

      closeDelete () {
        this.dialogDelete = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },

      save () {
        let [hour, minute] = String(this.h_depart).split(':');
        let duree = 0;
        // ajout de la durée au trajet
        this.$store.state.allLignes.forEach(l => {
          let numero = this.editedItem.ligne.split(' ');
          if (numero[0] === l.numero) {
            duree = l.duree;
          }
        })
        let h_arrivée = 0
        if ((Number(hour) + Number(duree)) > 24) {
          h_arrivée = ((Number(hour) + Number(duree)) -24) + ":" + minute;
        } else {
          h_arrivée = (Number(hour) + Number(duree)) + ":" + minute;
        }
        let arrayTrajet = {
          "ligne" : this.editedItem.ligne,
          "chauffeur" : this.editedItem.chauffeur,
          "h_depart" : this.h_depart,
          "h_arrivée" : h_arrivée,
          "_id" : this.editedItem._id
        }

        if (this.editedIndex !== -1) {
          app.service('trajets').remove(arrayTrajet._id);
        }
        app.service('trajets').create(arrayTrajet);
        this.$store.dispatch('FETCH_TRAJETS')

        this.close()    
      },
    },
  }
</script>

<style>
  th {
    background-color: rgba(154, 6, 240, 0.5);
  }
</style>