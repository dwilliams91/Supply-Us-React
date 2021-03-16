import React, { useContext, useEffect, useState } from "react"
import { ClassListSupplyItemContext } from "../DataProviders/ClassListSupplyItemProvider"
import { UserClassesContext } from "../DataProviders/UserClassesProvider"
import { CustomerTable } from "./CustomerTable"
import "./Customer.css"
import {Table, Button} from "react-bootstrap"

export const CustomerTableList=()=>{
    const {userClasses, getUserClasses}=useContext(UserClassesContext)

    const { combinedClassListSupplyItem, getCombineClassListSupplyItem }=useContext(ClassListSupplyItemContext)
    const [OnlyMyClasses,setOnlyMyClasses]=useState([])
    const [visibility, setVisibility]=useState(false)

    useEffect(()=>{
        getCombineClassListSupplyItem()
    },[])

    

    return (
        <>
        {/* {console.log(finalAddedArray)} */}
        <div className="CustomerTable">
        <h2>Your Supply List</h2>
        <Button onClick={() => setVisibility(!visibility)}>See all Details</Button>
        <Table striped bordered hover>
                <thead>
                    <tr>
                        <th colSpan="1" className="CustomerTableHead">
                            Item
                        </th>
                        <th colSpan="1"className="CustomerTableHead">
                            Number
                        </th>
                        <th  colSpan="6" className="CustomerTableHead">
                            Description
                        </th>
                    </tr>
                </thead>
                {combinedClassListSupplyItem&&<tbody>
                    {combinedClassListSupplyItem.map(singleItem=><CustomerTable key={singleItem.id} myItem={singleItem} visibility={visibility}></CustomerTable>)}

                </tbody>}

            </Table>
            {/* <button onClick={event=>addLists(userClasses, classListSupplyItem)}> display the list of all my items</button> */}
            </div>
        </>
    )
}