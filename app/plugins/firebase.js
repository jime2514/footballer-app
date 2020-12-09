import firebase from "firebase/app"

if (!firebase.apps.length) {
firebase.initializeApp({
  apiKey: "AIzaSyDJYH1q6R3o1_jgOXcvxwFookus3B5u1lU",
  authDomain: "football-app-61630.firebaseapp.com",
  databaseURL: "https://football-app-61630.firebaseio.com",
  projectId: "football-app-61630",
  storageBucket: "football-app-61630.appspot.com",
  messagingSenderId: "963121767559",
  appId: "1:963121767559:web:54cd4b358cd45c1d108422",
  measurementId: "G-Q6RFX1WNPM"
})
}

export default firebase