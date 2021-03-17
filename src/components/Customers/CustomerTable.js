import React, { useEffect, useState } from "react"
import { ItemDetails } from "./ItemDetails";
import "./Customer.css"
import { Button, Collapse } from "react-bootstrap"
// this is to toggle the display
export const CustomerTable = ({ myItem, visibility }) => {

    

    return (
        <>
            <tr>
                <td rowSpan={myItem.packaging.length+1}><strong>{myItem.supplyItemName}</strong></td>
            </tr>
            {myItem.packaging.map((singleItem, index) =>

                
                    <tr key={"singleItem" + index}>
                        <td><strong>{singleItem.number}</strong> <em>{singleItem.type}</em></td>
                        <td>
                            <ul>
                                {singleItem.instance.map((singleInstance, index) => <li key={"singleInstance" + index}>{singleInstance.number} {singleInstance.description} for {singleInstance.className}</li>)}
                            </ul>
                        </td>
                    </tr>
                
            )
            }

        </>
    )
}

{/* <td >{myItem.supplyItemName}</td>

{myItem.packaging.map((singleItem, index) =>
    
    <tr key={"singleItem"+index}>
    <td><strong>{singleItem.number}</strong> <em>{singleItem.type}</em></td>
    <td>
        <ul>
            {singleItem.instance.map((singleInstance, index) => <li key={"singleInstance"+index}>{singleInstance.number} {singleInstance.description} for {singleInstance.className}</li>)}
        </ul>
    </td>
    </tr>
   
)
} */}




{/* <tr>
<td rowSpan={myItem.packaging.length} >{myItem.supplyItemName}</td>

    {myItem.packaging.map((singleItem, index) =>
        
        <>
        
        <td key={"singleItem"+index}><strong>{singleItem.number}</strong> <em>{singleItem.type}</em></td>
        <td>
            <ul>
                <li>put descriptions here</li>
            </ul>
        </td>
        </>
        
       
    )
}
</tr> */}