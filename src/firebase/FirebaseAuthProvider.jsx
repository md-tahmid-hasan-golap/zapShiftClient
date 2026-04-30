import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "./firebase.init";

export const AuthContext = createContext(null);
const provider = new GoogleAuthProvider();

const FirebaseAuthProvider = ({ children }) => {
  // set user
  const [user, setUser] = useState(null);
  // set loading
  const [loading, setLoading] = useState(true);

  // creat user
  const creatUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // signInUser

  const signInUser = (email, password) => {
    setLoading(true);

    return signInWithEmailAndPassword(auth, email, password);
  };

  // signInWithGoogle
  const signInWithGoogle = () => {
    setLoading(true);

    return signInWithPopup(auth, provider);
  };
  // logoutUser
  const logoutUser = () => {
    setLoading(true);
    return signOut(auth);
  };

  // onAuthStateChange
  useEffect(() => {
    const unsusCribe = onAuthStateChanged(auth, (crueentUser) => {
      setUser(crueentUser);
      setLoading(false);
      console.log(crueentUser);
    });

    return () => unsusCribe();
  }, []);

  // userInfo
  const userInfo = {
    user,
    setUser,
    loading,
    setLoading,
    creatUser,
    signInUser,
    signInWithGoogle,
    logoutUser,
  };

  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};

export default FirebaseAuthProvider;
