import firebase from "firebase/app"

if (!firebase.apps.length) {
firebase.initializeApp({
  apiKey: "AIzaSyCpsKhG9RgabLwzFjpeVGkK3RDH9_MOxqY",
  authDomain: "football-1aa1c0083.firebaseapp.com",
  databaseURL: "https://football-1aa1c0083-default-rtdb.firebaseio.com",
  projectId: "football-1aa1c0083",
  storageBucket: "football-1aa1c0083.appspot.com",
  messagingSenderId: "812579040323",
  appId: "1:812579040323:web:59aaa0ab394f1332afb8f6",
  measurementId: "G-710767MSB8"
})
}

export default firebase