// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';

import "firebase/compat/storage"
import "firebase/compat/firestore"

// import * as firebase from 'firebase/app';
// import 'firebase/firestore';
// import 'firebase/storage';

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const firebaseConfig = {

  apiKey: "AIzaSyAzHZDPm3Oois3IMlxFoZym-SyReIEzeRI",

  authDomain: "barbearia-do-parra.firebaseapp.com",

  projectId: "barbearia-do-parra",

  storageBucket: "barbearia-do-parra.appspot.com",

  messagingSenderId: "201505080975",

  appId: "1:201505080975:web:9bfc3cd8e31b00648dd2fa"

};


// Initialize Firebase

const app = firebase.initializeApp(firebaseConfig);

const firebaseStorage = firebase.storage()

export { firebaseStorage, app as default}