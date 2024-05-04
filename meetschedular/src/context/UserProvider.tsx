"use client"
import React from "react";
import UserContext from "./UserContext";

const UserContextProvider = ({
    children,
  }: {
    children: React.ReactNode
  }) => {
    const [user,setuser] = React.useState();
    const value = { user, setuser: setuser };
    return (
        <UserContextProvider value={value}>
            {children}
        </UserContextProvider>
    )
}

export default UserContextProvider