import firebase from 'firebase'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD2Pizq943BRj6uhCWjaiu1wDJbDlIOowc",
  authDomain: "oilx-7ae54.firebaseapp.com",
  projectId: "oilx-7ae54",
  storageBucket: "oilx-7ae54.appspot.com",
  messagingSenderId: "828226244815",
  appId: "1:828226244815:web:5c150c0ce79d7a5108a7ba",
  measurementId: "G-J05G0GDW5F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
