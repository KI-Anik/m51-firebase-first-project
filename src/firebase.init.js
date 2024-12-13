// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCT3wf1VvFKtBWDQoMob99mlusu5AHdZhE",
  authDomain: "m51-firebase-first-project.firebaseapp.com",
  projectId: "m51-firebase-first-project",
  storageBucket: "m51-firebase-first-project.firebasestorage.app",
  messagingSenderId: "753920787245",
  appId: "1:753920787245:web:75baadcb606d222982c9a4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);