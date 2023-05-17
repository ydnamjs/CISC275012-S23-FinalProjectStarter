// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDLq_iy9PxJU0uIiE4AWUoWzJDbLrjC_0Y",
    authDomain: "team-2-e1bbd.firebaseapp.com",
    projectId: "team-2-e1bbd",
    storageBucket: "team-2-e1bbd.appspot.com",
    messagingSenderId: "543462547536",
    appId: "1:543462547536:web:6f102e18d0901043cdb155",
    measurementId: "G-XN08T4FJV0",
    databaseURL: "https://team-2-e1bbd-default-rtdb.firebaseio.com/"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const database = getDatabase(app);
