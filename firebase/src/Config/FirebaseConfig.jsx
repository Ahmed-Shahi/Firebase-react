import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword, onAuthStateChanged   } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBjSdGypXOSxHZBC2-kjh5mwWmv3hRIZpA",
  authDomain: "fir-react-583d1.firebaseapp.com",
  projectId: "fir-react-583d1",
  storageBucket: "fir-react-583d1.appspot.com",
  messagingSenderId: "184629511640",
  appId: "1:184629511640:web:b787d441a24826e2ca1ead"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {
    auth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged
}