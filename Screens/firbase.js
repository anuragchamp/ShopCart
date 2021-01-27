import firebase from 'firebase';
import 'firebase/auth';

const app = firebase.initializeApp({

    apiKey: "AIzaSyAHm0G3Ej1r0Esq9rWDwXo4Rf-d4L_1rCI",
    authDomain: "login-ee246.firebaseapp.com",
    projectId: "login-ee246",
    storageBucket: "login-ee246.appspot.com",
    messagingSenderId: "1086309823819",
    appId: "1:1086309823819:web:93b140ef51fc6f7e1ba4ce",
    measurementId: "G-T5MVHTPG3Q"
})

export const auth = app.auth();
export default app;