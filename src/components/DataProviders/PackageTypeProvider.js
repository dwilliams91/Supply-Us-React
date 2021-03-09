import React, { useState } from "react"


export const PackageTypeContext = React.createContext()


export const PackageTypeProvider = (props) => {

    const [packageTypes, setPackageType] = useState([])

    const getPackageTypes = (item) => {
        return fetch(`http://localhost:8000/packagetypes/${item}/getRelatedPackageTypes`, {
        headers: {
            "Authorization": `Token ${localStorage.getItem("supply_us_id")}`
        }
    })
            .then(res => res.json())
            .then(setPackageType)
            .then(console.log(packageTypes))
    }
    

    return (
        <PackageTypeContext.Provider value={{
            PackageTypeProvider, packageTypes, getPackageTypes
        }}>
            {props.children}
        </PackageTypeContext.Provider>
    )
}