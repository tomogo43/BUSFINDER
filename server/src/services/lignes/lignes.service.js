// Initializes the `lignes` service on path `/lignes`
const { Lignes } = require('./lignes.class');
const createModel = require('../../models/lignes.model');
const hooks = require('./lignes.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/lignes', new Lignes(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('lignes');

  service.hooks(hooks);
};
