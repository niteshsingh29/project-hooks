import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDAFBjrtQOrQrK2FHtBBYh4Ak3qw_uyWRY",
  authDomain: "add-user-5adf9.firebaseapp.com",
  projectId: "add-user-5adf9",
  storageBucket: "add-user-5adf9.appspot.com",
  messagingSenderId: "942705972067",
  appId: "1:942705972067:web:da620990e036dd14897956",
});

let db = firebase.firestore();

export default db;
