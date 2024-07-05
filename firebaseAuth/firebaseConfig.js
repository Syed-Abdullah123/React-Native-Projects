// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
const firebaseConfig = {
  apiKey: "AIzaSyD5C-nsvOUs8C4BvcpHcPBNShfTWnCz3yM",
  authDomain: "fir-fyp-bf23a.firebaseapp.com",
  projectId: "fir-fyp-bf23a",
  storageBucket: "fir-fyp-bf23a.appspot.com",
  messagingSenderId: "274371607874",
  appId: "1:274371607874:web:963f4469f4790e50c49cdb",
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = initializeAuth(FIREBASE_APP, {
  persistence: getReactNativePersistence(AsyncStorage),
});
export const FIREBASE_DB = getFirestore(FIREBASE_APP);
