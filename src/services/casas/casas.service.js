// Initializes the `casas` service on path `/casas`
const { Casas } = require('./casas.class');
const hooks = require('./casas.hooks');

module.exports = function (app) {
  const options = {
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/casas', new Casas(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('casas');

  service.hooks(hooks);
};
