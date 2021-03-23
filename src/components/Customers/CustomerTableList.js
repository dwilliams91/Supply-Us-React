import React, { useContext, useEffect, useState } from "react"
import { ClassListSupplyItemContext } from "../DataProviders/ClassListSupplyItemProvider"
import { ClassListContext } from "../DataProviders/ClassListProvider"

import { CustomerTable } from "./CustomerTable"
import "./Customer.css"
import { Table } from "react-bootstrap"

export const CustomerTableList = () => {
    const { classLists } = useContext(ClassListContext)

    const { combinedClassListSupplyItem, getCombineClassListSupplyItem } = useContext(ClassListSupplyItemContext)
    const [alphabetizedCombinedList, setAlphabetizedCombinedList]= useState([])
    useEffect(() => {
        getCombineClassListSupplyItem()
        
    }, [classLists])

    useEffect(() => {
        setAlphabetizedCombinedList(combinedClassListSupplyItem.sort(function(a, b){
            if(a.supplyItemName < b.supplyItemName) { return -1; }
            if(a.supplyItemName > b.supplyItemName) { return 1; }
            return 0;
        }))
        
    }, [combinedClassListSupplyItem])


    return (
        <>
     
            <div className="CustomerTable">
                <h2>Your Supply List</h2>
                <Table>
                    <thead>
                        <tr>
                            <th>Item</th>
                            <th>Number</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    
                    {alphabetizedCombinedList && <tbody>
                        {alphabetizedCombinedList.map((singleItem, index) => <CustomerTable key={"singleItem"+index} myItem={singleItem} ></CustomerTable>)}

                    </tbody>}

                </Table>
                {/* <button onClick={event=>addLists(userClasses, classListSupplyItem)}> display the list of all my items</button> */}
            </div>
        </>
    )
}