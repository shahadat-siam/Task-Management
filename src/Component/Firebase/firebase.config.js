 import { initializeApp } from "firebase/app";  

const firebaseConfig = {
  apiKey:  import.meta.env.VITE_API_apiKey,
  authDomain:  import.meta.env.VITE_API_authDomain,
  projectId:  import.meta.env.VITE_API_projectId,
  storageBucket:  import.meta.env.VITE_API_storageBucket,
  messagingSenderId:  import.meta.env.VITE_API_messagingSenderId,
  appId:  import.meta.env.VITE_API_appId,
  measurementId:  import.meta.env.VITE_API_measurementId
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig); 