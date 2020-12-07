import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';
import 'firebase/analytics';
import 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyCMXFEkdHKrVNpBXhoGbYGKO3cvDUDyR1k",
  authDomain: "my-admin-template.firebaseapp.com",
  databaseURL: "https://my-admin-template.firebaseio.com",
  projectId: "my-admin-template",
  storageBucket: "my-admin-template.appspot.com",
  messagingSenderId: "878476952775",
  appId: "1:878476952775:web:71563a35736aaeb00d2ae2",
  measurementId: "G-KZBM7BS1XS"
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export default firebase;
