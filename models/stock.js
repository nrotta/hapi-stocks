'use strict';

var Joi = require('joi');
var ObjectAssign = require('object-assign');
var BaseModel = require('hapi-mongo-models').BaseModel;

var stock = BaseModel.extend({
  constructor: function(attrs) {
    ObjectAssign(this, attrs);
  }
});

stock._collection = 'stocks';

stock.schema = Joi.object().keys({
  symbol: Joi.string().required()
});

stock.prototype.getStocks = function(callback) {
  stock.pagedFind({}, {}, {}, {}, {}, function(err, results) {
    if(err)
      callback(err);
    else
      callback(null, results.data);
  });
};

stock.prototype.getStock = function(id, callback) {
  stock.findById(id, function(err, result) {
    if(err)
      callback(err);
    else
      callback(null, result);
  });
};

stock.prototype.addStock = function(ticker, callback) {
  stock.insertOne(ticker, function(err, result) {
    if(err)
      callback(err);
    else
      callback(null, result);
  });
};

stock.prototype.updateStock = function(id, ticker, callback) {
  stock.findByIdAndUpdate(id, ticker, function(err, result) {
    if(err)
      callback(err);
    else
      callback(null, result);
  });
};

stock.prototype.destroyStock = function(id, callback) {
  stock.findByIdAndDelete(id, function(err, result) {
    if(err)
      callback(err);
    else
      callback(null, result);
  });
};

module.exports = stock;
