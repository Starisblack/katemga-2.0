// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBvPOTVsCJnRbJPLQbTfRrDIRC-wnRhBi8",
  authDomain: "katemga-422d1.firebaseapp.com",
  projectId: "katemga-422d1",
  storageBucket: "katemga-422d1.appspot.com",
  messagingSenderId: "734819363519",
  appId: "1:734819363519:web:3ceee087915e3369a2f40a",
  measurementId: "G-BY3SJJ23N6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
