// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCg8rZqexV71dDQZI0j3kR8WPiaLH3tSw4",
    authDomain: "contact-book-65ad0.firebaseapp.com",
    projectId: "contact-book-65ad0",
    storageBucket: "contact-book-65ad0.appspot.com",
    messagingSenderId: "993729432707",
    appId: "1:993729432707:web:dbd53338ec347fe0a75fb6"
};










//Initialize Firebase and Firestore
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export default db
