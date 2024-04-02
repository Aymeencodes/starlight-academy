"use client"
import { createContext,useEffect,useState } from "react";

export const UserContext = createContext()

const UserProvider = ({children})=>{
    const [currentUser, setcurrentUser] = useState('');
    useEffect(()=>{
    },[currentUser])
    return <UserContext.Provider value={{currentUser,setcurrentUser}}>{children}</UserContext.Provider>
}

export default UserProvider