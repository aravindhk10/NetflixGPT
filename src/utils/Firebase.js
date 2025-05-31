// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB8EcVjoeuoeq67KZ_f0lqUDbeUFXii5VI",
  authDomain: "netflixgpt-745ee.firebaseapp.com",
  projectId: "netflixgpt-745ee",
  storageBucket: "netflixgpt-745ee.firebasestorage.app",
  messagingSenderId: "553828009415",
  appId: "1:553828009415:web:34a7392cf63567142905e2",
  measurementId: "G-F7S261KEZH",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const ANALYTICS = getAnalytics(app);

export const auth = getAuth();