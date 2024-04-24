// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCgxMy_zsA55QnWkRprbG1ExDqBhQLcPKI",
  authDomain: "react-auth202.firebaseapp.com",
  projectId: "react-auth202",
  storageBucket: "react-auth202.appspot.com",
  messagingSenderId: "256516115891",
  appId: "1:256516115891:web:67b9946fce7934fd0e4fc6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export  const auth = getAuth(app);

