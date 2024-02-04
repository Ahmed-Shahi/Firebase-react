import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBjSdGypXOSxHZBC2-kjh5mwWmv3hRIZpA",
  authDomain: "fir-react-583d1.firebaseapp.com",
  databaseURL: "https://fir-react-583d1-default-rtdb.firebaseio.com",
  projectId: "fir-react-583d1",
  storageBucket: "fir-react-583d1.appspot.com",
  messagingSenderId: "184629511640",
  appId: "1:184629511640:web:b787d441a24826e2ca1ead"
};

const app = initializeApp(firebaseConfig);

export {
  app
}

