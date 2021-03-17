import React, { useContext, useEffect, useState } from "react"
import { ClassListSupplyItemContext } from "../DataProviders/ClassListSupplyItemProvider"
import { UserClassesContext } from "../DataProviders/UserClassesProvider"
import { ClassListContext } from "../DataProviders/ClassListProvider"

import { CustomerTable } from "./CustomerTable"
import "./Customer.css"
import { Table, Button } from "react-bootstrap"

export const CustomerTableList = () => {
    const { userClasses, getUserClasses } = useContext(UserClassesContext)
    const { classLists, getClassLists, joinClass } = useContext(ClassListContext)

    const { combinedClassListSupplyItem, getCombineClassListSupplyItem } = useContext(ClassListSupplyItemContext)
    const [OnlyMyClasses, setOnlyMyClasses] = useState([])
    const [visibility, setVisibility] = useState(false)

    useEffect(() => {
        getCombineClassListSupplyItem()
    }, [classLists])



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
                    
                    {combinedClassListSupplyItem && <tbody>
                        {combinedClassListSupplyItem.map((singleItem, index) => <CustomerTable key={"singleItem"+index} myItem={singleItem} visibility={visibility}></CustomerTable>)}

                    </tbody>}

                </Table>
                {/* <button onClick={event=>addLists(userClasses, classListSupplyItem)}> display the list of all my items</button> */}
            </div>
        </>
    )
}