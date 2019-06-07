const functions = require('firebase-functions'); // todas as funçoes do firebase sao controladas por essa const
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions

// controle das requisiçoes HTTPs
// tradicionais request / response ...
    // Response: servidor --> navegador
    // Request: navegador --> servidor

exports.helloWorld = functions.https.onRequest((request, response) => {
    response.send("Hello from Firebase!");
    // toda requisiçao vai ficando salva no database nas "Functions"
});

// -----------------------------------------------------------
// comando : " firebase deploy --only functions "
// -----------------------------------------------------------

const createNotification = ((notification) => {
    return admin.firestore().collection('notifications')
      .add(notification)
      .then(doc => console.log('notification added', doc));
});

exports.projectCreated = functions.firestore
  .document('projects/{projectId}')
  .onCreate(doc => {

    const project = doc.data();
    const notification = {
      content: 'Added a new document.',
      user: `${project.authorFirstName} ${project.authorLastName}`,
      time: admin.firestore.FieldValue.serverTimestamp()
    }

    return createNotification(notification);
});