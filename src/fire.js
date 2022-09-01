import firebase from "firebase/compat/app";
import "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
    apiKey: "AIzaSyB_Ij2pVbV5D3s9C14WANgfpxTljpkjx7M",
    authDomain: "coffee-bar-6ac87.firebaseapp.com",
    projectId: "coffee-bar-6ac87",
    storageBucket: "coffee-bar-6ac87.appspot.com",
    messagingSenderId: "311462584816",
    appId: "1:311462584816:web:1d4310f500c7e8ef6dbd35",
    measurementId: "G-809RRP0VYN"
};

const fire = firebase.initializeApp(firebaseConfig);
export default fire;