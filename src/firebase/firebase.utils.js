import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config={
    apiKey: "AIzaSyAwdjMvQcBz2I3VPbAQG0vO1upuQ7ZtLtE",
    authDomain: "crown-clothing-70095.firebaseapp.com",
    databaseURL: "https://crown-clothing-70095.firebaseio.com",
    projectId: "crown-clothing-70095",
    storageBucket: "crown-clothing-70095.appspot.com",
    messagingSenderId: "73968471376",
    appId: "1:73968471376:web:4f4d8763692aaffba9b055",
    measurementId: "G-GMNCKQFQZY"
  };

  export const createUserProfileDocument=async(userAuth,additionalData)=>{
    if(!userAuth) return;

    const  userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if(!snapShot.exists){
      const {displayName,email}=userAuth;
      const createAt=new Date();
      try{
        await userRef.set(
          {
            displayName,
            email,
            createAt,
            ...additionalData
          }
        )
      }
      catch(error){
        console.log('error creating user',error.message);
      }
    }
    return userRef;
  }
  firebase.initializeApp(config);

  export const auth=firebase.auth();
  export const firestore=firebase.firestore();

  const provider=new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt:'select_account'});
  export const signInWithGoogle=()=>auth.signInWithPopup(provider);

  export default firebase;