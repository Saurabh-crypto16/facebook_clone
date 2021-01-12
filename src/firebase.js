import firebase from "firebase"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAhKhtGnoBMODZyLc5dDZQJy3bVM2BoXVA",
  authDomain: "facebookclone-279f7.firebaseapp.com",
  projectId: "facebookclone-279f7",
  storageBucket: "facebookclone-279f7.appspot.com",
  messagingSenderId: "86646255092",
  appId: "1:86646255092:web:ec18ff461fb4145d129da1",
  measurementId: "G-04KJ8ZWGZB"
};

//this code converts react frontend to firebase backend
const firebaseApp=firebase.initializeApp(firebaseConfig);

//accessing database
const db=firebaseApp.firestore();

//auth allows us to login,logout,sign in and sign out etc
const auth=firebaseApp.auth();

//this tells firebase that wew need google login service
const provider=new firebase.auth.GoogleAuthProvider();

export{auth,provider};
export default db;