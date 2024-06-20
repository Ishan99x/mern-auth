// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-51db9.firebaseapp.com",
  projectId: "mern-auth-51db9",
  storageBucket: "mern-auth-51db9.appspot.com",
  messagingSenderId: "477910381984",
  appId: "1:477910381984:web:dccd406e9e72e81a70e0c5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);