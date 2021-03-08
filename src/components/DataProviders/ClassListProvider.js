import React, { useState } from "react"


export const ClassListContext = React.createContext()


export const ClassListProvider = (props) => {

    const [classLists, setClassLists] = useState([])

    const getClassLists = () => {
        return fetch("http://localhost:8000/classlists", {
            headers: {
                "Authorization": `Token ${localStorage.getItem("supply_us_id")}`
            }
        })
            .then(res => res.json())
            .then(setClassLists)
    }

    const addClassList = classLists => {
        return fetch("http://localhost:8000/classlists", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Token ${localStorage.getItem("supply_us_id")}`
            },
            body: JSON.stringify(classLists)
        })
            .then(getClassLists)
    }
    const deleteClassList = classLists => {
        return fetch(`http://localhost:8000/classlists/${classLists}`, {
            method: "DELETE",
            headers: {
                "Authorization": `Token ${localStorage.getItem("supply_us_id")}`
            }
        })
            .then(getClassLists)
    }

    return (
        <ClassListContext.Provider value={{
            ClassListProvider, classLists, getClassLists, addClassList, deleteClassList
        }}>
            {props.children}
        </ClassListContext.Provider>
    )
}