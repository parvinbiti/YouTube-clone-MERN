// import { initializeApp } from "firebase/app";
// import { getStorage} from 'firebase/storage';
// import {getFirestore} from "firebase/firestore"

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyB9NomQPgAoQ6B1c64XhN3ahqN0U1Fe3YU",
//   authDomain: "mern-df125.firebaseapp.com",
//   projectId: "mern-df125",
//   storageBucket: "mern-df125.appspot.com",
//   messagingSenderId: "757150184874",
//   appId: "1:757150184874:web:16b30a921277ea328527d3"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// export const storage = getStorage(app)
// export const db = getFirestore(app)







import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyA3R2L25F9PYSkjC4tBj9x9iFSoJD7E-UM",
  authDomain: "clone-4a966.firebaseapp.com",
  projectId: "clone-4a966",
  storageBucket: "clone-4a966.appspot.com", // এটা ঠিক করে দেখো Firebase console অনুযায়ী
  messagingSenderId: "636171147342",
  appId: "1:636171147342:web:d231b5962640ccf22a8b1f",
  measurementId: "G-T1HB68PKD7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const storage = getStorage(app); // Firebase Storage
export const db = getFirestore(app);   // Firestore Database
export default app;

