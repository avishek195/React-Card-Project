import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB0HCbljY9_WP2xiM8yb6oTVhEcFfvnYf8",
  authDomain: "crwn-e-project.firebaseapp.com",
  projectId: "crwn-e-project",
  storageBucket: "crwn-e-project.appspot.com",
  messagingSenderId: "539304835660",
  appId: "1:539304835660:web:cb6a5fd0dec268067492e9",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();

export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);
  // console.log(userDocRef);
  const userSnapshot = await getDoc(userDocRef);
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const creatAt = new Date();
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        creatAt,
      });
    } catch (err) {
      console.log("Err Creating the user", err.message);
    }
  }
  return userAuth;
  // console.log(userSnapshot);
};
