'use strict';

// Load model
var Stock = require('../models/stock');
var stock = new Stock();

function StocksController() { };

// [GET] /stocks
StocksController.prototype.index = function(request, reply) {
  stock.getStocks(function(err, results) {
    reply(results).code(200);
  });
};

// [GET] /stocks/{id}
StocksController.prototype.show = function(request, reply) {
  var id = request.params.id;
  stock.getStock(id, function(err, results) {
    reply(results).code(200);
  });
};

// [POST] /stocks
StocksController.prototype.store = function(request, reply) {
  reply("store");
};

// [PUT] /stocks/{id}
StocksController.prototype.update = function(request, reply) {
  reply("update");
};

// [DELETE] /stocks/{id}
StocksController.prototype.destroy = function(request, reply) {
  reply("destroy");
};

module.exports = StocksController;
