// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCMgP4epLJGG2VKc82YBHs31WKAsAyOekQ",
  authDomain: "test-login-fa624.firebaseapp.com",
  projectId: "test-login-fa624",
  storageBucket: "test-login-fa624.appspot.com",
  messagingSenderId: "818702181594",
  appId: "1:818702181594:web:3f16c070026746887eb1e3"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);
export default appFirebase;