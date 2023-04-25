
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyCJnpH8j10gGMaJXtz-IXcW5jI4do4x58Q",
  authDomain: "bazarla-2e6e2.firebaseapp.com",
  projectId: "bazarla-2e6e2",
  storageBucket: "bazarla-2e6e2.appspot.com",
  messagingSenderId: "366045652274",
  appId: "1:366045652274:web:b76cfa78019817a430a32b"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)
export const storage = getStorage(app)

export default app