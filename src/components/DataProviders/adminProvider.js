import React, { useState } from "react"


export const AdminContext = React.createContext()


export const AdminProvider= (props) => {
    const [users, setUser] = useState([])


    const getPendingTeachers = () => {
        return fetch("http://localhost:8000/admin/getPendingTeacher")
            .then(res => res.json())
            .then(setUser)
    }
    
    return (
        <AdminContext.Provider value={{
            users, getPendingTeachers
        }}>
            {props.children}
        </AdminContext.Provider>
    )
}