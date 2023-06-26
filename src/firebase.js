// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAHJSNUXKuFjbCqlNd_RGohR9Vcpx2UuYc",
  authDomain: "npc-gen-e7956.firebaseapp.com",
  projectId: "npc-gen-e7956",
  storageBucket: "npc-gen-e7956.appspot.com",
  messagingSenderId: "420421500869",
  appId: "1:420421500869:web:8a88d4ca2e3b4ec049d5ac"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const namesCollection = collection(db, "names");