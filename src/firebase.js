import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCAzAd0St1-1FYJmA3Xm6N_1lq5izfFA9c",
  authDomain: "clone-7563e.firebaseapp.com",
  projectId: "clone-7563e",
  storageBucket: "clone-7563e.appspot.com",
  messagingSenderId: "256584888319",
  appId: "1:256584888319:web:4e062bc19ec159b02b41ca",
  measurementId: "G-TQ8D2WMZ2S",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export { db, auth, provider };
