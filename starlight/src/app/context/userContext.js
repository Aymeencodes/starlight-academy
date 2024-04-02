"use client"
import { createContext, useEffect, useState } from "react";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(() => {
        if (typeof window !== 'undefined') {
            // Access localStorage only if window is defined (i.e., in the browser)
            return JSON.parse(localStorage.getItem('user')) || {};
        } else {
            return {};
        }
    });

    useEffect(() => {
        if (typeof window !== 'undefined') {
            // Access localStorage only if window is defined (i.e., in the browser)
            localStorage.setItem('user', JSON.stringify(currentUser));
        }
    }, [currentUser]);

    return (
        <UserContext.Provider value={{ currentUser, setCurrentUser }}>
            {children}
        </UserContext.Provider>
    );
};

export default UserProvider;
