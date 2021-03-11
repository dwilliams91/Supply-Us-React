import React, { useContext, useEffect } from "react"
import { ClassListSupplyItemContext } from "../../DataProviders/ClassListSupplyItemProvider"
import { TeacherSupplyTableList } from "./TeacherSupplyTableList"
import {Button} from "react-bootstrap"
export const TeacherSupplyTable=({myItem, classId})=>{
    const {classListSupplyItem, deleteItem, getClassListSupplyItem} = useContext(ClassListSupplyItemContext)
    // Here
    useEffect(()=>{
        console.log("state changed")
    },[classListSupplyItem])  
    return(
        <>
        <tr className="TableRow">
            <td className="tableColumn Name">
                {myItem.supply_item.name}
            </td>
            <td className="tableColumn Number">
               {myItem.number}
            </td>
            <td className="tableColumn Description">
               {myItem.description}
            </td>
            <td className="tableColumn DeleteButton">
               <Button  variant="outline-primary" size="sm"onClick={ ()=>{
                   deleteItem(myItem.id, classId)
               }
               }
               >delete</Button>
            </td>
        </tr>
        </>
    )
}