// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAkOYQ_90v8e0XxvuQs8eARB01hHYnzsCo",
  authDomain: "ict2102t7-d28cc.firebaseapp.com",
  projectId: "ict2102t7-d28cc",
  storageBucket: "ict2102t7-d28cc.appspot.com",
  messagingSenderId: "705865640829",
  appId: "1:705865640829:web:05ad725127acc98230ba14"
};
// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig);
} else {
    app = firebase.app()
}

const auth = firebase.auth()

const db = firebase.firestore();

export default db;
export {auth};