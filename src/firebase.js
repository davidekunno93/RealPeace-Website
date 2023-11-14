// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyBWcdqq4FeATwgKsxGv7BGAwQbgp_9_q_4",
  authDomain: "realpeacemeditation.firebaseapp.com",
  projectId: "realpeacemeditation",
  storageBucket: "realpeacemeditation.appspot.com",
  messagingSenderId: "262000698448",
  appId: "1:262000698448:web:b215b7c1198d71cf351d55",
  measurementId: "G-TPF7YQ1WK1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);
const analytics = getAnalytics(app);
// Initialize auth
const auth = getAuth(app);
export default auth