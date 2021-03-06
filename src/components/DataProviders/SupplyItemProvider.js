import React, { useState } from "react"


export const SupplyItemContext = React.createContext()


export const SupplyItemsProvider = (props) => {

    const [SupplyItems, setSupplyItems] = useState([])
    const [searchTerms, setSearchTerms]=useState("")

    const getSupplyItems = () => {
        return fetch("http://localhost:8000/supplyitems",{
            headers: {
                "Authorization": `Token ${localStorage.getItem("supply_us_id")}`
            }
        })
            .then(res => res.json())
            .then(setSupplyItems)
    }
    const getFilterbyTypeSupplyItems = (typeId) => {
        return fetch(`http://localhost:8000/supplyitems/${typeId}/typefilter`,{
            method: "POST",
            headers: {
                "Authorization": `Token ${localStorage.getItem("supply_us_id")}`
            }
        })
            .then(res => res.json())
            .then(setSupplyItems)
    }

    const getFilterbyNameSupplyItems = (searchTerm) => {
        return fetch(`http://localhost:8000/supplyitems/searchfilter`,{
            method: "POST",
            headers: {
                "Authorization": `Token ${localStorage.getItem("supply_us_id")}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(searchTerm)

        })
            .then(res => res.json())
            .then(setSupplyItems)
    }

    const addSupplyItem = supplyItem => {
        return fetch("http://localhost:8000/supplyitems", {
            method: "POST",
            headers: {
                "Authorization": `Token ${localStorage.getItem("supply_us_id")}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(supplyItem)
        })
            .then(getSupplyItems)
    }
    const updateItem = item => {
        console.log(item)
        return fetch(`http://localhost:8000/supplyitems/${item.id}`, {
            method: "PUT",
            headers: {
                "Authorization": `Token ${localStorage.getItem("supply_us_id")}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(item)
        })
            .then(getSupplyItems)
    }

    return (
        <SupplyItemContext.Provider value={{
            SupplyItems, SupplyItemsProvider, getSupplyItems, searchTerms, setSearchTerms, addSupplyItem, updateItem, getFilterbyTypeSupplyItems, getFilterbyNameSupplyItems
        }}>
            {props.children}
        </SupplyItemContext.Provider>
    )
}