import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDt737PZ1m6KqHo4QbV01ZAt0lHH7-NbII",
  authDomain: "my-app-2fc2f.firebaseapp.com",
  projectId: "my-app-2fc2f",
  storageBucket: "my-app-2fc2f.appspot.com",
  messagingSenderId: "194326120034",
  appId: "1:194326120034:web:6f2b8bc7e2fe90ec3bb33b",
  measurementId: "G-91ZDV5HWD6"
};
  const firebaseApp  = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  const auth = firebase.auth();

  export { db, auth }
