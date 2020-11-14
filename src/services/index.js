const users = require("./users/users.service.js");
const casas = require("./casas/casas.service.js");
const cars = require("./cars/cars.service.js");
const pacientes = require('./pacientes/pacientes.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(users);
  app.configure(casas);
  app.configure(cars);
  app.configure(pacientes);
};
