import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCb0EPBmcyZtw_7CGQuRjkRIBu8fg03F-4",
  authDomain: "seventwod-c7912.firebaseapp.com",
  projectId: "seventwod-c7912",
  storageBucket: "seventwod-c7912.appspot.com",
  messagingSenderId: "61680261951",
  appId: "1:61680261951:web:61a4c422efe85566aa518a",
  measurementId: "G-K82Y25LS12"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
export const vansh= getFirestore(app);
export const storage = getStorage(app);