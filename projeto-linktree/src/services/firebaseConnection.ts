import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const apiKey = import.meta.env.VITE_API_KEY;


const firebaseConfig = {
  apiKey: apiKey,
  authDomain: "devlink-392dd.firebaseapp.com",
  projectId: "devlink-392dd",
  storageBucket: "devlink-392dd.firebasestorage.app",
  messagingSenderId: "615306285807",
  appId: "1:615306285807:web:eeebc4ead1e6f7ec2b811a"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db};