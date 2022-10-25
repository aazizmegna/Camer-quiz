import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDPbWCTB1HJ9myelYG2bALbB0Zuh_0DauE",
  authDomain: "camer-quiz-ca7e3.firebaseapp.com",
  projectId: "camer-quiz-ca7e3",
  storageBucket: "camer-quiz-ca7e3.appspot.com",
  messagingSenderId: "75843828216",
  appId: "1:75843828216:web:5ed44ddf4cc72fa8ba7e0d"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)