var express = require('express');
var router = express.Router();
var fetchFX = require('../helpers/currentRates')
router.get('/', function(req, res){
    // res.send('Currency Site');
    res.render('index');
});

router.get('/convert', function(req, res) {
    fetchFX(function (exchangeRates, error) {
            var amount = req.query.baseCurrency_amount;
            var convertTo = req.query.to_currency;
            var convertFrom = req.query.from_currency;
            var baseToDollarsRate = exchangeRates[convertFrom];
            var amountOfDollars = amount/baseToDollarsRate;
            var dollarsToTargetRate = exchangeRates[convertTo];
            result = dollarsToTargetRate * amountOfDollars;

            res.render('results', { inputAmount : amount, result : result,fromCurrency : convertFrom , toCurrency: convertTo})
        }
    )
});

module.exports = router;