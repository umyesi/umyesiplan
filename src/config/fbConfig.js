import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCQv3FER98hv7fRIctdUkVlK674qngPOvs",
    authDomain: "umyesi-c3c72.firebaseapp.com",
    databaseURL: "https://umyesi-c3c72.firebaseio.com",
    projectId: "umyesi-c3c72",
    storageBucket: "",
    messagingSenderId: "269736278449",
    appId: "1:269736278449:web:e1e3d163908ab9e9"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase 