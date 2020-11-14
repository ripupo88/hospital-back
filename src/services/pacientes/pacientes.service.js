// Initializes the `pacientes` service on path `/pacientes`
const { Pacientes } = require('./pacientes.class');
const createModel = require('../../models/pacientes.model');
const hooks = require('./pacientes.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/pacientes', new Pacientes(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('pacientes');

  service.hooks(hooks);
};
