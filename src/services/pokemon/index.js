'use strict';

const service = require('feathers-mongoose');
const pokemon = require('./pokemon-model');
const hooks = require('./hooks');

module.exports = function() {
    const app = this;

    const options = {
        Model: pokemon,
        paginate: {
            default: 5,
            max: 25
        }
    };

    // Initialize our service with any options it requires
    app.use('/pokemon', service(options));

    // Get our initialize service to that we can bind hooks
    const pokemonService = app.service('/pokemon');



    // Set up our before hooks
    pokemonService.before(hooks.before);

    // Set up our after hooks
    pokemonService.after(hooks.after);
};