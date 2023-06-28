import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAgO6aYvAeNJ0qCluBmBm9mSkVkipQ-p-A",
  authDomain: "reto-reservacion-de-vuelos.firebaseapp.com",
  projectId: "reto-reservacion-de-vuelos",
  storageBucket: "reto-reservacion-de-vuelos.appspot.com",
  messagingSenderId: "870435862091",
  appId: "1:870435862091:web:18e7edd9e80f5a0b8effce",
  measurementId: "G-SXK0DYYJKX"
};

export const app = initializeApp(firebaseConfig);
