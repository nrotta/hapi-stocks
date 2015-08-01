'use strict';

var Hapi = require('hapi');

var Glue = require('glue');
var manifest = require('./config/manifest.json');
var options = {
  relativeTo: __dirname
};

// Create and start the server
Glue.compose(manifest, options, function(err, server) {
  if(err) { throw err; }

  server.start(function() {
    console.log('Server running at:', server.info.uri);
  });
});
