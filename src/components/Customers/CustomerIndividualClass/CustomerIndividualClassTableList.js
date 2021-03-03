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
    const classId=props.location.state.chosenClass.classListId
    const MyClass=props.location.state.chosenClassName
    // console.log("my class is", MyClass)
    
    useEffect(() => {
        // setClassId(props.location.state.chosenClass.classListId)
        getClassLists().then(getClassListSupplyItem)
    }, [])

    useEffect(()=>{
        const onlyMyItems=classListSupplyItem.filter(singleItem=>singleItem.classList.id===parseInt(classId))
        if (onlyMyItems){
        onlyMyItems.sort(function(a, b) {
            let firstItem = a.supplyItem.name.toUpperCase();
            let secondItem = b.supplyItem.name.toUpperCase();
            // if the first item is smaller, put it before. If the first item is bigger, put it after. 
            return (firstItem < secondItem) ? -1 : (firstItem > secondItem) ? 1 : 0;
        });
    }
        setListToDisplay(onlyMyItems)
    },[classListSupplyItem, classId])

    return(
        <>
        {/* {console.log(thisSingleClass)} */}
        <div className="CustomerTable">
        <h2>{MyClass}</h2>
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
                    
                    {listToDisplay.map(singleItem=>{
                        return <CustomerIndividualClassTable key={singleItem.id} myItem={singleItem}/>
                    })}

                </tbody>

            </Table>
            </div>
        </>
        
    )
}