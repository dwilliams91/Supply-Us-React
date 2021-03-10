import React, { useState } from "react"


export const ClassListSupplyItemContext = React.createContext()


export const ClassListSupplyItemProvider= (props) => {

    const [classListSupplyItem, setClassListSupplyItem] = useState([])

    const getClassListSupplyItem = (classId) => {
        console.log("class id", classId)
        return fetch(`http://localhost:8000/supplyitems/${classId}/classListSupplyItem`,{
            headers: {
                "Authorization": `Token ${localStorage.getItem("supply_us_id")}`
            }
        })
            .then(res => res.json())
            .then(setClassListSupplyItem)
    }

    const addClassListSupplyItem = classListsSupplyItem => {
        return fetch("http://localhost:8088/ClassListSupplyItems", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(classListsSupplyItem)
        })
            .then(getClassListSupplyItem)
    }
    const deleteItem = ClassItemSupplyListId => {
        console.log(ClassItemSupplyListId)
        return fetch(`http://localhost:8088/ClassListSupplyItems/${ClassItemSupplyListId}`, {
            method: "DELETE"
        })
            .then(getClassListSupplyItem)
    }
    return (
        <ClassListSupplyItemContext.Provider value={{
            ClassListSupplyItemProvider, classListSupplyItem, getClassListSupplyItem, addClassListSupplyItem, deleteItem
        }}>
            {props.children}
        </ClassListSupplyItemContext.Provider>
    )
}