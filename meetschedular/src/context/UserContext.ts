import React from 'react'
import { createContext } from 'react'
interface User {
    duration: number; 
  }
  
  interface UserContextType {
    user?: User;
  }
  
const UserContext = createContext<UserContextType | undefined>(undefined);

export default UserContext;





