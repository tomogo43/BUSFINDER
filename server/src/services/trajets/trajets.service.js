// Initializes the `trajets` service on path `/trajets`
const { Trajets } = require('./trajets.class');
const createModel = require('../../models/trajets.model');
const hooks = require('./trajets.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/trajets', new Trajets(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('trajets');

  service.hooks(hooks);
};
