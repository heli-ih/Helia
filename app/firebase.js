// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC4WYlds3HX66UJ7kZkSJCa3HnzgAa545M",
  authDomain: "personal-website-b36c3.firebaseapp.com",
  projectId: "personal-website-b36c3",
  storageBucket: "personal-website-b36c3.appspot.com",
  messagingSenderId: "158397400026",
  appId: "1:158397400026:web:165b97b3cfd7a6d7f476e3",
  measurementId: "G-SZ2959D928",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
