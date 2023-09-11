// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-d70c8.firebaseapp.com",
  projectId: "mern-auth-d70c8",
  storageBucket: "mern-auth-d70c8.appspot.com",
  messagingSenderId: "112163656527",
  appId: "1:112163656527:web:8b03b4f81b7a2a8ff26b3a",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
