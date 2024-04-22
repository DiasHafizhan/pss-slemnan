// Import the functions you need from the SDKs you need
import { getApps, initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAQPt5xFPd7AOT2cw78gVpdWrdJ63M0zyY",
  authDomain: "shop-pss.firebaseapp.com",
  projectId: "shop-pss",
  storageBucket: "shop-pss.appspot.com",
  messagingSenderId: "805281207522",
  appId: "1:805281207522:web:f719fa04bd16cca07cfabb"
};

// Initialize Firebase
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

export default app