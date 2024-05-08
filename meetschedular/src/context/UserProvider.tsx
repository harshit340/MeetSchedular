"use client"
import React, { useState, useEffect } from "react";
import UserContext from "./UserContext";

const UserContextProvider = ({ children}) => {
  const [user, setuser] = useState();

  
  const setUserData = (userData) => {
    setuser(userData);
    if (typeof window !== "undefined") {
      localStorage.setItem("user", JSON.stringify(userData));
    }
  };

 
  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedUser = localStorage.getItem("user");
      if (storedUser) {
        setuser(JSON.parse(storedUser));
      }
    }
  }, []);

  
  const value = { user, setuser: setUserData };

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
