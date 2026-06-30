// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCmG45TB3AIFccXIoPhlz0cF4YIx_kApoc",
  authDomain: "thinkstudio-quip.firebaseapp.com",
  projectId: "thinkstudio-quip",
  storageBucket: "thinkstudio-quip.firebasestorage.app",
  messagingSenderId: "864290365698",
  appId: "1:864290365698:web:8c822aa63494002095e21b",
  measurementId: "G-F1N8MBBHJL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);