import firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";

var firebaseConfig = {
    apiKey: "AIzaSyDQkITViIP2ZU71r75jyyM5LXDu7S-puN4",
    authDomain: "notes-ab882.firebaseapp.com",
    projectId: "notes-ab882",
    storageBucket: "notes-ab882.appspot.com",
    messagingSenderId: "818572629888",
    appId: "1:818572629888:web:065a116f5b94bb07335365",
    measurementId: "G-1LEE7YGSN6"
  };

const fire = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export default fire;
export {db};