import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBmFDPWmhG4MNHf6COPB3YHQSK2aE7uCVM",
  authDomain: "add-user-94e73.firebaseapp.com",
  projectId: "add-user-94e73",
  storageBucket: "add-user-94e73.appspot.com",
  messagingSenderId: "156170555467",
  appId: "1:156170555467:web:4f02279553f3c909f67dce"
});

let db = firebase.firestore();

export default db;
