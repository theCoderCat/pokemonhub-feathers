'use strict';

const service = require('feathers-mongoose');
const box = require('./box-model');
const hooks = require('./hooks');

module.exports = function() {
  const app = this;

  const options = {
    Model: box,
    paginate: {
      default: 5,
      max: 25
    }
  };

  // Initialize our service with any options it requires
  app.use('/boxes', service(options));

  // Get our initialize service to that we can bind hooks
  const boxService = app.service('/boxes');

  // Set up our before hooks
  boxService.before(hooks.before);

  // Set up our after hooks
  boxService.after(hooks.after);
};
