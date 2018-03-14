var express = require('express');
var router = express.Router();
var exchangeRates = require('../model/currencyDB');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/convert', function(req, res, next){

  var starting_currency = req.query.starting_currency;
  var toCurrency = req.query.to_currency;
  var fromCurrency = req.query.from_currency;

  var converted = starting_currency * exchangeRates[toCurrency] / exchangeRates[fromCurrency];

  res.render('results', {
    starting_currency: starting_currency,
    toCurrency: toCurrency,
    converted: converted,
    fromCurrency: fromCurrency}
  );
});

router.get('/about', function(req, res, next){
  res.render('about', {
    description: "This is a simple currency converter site",
    name: "Nathan"});
});

module.exports = router;
