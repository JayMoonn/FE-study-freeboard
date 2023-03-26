// --------------- firebase ---------------
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCnQ6zTKce26v5V50rCMngnXQbT8vRWg3o",
  authDomain: "jaymoon-codecamp-freeboard.firebaseapp.com",
  projectId: "jaymoon-codecamp-freeboard",
  storageBucket: "jaymoon-codecamp-freeboard.appspot.com",
  messagingSenderId: "689559387726",
  appId: "1:689559387726:web:6d28a7d04b73d24941cd1f",
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);

// ---------------------------------------------
