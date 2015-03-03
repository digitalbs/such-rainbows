'use strict';

var Hapi = require('hapi'),
	routes = require('./routes'),
	server = new Hapi.Server();

//add connection
server.connection({
	host: '0.0.0.0',
	port: 8000
});

// Add the route
server.route(routes);

// Start the server
server.start(function() {
    console.log('started rainbow magic on port 8000');
});
