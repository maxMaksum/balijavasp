
  import firebase from 'firebase'
  
  const firebaseConfig = {
    apiKey: "AIzaSyC_-8I3DmGwFqm6tEnr0zJzB9T9z3LmPyE",
    authDomain: "balijavaspirit.firebaseapp.com",
    projectId: "balijavaspirit",
    storageBucket: "balijavaspirit.appspot.com",
    messagingSenderId: "59751797011",
    appId: "1:59751797011:web:9fce0f842ba2621eb08ae6"
  };
 
  const app  = !firebase.apps.length? firebase.initializeApp(firebaseConfig) : firebase.app()

  const db = app.firestore()
  const auth = app.auth()
  const provider = new firebase.auth.GoogleAuthProvider()

  export {db, auth, provider}