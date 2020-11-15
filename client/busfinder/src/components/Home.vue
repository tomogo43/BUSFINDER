<template>
    <v-container>
        <br />
        <v-row>
            <v-col
                cols="2"
                sm="2"
                md="2"
            >
                <v-img
                    alt="Logo"
                    class="shrink mr-2"
                    contain
                    src="../../images/logo.png"
                    transition="scale-transition"
                    width="75%"
                />
            </v-col>

            <!-- Titre -->
            <v-col
                cols="10"
                sm="10"
                md="10"
            >   
                <br />
                <h1>Recherchez votre trajet avec Bus Finder !</h1>
            </v-col>
        </v-row>

        <!-- Formulaire de recherche -->
        <br /><br />
        <v-card
            class="mx-auto"
            max-width="80%"
            tile
        >   
            <br />
            <strong>Choisissez une ligne :</strong>

            <v-form>
                <v-select
                    v-model="selectedLigne"
                    :items="allLignes"
                    outlined
                    @change="searchTrajets()"
                >
                </v-select>
            </v-form>
        </v-card>

        <br /><br />
        <!-- Liste des trajets -->
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
                            color="#9A06F0"
                            size="36"
                        >
                        <span class="white--text headline">{{trajet.ligne.substr(0,1)}}</span>
                        </v-avatar>
                    </v-list-item-icon>
                    <v-list-item-content>
                    Ligne : {{ trajet.ligne }} - Heure de départ : {{ trajet.h_depart }} - Heure d'arrivée: {{ trajet.h_arrivée }}
                    </v-list-item-content>
                </v-list-item>
            </v-list-item-group>
        </v-card>

    </v-container>
</template>


<script>

export default {

    data: () => ({
        recherche : undefined
    }),

    mounted() {
        this.$store.dispatch('FETCH_TRAJETS'),
        this.$store.dispatch("FETCH_LIGNES")
    },

    computed: {
        allTraj () {
            let trajets = this.$store.state.allTrajets
            let trajetsAffiches = []
            if (trajets === undefined) {
                this.$store.dispatch('FETCH_TRAJETS')
                return []
            }

            if (this.recherche === undefined) {
                return Object.values(trajets)
            } else {
                trajets.forEach(t => {
                    if (t.ligne.substr(0,1) === this.recherche.substr(0,1)) {
                        trajetsAffiches.push(t)
                    }
                })
                return trajetsAffiches
            }
            
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
    },
    
    methods: {
        searchTrajets() {
            this.recherche = this.selectedLigne
        }
    },
}
</script>