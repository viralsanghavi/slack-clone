import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyBLU2thamUt533HZ6Di-ClvDqeL7NasvgU",
    authDomain: "slack-clone-c73d6.firebaseapp.com",
    databaseURL: "https://slack-clone-c73d6.firebaseio.com",
    projectId: "slack-clone-c73d6",
    storageBucket: "slack-clone-c73d6.appspot.com",
    messagingSenderId: "112431697521",
    appId: "1:112431697521:web:f82d4540a01cbd985b15d0",
    measurementId: "G-R6G2L0HWYY"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore();
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider }

export default db