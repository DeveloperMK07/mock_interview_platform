// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC_ztdMiTUY0dA2d6agUVVb1CEVmcIyET4",
  authDomain: "guideu-efe4d.firebaseapp.com",
  projectId: "guideu-efe4d",
  storageBucket: "guideu-efe4d.firebasestorage.app",
  messagingSenderId: "935334043750",
  appId: "1:935334043750:web:73d1005609df0611858da7",
  measurementId: "G-JM77BK7QD2"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);