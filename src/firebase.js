import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBSG087FiE6l-_yRb7cOamGmWh0Yv0y9J4",
  authDomain: "clone-d8b41.firebaseapp.com",
  projectId: "clone-d8b41",
  storageBucket: "clone-d8b41.appspot.com",
  messagingSenderId: "879417877852",
  appId: "1:879417877852:web:bf9f0ab30db280e4db8d99",
  measurementId: "G-NX76MX52GX",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
