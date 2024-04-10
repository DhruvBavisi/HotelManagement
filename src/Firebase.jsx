// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBfxqLBoxGUbJwP8uw-jr8nn0QcQSG2k28",
  authDomain: "hotelmanagement-66c6b.firebaseapp.com",
  projectId: "hotelmanagement-66c6b",
  storageBucket: "hotelmanagement-66c6b.appspot.com",
  messagingSenderId: "1075568242143",
  appId: "1:1075568242143:web:85158067921946e4c0e86a",
  measurementId: "G-LYB7072GVH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);