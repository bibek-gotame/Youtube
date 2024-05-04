// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA9JtebXiXo_d4Vt2uYV1RKBromts24ODQ",
  authDomain: "bubbly-poetry-421908.firebaseapp.com",
  projectId: "bubbly-poetry-421908",
  storageBucket: "bubbly-poetry-421908.appspot.com",
  messagingSenderId: "69942835687",
  appId: "1:69942835687:web:4e258035b1a78ab7f56542",
  measurementId: "G-58T4NQB5EV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);