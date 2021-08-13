import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCF_kQDi3SF1JA2gvaIVJ2SfmPJHiMCn1E",
  authDomain: "disneyplus-clone-ec81c.firebaseapp.com",
  projectId: "disneyplus-clone-ec81c",
  storageBucket: "disneyplus-clone-ec81c.appspot.com",
  messagingSenderId: "272116110045",
  appId: "1:272116110045:web:29c641960582c0317c4134",
  measurementId: "G-LLH70RZRP1",
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
