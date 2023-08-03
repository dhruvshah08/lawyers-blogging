import firebase from "firebase";
const firebaseApp=firebase.initializeApp({
    apiKey: "AIzaSyB5zyuwH20Pe2ZidV0oEeIO0cMOqu-ZXiw",
    authDomain: "the-lawyers-journal.firebaseapp.com",
    projectId: "the-lawyers-journal",
    storageBucket: "the-lawyers-journal.appspot.com",
    messagingSenderId: "96681461924",
    appId: "1:96681461924:web:59be24c8c03d628ea53e31",
    measurementId: "G-M3PFYH5L9W"
});
const db=firebaseApp.firestore();
const auth=firebaseApp.auth();
const storage=firebaseApp.storage();
export {db,auth,storage};