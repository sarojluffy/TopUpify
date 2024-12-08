// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD4oa3NmvfkLs1TAGhN5DVgUQKv1ZD74V8",
  authDomain: "topupify-f7ccf.firebaseapp.com",
  projectId: "topupify-f7ccf",
  storageBucket: "topupify-f7ccf.firebasestorage.app",
  messagingSenderId: "335425973868",
  appId: "1:335425973868:web:4eb221a530c34113c6b249",
  measurementId: "G-98WF4FKPGV",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const authh = getAuth(app);
export { authh };

//acheived
