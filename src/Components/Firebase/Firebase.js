import Firebase from 'firebase';
import firestore from 'firebase/firestore';

const settings = {timestampsInSnapshots: true};

  // Initialize Firebase
  const config = {
    apiKey: "AIzaSyBPdVv1Kq9-XcEv1ym8u40f6_PJIs--l1U",
    authDomain: "evaluation-system-48b67.firebaseapp.com",
    databaseURL: "https://evaluation-system-48b67.firebaseio.com",
    projectId: "evaluation-system-48b67",
    storageBucket: "evaluation-system-48b67.appspot.com",
    messagingSenderId: "524870086797"
  };
  Firebase.initializeApp(config);


Firebase.firestore().settings(settings);

export default Firebase;
