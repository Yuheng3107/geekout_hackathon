// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCgXt-HhRLvgaM_17_PcxXQ0TgyxY3XiLE",
  authDomain: "geekout-b6859.firebaseapp.com",
  projectId: "geekout-b6859",
  storageBucket: "geekout-b6859.appspot.com",
  messagingSenderId: "80783097363",
  appId: "1:80783097363:web:dd4788a90defdbd64049e6",
  measurementId: "G-F6XDG31QHQ",
  databaseURL:
    "https://geekout-b6859-default-rtdb.asia-southeast1.firebasedatabase.app/",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// Initialize Realtime Database and get a reference to the service
const database = getDatabase(app);
