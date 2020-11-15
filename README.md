# BUSFINDER
Projet Application Web: Gestion des lignes de bus 

## Objectif: 
Proposer une application web permettant de gérer un réseau de bus en manipulant des données en temps réél avec une API.

## Fonctionalités:
  - Ajout de différentes lignes de bus (numéro; depart; destination; duree)
  - Ajout de chauffeurs (prenom;nom;email) ==> Tous les chauffeurs peuvent conduire sur n'importe quelle ligne
  - Créer différents trajets en fonction des lignes de Bus et des chauffeurs disponibles (ligne; chauffeur; h_depart; h_arrivée)
  
  **Il y a 2 types d'utilisateurs**
  - Les admin: peuvent ajouter/eduter/supprimer les chauffeurs, les lignes et les trajets
  - Les utilisateurs peuvent seulement consulter les trajets disponibles
  
## Les difficultés rencontrées
  Nous avons eu des difficultés à intéragir avec l'API...Lors de l'ajout de feathers/client et de socketio la version de socketio était trop récente par rapport à celle de feathers/cli. Nous avons également dû nous familiariser avec vuex pour la création d'un datastore centralisée ce qui permet de créer une application très réactive de plus que c'est une SPA grâce au routeur.
  Cependant ce projet nous a permis de nous familiariser sur le développement d'applications web etd'utiliser d'autres technologies web que l'on a appris en DUT (HTML/CSS/PHP et BDD MySQL sur un serveur LAMP)

CONDAMINE Alexandre
BOUSQUIE Valentin
ESCUDERO Thomas
FAKOREDE Samir
