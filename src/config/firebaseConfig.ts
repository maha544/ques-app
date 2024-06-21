import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyB525gRNEqYCDjBPfwqKAZQFfN3hcGc2mo",
  authDomain: "ques-app12.firebaseapp.com",
  databaseURL: "https://ques-app12-default-rtdb.firebaseio.com",
  projectId: "ques-app12",
  storageBucket: "ques-app12.appspot.com",
  messagingSenderId: "885404500719",
  appId: "1:885404500719:web:4efa3de0b3cbbcd5e7111a",
  measurementId: "G-WM2CSERJDV"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getDatabase(app);

export {db};
