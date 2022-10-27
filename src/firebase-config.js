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
  apiKey: "AIzaSyDfDD-V5YFcQyMvo4rgcnDHvw6PtoDp0SU",
  authDomain: "katemga-dc780.firebaseapp.com",
  projectId: "katemga-dc780",
  storageBucket: "katemga-dc780.appspot.com",
  messagingSenderId: "530300871492",
  appId: "1:530300871492:web:296473755604e432bf6d11",
  measurementId: "G-BCQJWGRZFW",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
