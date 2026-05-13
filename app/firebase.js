import { initializeApp, getApps } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyC4WYlds3HX66UJ7kZkSJCa3HnzgAa545M",
  authDomain: "personal-website-b36c3.firebaseapp.com",
  projectId: "personal-website-b36c3",
  storageBucket: "personal-website-b36c3.appspot.com",
  messagingSenderId: "158397400026",
  appId: "1:158397400026:web:165b97b3cfd7a6d7f476e3",
  measurementId: "G-SZ2959D928",
};

export const app = getApps().length ? getApps()[0] : initializeApp(firebaseConfig);
