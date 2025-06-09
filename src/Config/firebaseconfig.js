// src/Config/firebaseconfig.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyA9AnL2LzYOajK4PH53Wj733waFB8IaIlo",
  authDomain: "ycars-5834f.firebaseapp.com",
  projectId: "ycars-5834f",
  storageBucket: "ycars-5834f.firebasestorage.app",
  messagingSenderId: "1077762285011",
  appId: "1:1077762285011:web:eba28013251c54c766e326"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
