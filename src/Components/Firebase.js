// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA-CzRgyLR0RGvajuv55u5IWPAoQwCkSGE",
  authDomain: "sendmessage-7a67f.firebaseapp.com",
  projectId: "sendmessage-7a67f",
  storageBucket: "sendmessage-7a67f.appspot.com",
  messagingSenderId: "966008453366",
  appId: "1:966008453366:web:39e730cf70fc9414a6d4d7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
