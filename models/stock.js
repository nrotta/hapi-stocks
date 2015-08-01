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
    if (err)
      callback(err);
    else
      callback(null, results.data);
  });
};

stock.prototype.getStock = function(id, callback) {
  stock.findById(id, function(err, results) {
    if (err)
      callback(err);
    else
      callback(null, results);
  });
};

module.exports = stock;
