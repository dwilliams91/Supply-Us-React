import React, { useState } from "react"


export const PackageTypeContext = React.createContext()


export const PackageTypeProvider = (props) => {

    const [PackageTypes, setPackageType] = useState([])

    const getPackageTypes = () => {
        return fetch("http://localhost:8000/supplytypes", {
        headers: {
            "Authorization": `Token ${localStorage.getItem("supply_us_id")}`
        }
    })
            .then(res => res.json())
            .then(setPackageType)
    }
    const addPackageType = supplyType => {
        return fetch("http://localhost:8088/supplyTypes", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(supplyType)
        })
            .then(getPackageTypes)
    }

    return (
        <PackageTypeContext.Provider value={{
            PackageTypeProvider, PackageTypes, getPackageTypes, addPackageType
        }}>
            {props.children}
        </PackageTypeContext.Provider>
    )
}