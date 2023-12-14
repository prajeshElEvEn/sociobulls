import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDsVxPqXTyJLn6ne0l7ejVU0_IV3RiJbUY",
  authDomain: "sociobulls-6f4a0.firebaseapp.com",
  projectId: "sociobulls-6f4a0",
  storageBucket: "sociobulls-6f4a0.appspot.com",
  messagingSenderId: "202112643115",
  appId: "1:202112643115:web:450a10db751dec12067a6e",
  measurementId: "G-VHSN6XLGNS",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const analytics = getAnalytics(app);
