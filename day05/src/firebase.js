
import firebase from "firebase/app";
import "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
    apiKey: "AIzaSyB28BYv_qYH4hi3URWKdxnZWYCtcyDO-X4",
    authDomain: "testcase001-63007.firebaseapp.com",
    databaseURL: "https://testcase001-63007-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "testcase001-63007",
    storageBucket: "testcase001-63007.appspot.com",
    messagingSenderId: "320250354025",
    appId: "1:320250354025:web:f78d0b0e73e50dab7b05f8",
    measurementId: "G-15YL1S440S"
  };

export default firebase.initializeApp(firebaseConfig);