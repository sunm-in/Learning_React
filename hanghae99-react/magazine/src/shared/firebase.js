import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAEhF4-VUDCBZzDYeYafRNY4kRdlLvydZU",
  authDomain: "magazine-6d021.firebaseapp.com",
  projectId: "magazine-6d021",
  storageBucket: "magazine-6d021.appspot.com",
  messagingSenderId: "990428558725",
  appId: "1:990428558725:web:2a8b940ea5e52bcbf180ec",
  measurementId: "G-M2FEQW9WKV",
};

firebase.initializeApp(firebaseConfig);

const apiKey = firebaseConfig.apiKey;
const auth = firebase.auth();
const firestore = firebase.firestore();
const storage = firebase.storage();

export { auth, apiKey, firestore, storage };
