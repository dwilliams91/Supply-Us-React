import React, { useState } from "react"


export const SupplyTypeContext = React.createContext()


export const SupplyTypeProvider = (props) => {

    const [SupplyTypes, setSupplyType] = useState([])

    const getSupplyTypes = () => {
        return fetch("http://localhost:8000/supplytypes", {
        headers: {
            "Authorization": `Token ${localStorage.getItem("supply_us_id")}`
        }
    })
            .then(res => res.json())
            .then(setSupplyType)
    }
    const addSupplyType = supplyType => {
        return fetch("http://localhost:8000/supplytypes", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Token ${localStorage.getItem("supply_us_id")}`
            },
            body: JSON.stringify(supplyType)
        })
            .then(getSupplyTypes)
    }

    return (
        <SupplyTypeContext.Provider value={{
            SupplyTypeProvider, SupplyTypes, getSupplyTypes, addSupplyType
        }}>
            {props.children}
        </SupplyTypeContext.Provider>
    )
}