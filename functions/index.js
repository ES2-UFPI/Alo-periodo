const functions = require('firebase-functions'); // todas as funçoes do firebase sao controladas por essa const

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions

// control de requisiçoes HTTPs
// tradicionais request / response ...
    // Response: servidor --> navegador
    // Request: navegador --> servidor

exports.helloWorld = functions.https.onRequest((request, response) => {
    response.send("Hello from Firebase!");
    // toda requisiçao vai ficando salva no database nas "Functions"
});
