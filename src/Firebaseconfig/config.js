// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCDIVwr_NLEZsLryNSTKpN3XPx8V6VVhNo",
  authDomain: "assiment-6afaa.firebaseapp.com",
  projectId: "assiment-6afaa",
  storageBucket: "assiment-6afaa.firebasestorage.app",
  messagingSenderId: "291343818993",
  appId: "1:291343818993:web:70470999d9297852ff4950"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);



const auth = getAuth(app);

export default auth;