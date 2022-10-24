
import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const app = firebase.initializeApp({
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: "green-flower-98c9f.firebaseapp.com",
    projectId: "green-flower-98c9f",
    storageBucket: "green-flower-98c9f.appspot.com",
    messagingSenderId: "260020748873",
    appId: "1:260020748873:web:e0ae7b98913f0fbe9c7598"
});

export const auth = app.auth();
export default app;