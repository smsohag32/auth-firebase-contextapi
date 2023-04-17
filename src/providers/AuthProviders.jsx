import React, { createContext, useState } from "react";
import app from "../firebase/firebase.config";
import { getAuth } from "firebase/auth";
const auth = getAuth(app);
export const AuthContext = createContext(null);

// auth provider
const AuthProviders = ({ children }) => {
  const [user, setUser] = useState(null);

  const handleRegister = (email, password) => {};
  const authInfo = {
    user,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProviders;
