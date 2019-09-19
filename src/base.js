import firebase from "firebase/app";
import "firebase/auth";

const baseApp = firebase.initializeApp({
  apiKey: process.env.RAZZLE_FIREBASE_KEY,
  authDomain: process.env.RAZZLE_FIREBASE_DOMAIN,
  databaseURL: process.env.RAZZLE_FIREBASE_DATABASE,
  projectId: process.env.RAZZLE_FIREBASE_PROJECT_ID,
  storageBucket: process.env.RAZZLE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.RAZZLE_FIREBASE_SENDER_ID
});

export default baseApp;