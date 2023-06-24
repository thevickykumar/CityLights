// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD9sZ0Hf7u8fSSfIDM9EETBcyhkqRjxZB0",
  authDomain: "citylights-c147d.firebaseapp.com",
  projectId: "citylights-c147d",
  storageBucket: "citylights-c147d.appspot.com",
  messagingSenderId: "743943970476",
  appId: "1:743943970476:web:60d63cdbfbd756b9e4c909"
};

// Initialize Firebase
 initializeApp(firebaseConfig);
 export const db =getFirestore()