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
  var ticker = {
    symbol: request.payload.symbol
  };

  stock.addStock(ticker, function(err, result) {
    reply(result).code(200);
  });
};

// [PUT] /stocks/{id}
StocksController.prototype.update = function(request, reply) {
  var id = request.params.id;
  var ticker = {
    symbol: request.payload.symbol
  };

  stock.updateStock(id, ticker, function(err, result) {
    reply(result).code(200);
  });
};

// [DELETE] /stocks/{id}
StocksController.prototype.destroy = function(request, reply) {
  var id = request.params.id;
  stock.destroyStock(id, function(err, result) {
    reply(result).code(200);
  });
};

module.exports = StocksController;
