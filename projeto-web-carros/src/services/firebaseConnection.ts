import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAa2x5YEN4fLphbdjK4N3W3w7nLAmMu8vU",
  authDomain: "webcarros-9c08a.firebaseapp.com",
  projectId: "webcarros-9c08a",
  storageBucket: "webcarros-9c08a.firebasestorage.app",
  messagingSenderId: "859409465991",
  appId: "1:859409465991:web:c3c84098545969dc0aee22",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app)
const storage = getStorage(app)

export { db, auth, storage };