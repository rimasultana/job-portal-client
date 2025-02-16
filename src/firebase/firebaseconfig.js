// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCevnPSqXCBMDkHgptoWBDBi7-s40yoxsU",
  authDomain: "jobstack-534be.firebaseapp.com",
  projectId: "jobstack-534be",
  storageBucket: "jobstack-534be.firebasestorage.app",
  messagingSenderId: "414786415879",
  appId: "1:414786415879:web:020f5e01078138c79869a2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;