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
