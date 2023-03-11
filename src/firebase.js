import firebase from "firebase/compat/app"
import "firebase/compat/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyD67neNI82b3NSCmDhJaNxokQz6OATaQ2E",
  authDomain: "url-shortner-9ee03.firebaseapp.com",
  projectId: "url-shortner-9ee03",
  storageBucket: "url-shortner-9ee03.appspot.com",
  messagingSenderId: "1037942859041",
  appId: "1:1037942859041:web:dc965974f2b5e3d288ca60"
};

const app = firebase.initializeApp(firebaseConfig);
const db = app.firestore();

export default db;