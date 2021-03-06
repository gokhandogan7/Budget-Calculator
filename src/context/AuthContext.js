import React, { createContext, useState, useEffect } from "react";
import firebase from "../firebase/firebase.utils";

export const FirebaseAuthContext = createContext();

function AuthContext(props) {
  const [autorized, setAutorized] = useState(false);
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    firebase.firebaseAuth.onAuthStateChanged((user) => {
      setCurrentUser(user);

      console.log(user);
    });
  }, []);

  return (
    <FirebaseAuthContext.Provider value={{ currentUser }}>
      {props.children}
    </FirebaseAuthContext.Provider>
  );
}

export default AuthContext;
