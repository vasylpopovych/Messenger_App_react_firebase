import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import App from "./App";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const app = initializeApp({
  apiKey: "AIzaSyCQJCN2K1rFhcaTmcLSAnTmCNF6Nhm37Rw",
  authDomain: "chat-react-firebase-e9de6.firebaseapp.com",
  projectId: "chat-react-firebase-e9de6",
  storageBucket: "chat-react-firebase-e9de6.appspot.com",
  messagingSenderId: "599030874718",
  appId: "1:599030874718:web:1a7215ec6e5259bad22acf",
  measurementId: "G-5RNSDTYQJJ",
});

export const Context = createContext(null);

const auth = getAuth(app);
const firestore = getFirestore(app);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Context.Provider
    value={{
      auth,
      firestore,
    }}
  >
    <App />
  </Context.Provider>
);
