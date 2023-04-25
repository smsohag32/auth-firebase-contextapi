import React, { useContext } from "react";
import { AuthContext } from "../providers/AuthProviders";

const Home = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="flex justify-center items-center text-3xl min-h-[80vh]">
      {<p>{user ? <span>{user.email}</span> : <span>Please Login</span>}</p>}
    </div>
  );
};

export default Home;
