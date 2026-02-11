// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDpICZ59Cc9B6ZjmzI6liKA6R96ix76Hy0",
  authDomain: "opal-teaching-platform.firebaseapp.com",
  projectId: "opal-teaching-platform",
  storageBucket: "opal-teaching-platform.firebasestorage.app",
  messagingSenderId: "39716263032",
  appId: "1:39716263032:web:10e8b28f6c0015c581c98d",
  measurementId: "G-CLBSRGDSY1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
export const analytics = typeof window !== "undefined" ? getAnalytics(app) : null;
export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth(app);

export default app;

