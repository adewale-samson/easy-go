
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyBboTfH4rvnLEBooVGAPDEuF44E9LKHuL4",
//   authDomain: "send-easy-4307a.firebaseapp.com",
//   projectId: "send-easy-4307a",
//   storageBucket: "send-easy-4307a.appspot.com",
//   messagingSenderId: "638847477753",
//   appId: "1:638847477753:web:8c44471bb202dca5ed3f28",
//   measurementId: "G-HPZLTJSLFF"
// };
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID
};

// // Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth()