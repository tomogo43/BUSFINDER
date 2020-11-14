<template>
    <div id="app">
        <h1>test API</h1>
        <br/>



        <v-card
            class="mx-auto"
            max-width="80%"
            tile
        >
            <v-list dense>
                <v-subheader>TRAJETS</v-subheader>
            </v-list>
            <v-list-item-group
                color="primary"
            >
                <v-list-item v-for="(trajet,idt) in allTraj" :key="idt">
                    <v-list-item-icon>
                        <v-avatar
                            color="indigo"
                            size="36"
                        >
                        <span class="white--text headline">{{trajet.ligne}}</span>
                        </v-avatar>
                    </v-list-item-icon>
                    <v-list-item-content>
                    Départ de : {{ trajet.ville_depart }} Arrivée à : {{ trajet.ville_arrivee }} durée : {{ trajet.duree }} heure(s)
                    </v-list-item-content>
                </v-list-item>
            </v-list-item-group>
        </v-card>

        <br/><br/><br/>
        
    
        <div class="text-center">
            <v-dialog
            v-model="dialog"
            width="500"
            >
            <template v-slot:activator="{ on, attrs }">
                <v-btn
                color="blue lighten-2"
                dark
                v-bind="attrs"
                v-on="on"
                >
                Ajouter un trajet
                </v-btn>
            </template>

            <v-card>
                <v-card-title class="headline grey lighten-2">
                Ajout d'un trajet
                </v-card-title>

                <v-card-text>
                
                <v-form
                   id="app"
                   @submit="addTrajet"
                   >
                    <p>
                        <v-text-field id="lettre_ligne"
                               type="text"
                               label="Identifiant de la ligne"
                               v-model="lettre_ligne"
                               name="lettre_ligne"></v-text-field>
                    </p>
                    <p>
                        <v-text-field id="ville_depart"
                               type="text"
                               label="Ville de départ"
                               v-model="ville_depart"
                               name="ville_depart"></v-text-field>
                    </p>
                    <p>
                        <v-text-field id="ville_arrivee"
                               type="text"
                               label="Ville d'arrivée"
                               v-model="ville_arrivee"
                               name="ville_arrivee"></v-text-field>
                    </p>
                    
                    <p>
                        <v-slider
                            v-model="duree_trajet"
                            color="blue"
                            label="Durée du trajet"
                            min="1"
                            max="100"
                            thumb-label
                            ></v-slider>
                    </p>
                </v-form>

                </v-card-text>

                <v-divider></v-divider>

                <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                    color="primary"
                    text
                    @click="addTrajet"
                >
                    I accept
                </v-btn>
                </v-card-actions>
            </v-card>
            </v-dialog>
        </div>
    </div>
</template>
<script>

import app from '@/feathers-client'

export default {
    data () {
        return {
            dialog: false,
            nom_ligne: null,
            lettre_ligne: null,
            ville_depart: null,
            ville_arrivee: null,
            duree_trajet: null
        }
    },

    mounted() {
        this.$store.dispatch('FETCH_TRAJETS')

    },
    computed: {
        // ...mapGetters(["getTrajets"]),
        allTraj () {
            console.log('ici')
            let t = this.$store.state.allTrajets
            if (t === undefined) {
                this.$store.dispatch('FETCH_TRAJETS')
                return []
            }
            return Object.values(t)
        }
        
    },
    methods: {
        
        coucou() {
            this.$store.dispatch("setCurrentTrajet");
        },
        addTrajet() {
            console.log("tst");
            console.log(this.nom_ligne);
            console.log(this.duree_trajet);

            app.service('lignes').create({
                    ligne : this.lettre_ligne,
                    ville_depart: this.ville_depart,
                    ville_arrivee: this.ville_arrivee,
                    duree: this.duree_trajet
            })
            this.dialog = false;
            this.$store.dispatch('FETCH_TRAJETS')
        }

    }
}
</script>
<style>
    h1 {
        text-align: center;
    }
</style>