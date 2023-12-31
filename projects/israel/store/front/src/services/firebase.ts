import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBtueCiUpjur3FrAxGTsLbhTzTXicHaqz4",
  authDomain: "fullstack-los-angeles.firebaseapp.com",
  projectId: "fullstack-los-angeles",
  storageBucket: "fullstack-los-angeles.appspot.com",
  messagingSenderId: "275095895871",
  appId: "1:275095895871:web:1a120296e437817eda1d8a"
};

export const firebaseApp = initializeApp(firebaseConfig);