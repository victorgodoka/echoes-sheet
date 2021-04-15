import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyC5XTS6OGKI0Jjf6_qKa2u367mXGffNOBU",
  authDomain: "ygospellbookapp.firebaseapp.com",
  databaseURL: "https://ygospellbookapp.firebaseio.com",
  projectId: "ygospellbookapp",
  storageBucket: "ygospellbookapp.appspot.com",
  messagingSenderId: "1073359187290",
  appId: "1:1073359187290:web:ee331e80106fd28c879763",
  measurementId: "G-TEXM1TKJDJ"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics()

export default firebase;