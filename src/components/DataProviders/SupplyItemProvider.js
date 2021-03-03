import React, { useState } from "react"


export const SupplyItemContext = React.createContext()


export const SupplyItemsProvider = (props) => {

    const [SupplyItems, setSupplyItems] = useState([])
    const [searchTerms, setSearchTerms]=useState("")

    const getSupplyItems = () => {
        return fetch("http://localhost:8088/supplyItems")
            .then(res => res.json())
            .then(setSupplyItems)
    }

    const addSupplyItem = supplyItem => {
        return fetch("http://localhost:8088/supplyItems", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(supplyItem)
        })
            .then(getSupplyItems)
    }
    const updateItem = item => {
        return fetch(`http://localhost:8088/supplyItems/${item.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(item)
        })
            .then(getSupplyItems)
    }

    return (
        <SupplyItemContext.Provider value={{
            SupplyItems, SupplyItemsProvider, getSupplyItems, searchTerms, setSearchTerms, addSupplyItem, updateItem
        }}>
            {props.children}
        </SupplyItemContext.Provider>
    )
}