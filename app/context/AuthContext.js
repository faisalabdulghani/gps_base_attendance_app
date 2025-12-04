import { createContext, useState, useEffect } from "react";
import { getData, storeData, removeData } from "../utils/storage";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [loading, setLoading] = useState(true);

    // Load token on first app launch
    useEffect(() => {
        getData("token").then(token => {
            setIsLoggedIn(!!token);
            setLoading(false);
        });
    }, []);

    // Login function
    const login = async (token, user) => {
        await storeData("token", token);
        await storeData("user", user);
        setIsLoggedIn(true);
    };

    // Logout function
    const logout = async () => {
        await removeData("token");
        await removeData("user");
        setIsLoggedIn(false);
    };

    return (
        <AuthContext.Provider value={{ isLoggedIn, login, logout, loading }}>
            {children}
        </AuthContext.Provider>
    );
}
