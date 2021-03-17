import React, {useContext, useEffect, useState} from "react"
import { ClassListContext } from "../../DataProviders/ClassListProvider"
import {ClassListSupplyItemContext} from "../../DataProviders/ClassListSupplyItemProvider"
import {CustomerIndividualClassTable} from "./CustomerIndividualClassTable"
import {Table} from "react-bootstrap"

export const CustomerIndividualClassTableList=(props)=>{
const {classListSupplyItem, getClassListSupplyItem}=useContext(ClassListSupplyItemContext)
const {classLists, getClassLists}=useContext(ClassListContext)
// const [classId, setClassId]=useState([])
const [listToDisplay, setListToDisplay]=useState([])
    const classId=parseInt(props.location.state.chosenClass.id)
    
    useEffect(() => {
        getClassListSupplyItem(classId)
    }, []) 

    

    return(
        <>
        {/* {console.log(thisSingleClass)} */}
        <div className="CustomerTable">
        <h2></h2>
            <Table striped bordered hover>
                
                <thead>
                    <tr>
                        <th>
                            Item
                        </th>
                        <th>
                            Number
                        </th>
                        <th>
                            Description
                        </th>
                    </tr>
                </thead>
                <tbody>
                    
                    {classListSupplyItem.map(singleItem=>{
                        return <CustomerIndividualClassTable key={singleItem.id} myItem={singleItem}/>
                    })}

                </tbody>

            </Table>
            </div>
        </>
        
    )
}