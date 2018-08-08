'use strict';

/**
 * Datatable test data
 */
var datatable = require('../data/datatable');
exports.list_datatable = function (req, res, query) {
  var data = datatable.dataTable
  console.log(req.query)
  if (data && req.query.pageNo) {
    var response = [];
    for (var i = req.query.pageNo*req.query.pageSize; i < data.length; i++) {
      if (response.length < req.query.pageSize) {
        response.push(data[i])
      } else {
        break;
      }
    }
    var temp = {
      pageNo: req.query.pageNo,
      pageSize: req.query.pageSize,
      length: response.length,
      totalElement: data.length,
      content: response
    }
    res.send(temp);
    return
  }
  res.json(data);
};

/**
 * Dropdown test data
 */
var dropdown = require('../data/dropdown');
exports.list_dropdown = function (req, res, query) {
  var data = dropdown.dropdown
  res.json(data);
};