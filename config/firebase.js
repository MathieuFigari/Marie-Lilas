import { initializeApp } from "firebase/app";
import { getFirestore } from '@firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAAko_N63Cp5yJEciv-A9l7aHcEMbLcHPM",
  authDomain: "marie-lilas.firebaseapp.com",
  projectId: "marie-lilas",
  storageBucket: "marie-lilas.appspot.com",
  messagingSenderId: "511412126514",
  appId: "1:511412126514:web:41ed60491ee0a62cf88d2b"
};


export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app)