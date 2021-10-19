
import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyDa1P6IjhBJaNkthlZLIrlozkNL0uM8YgA",
    authDomain: "drive-clone-9a902.firebaseapp.com",
    projectId: "drive-clone-9a902",
    storageBucket: "drive-clone-9a902.appspot.com",
    messagingSenderId: "854825566924",
    appId: "1:854825566924:web:2932ec6b60c7941fc7b869"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()
const storage = firebase.storage()
const db = firebaseApp.firestore()

export { firebaseApp, auth, provider, db, storage }
