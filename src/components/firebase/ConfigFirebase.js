// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

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

export const storage = getStorage(app);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

export default app;
 
