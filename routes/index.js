var express = require('express');
var router = express.Router();
var exchangeRates = {'EUR' : .94, 'JPY' : 112.86, 'GBp' : .79716, 'USD' : 1};
//'GBP' : .797157, 'Rupee' : 66.69,
router.get('/', function(req, res){

  res.render('index');

});

router.get('/convert', function(req, res){
  var amountBaseFX = req.query.dollar_amount;
  var convertTo = req.query.to_currency;
  var convertFrom = req.query.from_currency;
  
  var rate = exchangeRates[convertTo];

  result = amountBaseFX * convertTo;

  console.log(amountBaseFX);
  console.log(convertFrom);

  console.log(rate);

  console.log(convertTo);

  res.render('results', { amountBaseFX : amountBaseFX, result: results, currency: convertTo})

});
module.exports = router;
