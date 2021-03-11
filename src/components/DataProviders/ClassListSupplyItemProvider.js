import React, { useState } from "react"


export const ClassListSupplyItemContext = React.createContext()


export const ClassListSupplyItemProvider= (props) => {

    const [classListSupplyItem, setClassListSupplyItem] = useState([])

    const getClassListSupplyItem = (classId) => {
        return fetch(`http://localhost:8000/supplyitems/${classId}/classListSupplyItem`,{
            headers: {
                "Authorization": `Token ${localStorage.getItem("supply_us_id")}`
            }
        })
            .then(res => res.json())
            .then(setClassListSupplyItem)
    }

    const addClassListSupplyItem = (newItem, classId) => {
        return fetch(`http://localhost:8000/supplyitems/1/classListSupplyItem`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Token ${localStorage.getItem("supply_us_id")}`
            },
            body: JSON.stringify(newItem)
        })
            .then(getClassListSupplyItem(classId))
    }

    const deleteItem = (ClassItemSupplyListId, classId) => {
        // create body to send in delete method so it know which item
        const itemToDelete={
            classListSupplyItemId:ClassItemSupplyListId
        }
        return fetch(`http://localhost:8000/supplyitems/1/classListSupplyItem`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Token ${localStorage.getItem("supply_us_id")}`
            },
            body: JSON.stringify(itemToDelete)
        })
            .then(getClassListSupplyItem(classId))
    }
    return (
        <ClassListSupplyItemContext.Provider value={{
            ClassListSupplyItemProvider, classListSupplyItem, getClassListSupplyItem, addClassListSupplyItem, deleteItem
        }}>
            {props.children}
        </ClassListSupplyItemContext.Provider>
    )
}