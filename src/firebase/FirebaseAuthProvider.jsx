import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile as firebaseUpdateProfile,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "./firebase.init";

export const AuthContext = createContext(null);
const provider = new GoogleAuthProvider();

const FirebaseAuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const creatUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };

  const logoutUser = () => {
    setLoading(true);
    return signOut(auth);
  };

  const updateUserProfile = (updatedData) => {
    return firebaseUpdateProfile(auth.currentUser, updatedData);
  };

  useEffect(() => {
    const unsusCribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log("Current User:", currentUser);
      setLoading(false);
    });

    return () => unsusCribe();
  }, []);

  const userInfo = {
    user,
    setUser,
    loading,
    setLoading,
    creatUser,
    signInUser,
    signInWithGoogle,
    logoutUser,
    updateProfile: updateUserProfile,
  };

  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};

export default FirebaseAuthProvider;
