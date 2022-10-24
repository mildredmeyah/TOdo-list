// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyCgFaoNwnsgEdBVrbwo3MgVuhpn1DiGAeo",
  authDomain: "to-do-list-89354.firebaseapp.com",
  projectId: "to-do-list-89354",
  storageBucket: "to-do-list-89354.appspot.com",
  messagingSenderId: "1069614352946",
  appId: "1:1069614352946:web:fff226bff7d4fa00904a2b",
  measurementId: "G-TL6Z3BBWGT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export const db = getFirestore(app);