// This index.js sheet drives the index.hbs page.
var express = require('express');
var router = express.Router();
var currency = require('../helpers/currentRates');
//
// router.get('/', function (req, res) {
//     currency(function (exchangeRates, error) {
//
//     })
//
//
//
//
//     res.render('index');
// });

router.get('/convert', function (req, res) {
    var amountBaseFX = req.query.dollar_amount;
    var convertTo = req.query.to_currency;
    var convertFrom = req.query.from_currency;
    var fromRate = exchangeRates[convertFrom];
    var toRate = exchangeRates[convertTo];
//Take user input and convert to nativeFX then to desiredFX
    result = (amountBaseFX / fromRate) * toRate;
//Test values in variables.
    console.log(amountBaseFX);
    console.log(convertFrom);
    console.log(result);
    console.log(convertTo);

    res.render('results', {currency1: convertFrom, amountBaseFX: amountBaseFX, result: result, currency: convertTo})

});
module.exports = router;
