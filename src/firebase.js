import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBrCj06Bg7bubU3KgxAmXIaEtjzv7RtOD0",
  authDomain: "tinder-app-e4cf2.firebaseapp.com",
  databaseURL: "https://tinder-app-e4cf2.firebaseio.com",
  projectId: "tinder-app-e4cf2",
  storageBucket: "tinder-app-e4cf2.appspot.com",
  messagingSenderId: "833537181889",
  appId: "1:833537181889:web:2143fe3ce65928efc62c40",
  measurementId: "G-52SEY2T030",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const database = firebaseApp.firestore(); // access to the firebase  realtime database

export default database;
