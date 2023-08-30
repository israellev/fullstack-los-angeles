import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBtueCiUpjur3FrAxGTsLbhTzTXicHaqz4",
    authDomain: "fullstack-los-angeles.firebaseapp.com",
};

export const firebaseApp = initializeApp(firebaseConfig);
export const firebasAuth = getAuth(firebaseApp);
