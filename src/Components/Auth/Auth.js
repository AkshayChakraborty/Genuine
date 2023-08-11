import {useState,useContext, createContext, useEffect } from "react";

const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {
    
    const [auth, setAuth] = useState({
        user: null,
        token:"",
    })

    useEffect(() => {
        const data = localStorage.getItem("auth")
        if (data) {
            const parseData = JSON.parse(data)

            setAuth({
                ...auth,
                user: parseData.user,
                token:parseData.token
            })
        }
    },[])
    

    return <AuthContext.Provider value={[auth,setAuth]}>{children}</AuthContext.Provider>
}

// ----- Coustum Hook --------
const useAuth = () => {
    return useContext(AuthContext)
}

export {useAuth ,AuthProvider}