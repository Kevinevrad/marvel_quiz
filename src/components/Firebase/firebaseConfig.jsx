// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCrbH2g-SQgoLEP9HLN9GSe2R-RVOew9vg",
  authDomain: "marvel-quiz-aa6d3.firebaseapp.com",
  projectId: "marvel-quiz-aa6d3",
  storageBucket: "marvel-quiz-aa6d3.firebasestorage.app",
  messagingSenderId: "682188297998",
  appId: "1:682188297998:web:f3d20177d6f9e896eba95f",
  measurementId: "G-2CQHLT38LC",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// *Initialize Firebase Authentication and get a reference to the service

const auth = getAuth(app);
export default auth;
