const lignes = require('./lignes/lignes.service.js');
const chauffeurs = require('./chauffeurs/chauffeurs.service.js');
const trajets = require('./trajets/trajets.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(lignes);
  app.configure(chauffeurs);
  app.configure(trajets);
};
