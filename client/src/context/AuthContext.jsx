import { useContext, useState } from "react";

export const AuthContext = useContext()

export const AuthContextProvider = ({children}) =>{
    const [currentUser,setCurrentUser] = useState(
        //user we get is a string so convert to object
        JSON.parse(localStorage.getItem("user")) || null
    )

    return (
        <AuthContext.Provider value={currentUser}>{children}</AuthContext.Provider>
    )
}