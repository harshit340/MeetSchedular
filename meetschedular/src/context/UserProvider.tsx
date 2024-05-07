"use client"
import React, { useState, useEffect } from "react";
import UserContext from "./UserContext";

const UserContextProvider = ({ children}) => {
  const [user, setuser] = useState();

  // Function to update user state and save to local storage
  const setUserData = (userData) => {
    setuser(userData);
    if (typeof window !== "undefined") {
      localStorage.setItem("user", JSON.stringify(userData));
    }
  };

  // Effect to load user data from local storage on component mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedUser = localStorage.getItem("user");
      if (storedUser) {
        setuser(JSON.parse(storedUser));
      }
    }
  }, []);

  // Provide setUserData through context so it's used instead of setuser
  const value = { user, setuser: setUserData };

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
