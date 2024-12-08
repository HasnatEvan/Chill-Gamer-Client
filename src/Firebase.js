// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB16wNPZNcIyBAVvTOc3IITrPHS9Ei8xBY",
  authDomain: "chill-gamer-d8311.firebaseapp.com",
  projectId: "chill-gamer-d8311",
  storageBucket: "chill-gamer-d8311.firebasestorage.app",
  messagingSenderId: "1096017647140",
  appId: "1:1096017647140:web:557c3108a5b20d29912ab1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);