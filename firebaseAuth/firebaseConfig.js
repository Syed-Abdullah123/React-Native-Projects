<<<<<<< HEAD
import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";

const firebaseConfig = {
  apiKey: "AIzaSyD5C-nsvOUs8C4BvcpHcPBNShfTWnCz3yM",
  authDomain: "fir-fyp-bf23a.firebaseapp.com",
  projectId: "fir-fyp-bf23a",
  storageBucket: "fir-fyp-bf23a.appspot.com",
  messagingSenderId: "274371607874",
  appId: "1:274371607874:web:6389e213e44a9ca5c49cdb",
};

const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = initializeAuth(FIREBASE_APP, {
  persistence: getReactNativePersistence(AsyncStorage),
});
=======
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
>>>>>>> 01c3aaa5816a4442066af5f2a403ad51e3e04b8b
