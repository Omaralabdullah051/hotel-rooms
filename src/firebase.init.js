// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB_TSfKkkJqshFiE0Udk8DmjFsLz82ZXKg",
    authDomain: "hotel-rooms-cc1b8.firebaseapp.com",
    projectId: "hotel-rooms-cc1b8",
    storageBucket: "hotel-rooms-cc1b8.appspot.com",
    messagingSenderId: "353170412738",
    appId: "1:353170412738:web:aee88c20820540bac4575b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;