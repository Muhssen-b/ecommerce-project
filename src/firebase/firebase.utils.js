import firebase from 'firebase/app';

import 'firebase/firestore'
import 'firebase/auth'


const config = {
    apiKey: "AIzaSyBFFqlLwIRb-SB3_kshoG338Xono1eh_J4",
    authDomain: "ecommerce-project-1af04.firebaseapp.com",
    databaseURL: "https://ecommerce-project-1af04.firebaseio.com",
    projectId: "ecommerce-project-1af04",
    storageBucket: "ecommerce-project-1af04.appspot.com",
    messagingSenderId: "913824227818",
    appId: "1:913824227818:web:1ed43b67de49abee679293",
    measurementId: "G-0PME8FW8JX"
};

export const createUserProfileDocument = async (userAuth, additionalData ) => {
 if(!userAuth) return;
 
 const userRef = firestore.doc(`users/${userAuth.uid}`);

 const snapShot = userRef.get();

 if(!snapShot.exists) {
     const { displayName, email } = userAuth;
     const createdAt = new Date();

     try {
        await userRef.set({
            displayName,
            email,
            createdAt,
            ...additionalData

        })
     } catch (error) {
         console.log('error creating user')
     }
 }
}
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters( { prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;