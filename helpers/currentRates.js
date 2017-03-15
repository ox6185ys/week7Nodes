var request = require('request');
var baseURL = 'https://openexchangerates.org/api/latest.json';

function currencyRequest(callback) {

    var APIKEY = process.env.CURRENCY_API_KEY;
    var queryParam = {'app_id' : APIKEY};
    console.log(APIKEY)

    request( {uri :baseURL, qs: queryParam} , function(error, currency_response, body){

        if (!error && currency_response.statusCode == 200){
            console.log("API SAYS \n" + JSON.stringify(body));
            var currencyJSON = JSON.parse(body);   //Convert JSON text to a JavaScript object
            var jsonForTemplate = currencyJSON.rates;  // Rearrange JSON into a more useful format for display in the template
            callback(jsonForTemplate);
        }

        else {
            //Log error info to console and return error with message.
            console.log("Error in JSON request: " + error);
            console.log(currency_response);
            console.log(body);
            callback(null, Error("Error fetching data"));
        }
    });
}
module.exports = currencyRequest;