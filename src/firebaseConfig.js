// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCTS-Xys_e3ctusgiS5FYyMKQWddu7_6yM",
  authDomain: "docapp-ee03c.firebaseapp.com",
  projectId: "docapp-ee03c",
  storageBucket: "docapp-ee03c.appspot.com",
  messagingSenderId: "361871895925",
  appId: "1:361871895925:web:3460fdbc6d3da30f39b73c",
  measurementId: "G-2SZBHX96C6"
};


export const app = initializeApp(firebaseConfig);
export const database= getFirestore(app)