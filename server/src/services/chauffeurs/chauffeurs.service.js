// Initializes the `Chauffeurs` service on path `/chauffeurs`
const { Chauffeurs } = require('./chauffeurs.class');
const createModel = require('../../models/chauffeurs.model');
const hooks = require('./chauffeurs.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/chauffeurs', new Chauffeurs(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('chauffeurs');

  service.hooks(hooks);
};
