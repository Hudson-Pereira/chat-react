import * as firebase from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyA863OV3tUEFGS0qBRclm0lIxnEHXR1pi8",
    authDomain: "chat-91d23.firebaseapp.com",
    projectId: "chat-91d23",
    storageBucket: "chat-91d23.appspot.com",
    messagingSenderId: "471984222331",
    appId: "1:471984222331:web:e08a08f3d0fb2e2d2b32de",
    measurementId: "G-K4VMFCJGM1"
});

export const auth = getAuth(firebaseApp);
export const firestore = getFirestore(firebaseApp);

export default firebaseApp;