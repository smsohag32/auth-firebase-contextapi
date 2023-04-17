import React, { createContext, useState } from "react";

export const AuthContext = createContext(null);

// auth provider
const AuthProviders = ({ children }) => {
  const [user, setUser] = useState(null);

  const authInfo = {
    user,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProviders;
