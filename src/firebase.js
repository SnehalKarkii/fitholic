import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCypFVslNs5u9J1U7KEM0Nbz480eTkU_x8",
  authDomain: "fitholic-21b74.firebaseapp.com",
  projectId: "fitholic-21b74",
  storageBucket: "fitholic-21b74.appspot.com",
  messagingSenderId: "145302778714",
  appId: "1:145302778714:web:ebdd9c175b7afd522f3963",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
