import React, {useContext, useEffect} from "react"
import {ClassListSupplyItemContext} from "../../DataProviders/ClassListSupplyItemProvider"
import {CustomerIndividualClassTable} from "./CustomerIndividualClassTable"
import {Table} from "react-bootstrap"

export const CustomerIndividualClassTableList=(props)=>{
const {classListSupplyItem, getClassListSupplyItem}=useContext(ClassListSupplyItemContext)

const classId=parseInt(props.location.state.chosenClass.id)
const thisClassName=props.location.state.chosenClassName
    useEffect(() => {
        getClassListSupplyItem(classId)
    }, [classId]) 

    

    return(
        <>
                <div className="CustomerTable">
        <h2>{thisClassName}</h2>
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