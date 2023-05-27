// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getAuth } from "firebase/auth";
import { getFirestore }  from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAWTnSc7RiQy59UW-4NlvaAMGXxQ5wo1xM",
  authDomain: "loli-test-8222e.firebaseapp.com",
  projectId: "loli-test-8222e",
  storageBucket: "loli-test-8222e.appspot.com",
  messagingSenderId: "709519445965",
  appId: "1:709519445965:web:8d45eeec6f74700e4a3e84",
  measurementId: "G-DMRYP6W370"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app)