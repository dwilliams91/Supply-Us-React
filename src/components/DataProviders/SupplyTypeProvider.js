import React, { useState } from "react"


export const SupplyTypeContext = React.createContext()


export const SupplyTypeProvider = (props) => {

    const [SupplyTypes, setSupplyType] = useState([])

    const getSupplyTypes = () => {
        return fetch("http://localhost:8088/supplyTypes")
            .then(res => res.json())
            .then(setSupplyType)
    }
    const addSupplyType = supplyType => {
        return fetch("http://localhost:8088/supplyTypes", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
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