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
// Comandos :
// " npm install -g firebase-tools " e " npm install firebase-functions " --> pkts
// " firebase login " --> logar no firebase
// " firebase deploy --only functions " --> rodar as functions implementadas
// -----------------------------------------------------------

// criando um novo database para armazenar as Notifications...

const createNotification = ((notification) => {
    return admin.firestore().collection('notifications')
      .add(notification)
      .then(doc => console.log('notification added', doc));
});

// quando um projeto for criado --> em Functions do Firebase ,nos Logs:
// ficarão registradas as requisições Https que serão feitas

exports.projectCreated = functions.firestore
  .document('projects/{projectId}')
  .onCreate(doc => {

    // armazena dados de conteúdo da Notification e de quem a fez
    const project = doc.data();
    const notification = {
      content: 'Added a new document.',
      user: `${project.authorFirstName} ${project.authorLastName}`,
      time: admin.firestore.FieldValue.serverTimestamp()
    }

    return createNotification(notification);
});

// quando o novo User for criado (SignUp) o mesmo procedimento é realizado...
// fica salvo no database das Notifications

exports.userJoined = functions.auth.user()
  .onCreate(user => {
    
    return admin.firestore().collection('users')
      .doc(user.uid).get().then(doc => {

        const newUser = doc.data();
        const notification = {
          content: 'New user SignUp.',
          user: `${newUser.firstName} ${newUser.lastName}`,
          time: admin.firestore.FieldValue.serverTimestamp()
        };

        return createNotification(notification);

      });
});