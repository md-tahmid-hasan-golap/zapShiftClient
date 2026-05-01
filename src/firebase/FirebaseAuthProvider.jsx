import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile as firebaseUpdateProfile, // নাম পরিবর্তন করে ইমপোর্ট করা হলো
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "./firebase.init";

export const AuthContext = createContext(null);
const provider = new GoogleAuthProvider();

const FirebaseAuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // ১. ইউজার তৈরি
  const creatUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // ২. লগইন
  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // ৩. গুগল লগইন
  const signInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };

  // ৪. লগআউট
  const logoutUser = () => {
    setLoading(true);
    return signOut(auth);
  };

  // ৫. প্রোফাইল আপডেট (সংশোধিত)
  const updateUserProfile = (updatedData) => {
    // updatedData তে displayName এবং photoURL থাকতে হবে
    return firebaseUpdateProfile(auth.currentUser, updatedData);
  };

  // ৬. ইউজার স্টেট পর্যবেক্ষণ
  useEffect(() => {
    const unsusCribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
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
    updateProfile: updateUserProfile, // প্রোফাইল আপডেট ফাংশন
  };

  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};

export default FirebaseAuthProvider;
