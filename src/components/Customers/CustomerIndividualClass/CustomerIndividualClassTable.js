import React from "react"


export const CustomerIndividualClassTable=({myItem})=>{
    
    // console.log(myItem.supplyItem.packaging)
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
            
        </tr>
        </>
    )
}