import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyBdkzI8tQKUVt7jc9UH3c1vvxBRIu1OqSs",
    authDomain: "foot-app-87897.firebaseapp.com",
    databaseURL: "https://foot-app-87897-default-rtdb.firebaseio.com",
    projectId: "foot-app-87897",
    storageBucket: "foot-app-87897.appspot.com",
    messagingSenderId: "447234123765",
    appId: "1:447234123765:web:34e6142c5561f85efd62bc",
    measurementId: "G-ZZ8DYKLG8Z"
}

if (!firebase.apps.length) {
    firebase.initializeApp(config)
    
}

export const auth = firebase.auth
export default firebase
