import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import "firebase/compat/storage";
import "firebase/compat/functions";
import "firebase/compat/analytics";
import "firebase/compat/database";

const firebaseConfig = {
  apiKey: "AIzaSyALjCElxRtIi5c5Py_sJkKE0dl5VHDHjrk",
  authDomain: "kev-portfolio.firebaseapp.com",
  projectId: "kev-portfolio",
  storageBucket: "kev-portfolio.appspot.com",
  messagingSenderId: "745019418904",
  appId: "1:745019418904:web:bb3edad3cdcaaeca40566d",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();

// Active emulator to functions only
// firebase.firestore().useEmulator("localhost", 8080)
// firebase.functions().useEmulator("localhost", 5001)
// firebase.auth().useEmulator("http://localhost:4000/auth ", 9099)
// firebase.storage().useEmulator("http://localhost:4000/storage", 9199)
// firebase.database().useEmulator("localhost", 9000)

const firestore = firebase.firestore();
const functions = firebase.functions();
const auth = firebase.auth();
const storage = firebase.storage();
const analytics = firebase.analytics();
const database = firebase.database();

export { firestore, auth, functions, firebase, storage, analytics, database };
