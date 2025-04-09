// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDj6LQyqZE298LcWKTGGharApiI5uTzsn4",
  authDomain: "foodcourt-b97c2.firebaseapp.com",
  projectId: "foodcourt-b97c2",
  storageBucket: "foodcourt-b97c2.firebasestorage.app",
  messagingSenderId: "1098428553944",
  appId: "1:1098428553944:web:bb9d0f3bd40481974195ad",
  measurementId: "G-8KENWFW8JP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);