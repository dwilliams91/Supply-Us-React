import React, { useContext } from "react"
import { ClassListSupplyItemContext } from "../../DataProviders/ClassListSupplyItemProvider"
import { TeacherSupplyTableList } from "./TeacherSupplyTableList"
import {Button} from "react-bootstrap"
export const TeacherSupplyTable=({myItem})=>{
    const {deleteItem, getClassListSupplyItem} = useContext(ClassListSupplyItemContext)  
    return(
        <>
        <tr className="TableRow">
            <td className="tableColumn Name">
                {myItem.supplyItem.name}
            </td>
            <td className="tableColumn Number">
               {myItem.number}
            </td>
            <td className="tableColumn Description">
               {myItem.description}
            </td>
            <td className="tableColumn DeleteButton">
               <Button  variant="outline-primary" size="sm"onClick={ ()=>{

                   deleteItem(myItem.id).then(()=>getClassListSupplyItem)
               }
               }
               >delete</Button>
            </td>
        </tr>
        </>
    )
}