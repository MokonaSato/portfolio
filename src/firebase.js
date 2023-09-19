import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"
import { getFirestore } from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyB6upYfqAQo2BrPV1p0hQAcw8rwcBy18ZI",
  authDomain: "official-site-7f02f.firebaseapp.com",
  projectId: "official-site-7f02f",
  storageBucket: "official-site-7f02f.appspot.com",
  messagingSenderId: "525119377600",
  appId: "1:525119377600:web:3f24c329b728868e459d25"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db };