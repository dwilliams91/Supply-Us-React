import React, { useState } from "react"


export const AdminContext = React.createContext()


export const AdminProvider= (props) => {
    const [users, setUsers] = useState([])


    const getPendingTeachers = () => {
        return fetch("http://localhost:8000/admins/getPendingTeachers",{
        headers: {
            "Authorization": `Token ${localStorage.getItem("supply_us_id")}`
        }
    })
            .then(res => res.json())
            .then(setUsers)
    }
    
    return (
        <AdminContext.Provider value={{
            users, getPendingTeachers
        }}>
            {props.children}
        </AdminContext.Provider>
    )
}