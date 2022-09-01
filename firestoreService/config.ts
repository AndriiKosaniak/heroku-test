// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDZYFjr6W6gW-yHCmQEhg7q3bJDo2Git-Q",
  authDomain: "oyster-research.firebaseapp.com",
  projectId: "oyster-research",
  storageBucket: "oyster-research.appspot.com",
  messagingSenderId: "390011615539",
  appId: "1:390011615539:web:4a8d2316a4f24141a1e646",
  measurementId: "G-7QG84XC06V",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const usersCollection = collection(db, "users");
