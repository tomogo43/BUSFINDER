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

        <v-icon dark>
            mdi-format-list-bulleted-square
        </v-icon>

    </div>
</template>
<script>

export default {
    

    mounted() {
        this.$store.dispatch('FETCH_TRAJETS')

    },
    computed: {
        // ...mapGetters(["getTrajets"]),
        allTraj () {
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
        }
    }
}
</script>
<style>
    h1 {
        text-align: center;
    }
</style>