import React, { useState } from "react"


export const UserTypeContext = React.createContext()


export const UserTypeProvider= (props) => {
    const [userTypes, setUserType] = useState([])


    const getUserTypes = () => {
        return fetch("http://localhost:8088/userType")
            .then(res => res.json())
            .then(setUserType)
    }
    
    return (
        <UserTypeContext.Provider value={{
            userTypes, getUserTypes, UserTypeProvider
        }}>
            {props.children}
        </UserTypeContext.Provider>
    )
}