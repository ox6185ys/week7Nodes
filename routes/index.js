var express = require('express');
var router = express.Router();
var exchangeRates = {'EUR' : .94, 'JPY' : 112.86, 'GBP' : .79716, 'USD' : 1};
//'GBP' : .797157, 'Rupee' : 66.69,
router.get('/', function(req, res){

  res.render('index');

});

router.get('/convert', function(req, res){
  var dollars = req.query.dollar_amount;
  var convertTo = req.query.to_currency;
  var rate = exchangeRates[convertTo];
  result = dollars * rate;
  res.render('results', { dollars : dollars, result: result, currency: convertTo})

});
module.exports = router;
