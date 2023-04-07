import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import firebase from  "firebase/compat";
import 'firebase/firestore'
import 'firebase/auth'
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBQBMG3DvXHBUCy2cWrxFibRTcD5cfdfEY",
  authDomain: "chat-b34d1.firebaseapp.com",
  projectId: "chat-b34d1",
  storageBucket: "chat-b34d1.appspot.com",
  messagingSenderId: "43591901523",
  appId: "1:43591901523:web:684c8da13ed92bdd4281a6",
  measurementId: "G-74RCQFCXJE"
};
export const Context = createContext(null);
const auth = firebase.auth();
const firestore = firebase.firestore();



const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
ReactDOM.render(
  <Context.Provider value={{
    firebase,
    auth,
    firestore
  }}
  >
    <App/>

  </Context.Provider>,
  document.getElementById('root')
);




