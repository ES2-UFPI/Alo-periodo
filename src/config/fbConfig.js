import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Initialize Firebase
var config = {
  apiKey: "AIzaSyCu6yHfSPtDhKSIhsD5JV7T8oXk3mD8s3Q",
  authDomain: "alo-periodo-849f3.firebaseapp.com",
  databaseURL: "https://alo-periodo-849f3.firebaseio.com",
  projectId: "alo-periodo-849f3",
  storageBucket: "alo-periodo-849f3.appspot.com",
  messagingSenderId: "1096022847812"
};

firebase.initializeApp(config);

firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
