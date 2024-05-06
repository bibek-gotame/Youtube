// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB0TDXdAaZ0AUqaCy-TqOSNmQVWuYZX95s",
  authDomain: "fir-53fdb.firebaseapp.com",
  projectId: "fir-53fdb",
  storageBucket: "fir-53fdb.appspot.com",
  messagingSenderId: "722181982365",
  appId: "1:722181982365:web:401a37fe4c6d20eafe2c74",
  measurementId: "G-DYY7JTTHNT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);