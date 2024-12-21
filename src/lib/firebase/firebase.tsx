// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDMlIvgWzUlDQshHEbi0i2NKKyEJ01F898",
  authDomain: "fairmi-3c9f5.firebaseapp.com",
  projectId: "fairmi-3c9f5",
  storageBucket: "fairmi-3c9f5.firebasestorage.app",
  messagingSenderId: "484156406760",
  appId: "1:484156406760:web:4f1b46a9bc01f9c58cc25d",
  measurementId: "G-1M6MFHQT9T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth()

let analytics: ReturnType<typeof getAnalytics> | null = null;

isSupported().then((supported) => {
  if (supported) {
    analytics = getAnalytics(app);
  }
});