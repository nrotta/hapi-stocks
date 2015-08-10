'use strict';

var StocksController = require('../controllers/stocks');
var stocksController = new StocksController();

// Stock routes
var routes = [{
  method: 'GET',
  path:'/stocks',
  handler: stocksController.index
}, {
  method: 'GET',
  path:'/stocks/{id}',
  handler: stocksController.show
}, {
  method: 'POST',
  path:'/stocks',
  handler: stocksController.store
}, {
  method: 'PUT',
  path:'/stocks/{id}',
  handler: stocksController.update
}, {
  method: 'DELETE',
  path:'/stocks/{id}',
  handler: stocksController.destroy
}];

// Define register function
var Routes = {
  register: function(server, options, next) {
    server.bind(stocksController);
    server.route(routes);
    next();
  }
};

// Define attributes
Routes.register.attributes = {
  name: 'stock-routes',
  version: '0.0.1'
};

module.exports = Routes;
