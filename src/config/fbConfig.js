import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

  // Initialize Firebase
var config = {
  apiKey: "AIzaSyDBMVn4qJtzuqeqOULExaBbvroFHqpAoyc",
  authDomain: "alo-periodo-dff25.firebaseapp.com",
  databaseURL: "https://alo-periodo-dff25.firebaseio.com",
  projectId: "alo-periodo-dff25",
  storageBucket: "alo-periodo-dff25.appspot.com",
  messagingSenderId: "975755220540"
};

firebase.initializeApp(config);

firebase.firestore().settings({ timestampsInSnapshots: true });

// var storage = firebase.app().storage("gs://alo-periodo-dff25.appspot.com");

export default firebase;