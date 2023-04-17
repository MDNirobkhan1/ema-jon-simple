// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAeli75kHoKKYHAdqbJiXsVZNjNDKzLvdc",
  authDomain: "ema-jon-with-firebase-au-6d2e5.firebaseapp.com",
  projectId: "ema-jon-with-firebase-au-6d2e5",
  storageBucket: "ema-jon-with-firebase-au-6d2e5.appspot.com",
  messagingSenderId: "870420528527",
  appId: "1:870420528527:web:5b6ee514d0c0c9ea0f1ffa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;