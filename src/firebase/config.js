import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyDw8Sk9nxC66jbrOX2D1LIbx-sJGFSjKDU",
    authDomain: "store-coderhouse-16b2e.firebaseapp.com",
    projectId: "store-coderhouse-16b2e",
    storageBucket: "store-coderhouse-16b2e.appspot.com",
    messagingSenderId: "105343979842",
    appId: "1:105343979842:web:daa14ada1f123dfa5bb8db"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)