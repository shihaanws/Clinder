import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDqwGZdkp6rqQnDe4WXbqBfFJv_4Ais-NQ",
    authDomain: "tinder-clone-e0866.firebaseapp.com",
    databaseURL: "https://tinder-clone-e0866.firebaseio.com",
    projectId: "tinder-clone-e0866",
    storageBucket: "tinder-clone-e0866.appspot.com",
    messagingSenderId: "304498756595",
    appId: "1:304498756595:web:1c2e9bdebb21f64898e086",
    measurementId: "G-K7GT1HW3KL"
  };


  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const database = firebaseApp.firestore(); 

  export default database;