import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAZ41PU5l_SwLvtn9hpdcS44Ed5RNhcIpg",
  authDomain: "database-a9850.firebaseapp.com",
  projectId: "database-a9850",
  storageBucket: "database-a9850.firebasestorage.app",
  messagingSenderId: "458579768018",
  appId: "1:458579768018:web:a7da971bd827c48494f30b"
};

initializeApp(firebaseConfig);

createRoot(document.getElementById('root')).render(
  <>
    <App />
  </>,
)
