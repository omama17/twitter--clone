import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyBE1VmbtsjjbIY_R49Msis3OpPhHlwplUA",
    authDomain: "twitter-clone-e6061.firebaseapp.com",
    databaseURL: "https://twitter-clone-e6061.firebaseio.com",
    projectId: "twitter-clone-e6061",
    storageBucket: "twitter-clone-e6061.appspot.com",
    messagingSenderId: "26021912196",
    appId: "1:26021912196:web:038d0d8d0706890ef4ecd1",
    measurementId: "G-MPG61DG8XL"
  };
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
export default db;



