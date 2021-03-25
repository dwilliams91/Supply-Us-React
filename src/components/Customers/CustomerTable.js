import React from "react"
import "./Customer.css"
// this is to toggle the display
export const CustomerTable = ({ myItem }) => {

    return (
        <>
            <tr>
                <td rowSpan={myItem.packaging.length+1}><strong>{myItem.supplyItemName}</strong></td>
            </tr>
            {myItem.packaging.map((singleItem, index) =>

                
                    <tr key={"singleItem" + index}>
                        <td><strong>{singleItem.number}</strong>- <em>{singleItem.type}</em></td>
                        <td>
                            <ul>
                                {singleItem.instance.map((singleInstance, index) => <li key={"singleInstance" + index}>{singleInstance.number} - {singleInstance.description} for <strong>{singleInstance.className}</strong></li>)}
                            </ul>
                        </td>
                    </tr>
                
            )
            }

        </>
    )
}

