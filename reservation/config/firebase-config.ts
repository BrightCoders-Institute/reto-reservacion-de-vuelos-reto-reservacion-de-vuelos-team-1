import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// import { 
//   FIREBASE_API_KEY, 
//   FIREBASE_AUTH_DOMAIN,
//   FIREBASE_PROJECT_ID,
//   FIREBASE_STORAGE_BUCKET,
//   FIREBASE_MESSAGING_SENDER_ID,
//   FIREBASE_APP_ID
// } from '@env';

const firebaseConfig = {
  apiKey: 'AIzaSyBHDp1g65MfWi_tV5bvfZOdvTrqDu0tvtE',
  authDomain: 'fly-reservation.firebaseapp.com',
  projectId: 'fly-reservation',
  storageBucket: 'fly-reservation.appspot.com',
  messagingSenderId: '28137103397',
  appId: '1:28137103397:web:c44488a03f1a5fb3a8dfcc'
};


export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIREBASE_FIRESTORE_DB = getFirestore(FIREBASE_APP);
