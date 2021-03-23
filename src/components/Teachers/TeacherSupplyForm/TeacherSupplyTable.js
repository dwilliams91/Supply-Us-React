import React, { useContext } from "react"
import { ClassListSupplyItemContext } from "../../DataProviders/ClassListSupplyItemProvider"
import {Button} from "react-bootstrap"
export const TeacherSupplyTable=({myItem, classId})=>{
    const { deleteItem} = useContext(ClassListSupplyItemContext)
    
    return(
        <>
        <tr className="TableRow">
            <td className="tableColumn Name">
                {myItem.supply_item.name}
            </td>
            <td className="tableColumn Number">
               <strong>{myItem.number}</strong> {myItem.package_type.type}
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