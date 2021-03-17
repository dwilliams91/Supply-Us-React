import React, { useEffect, useState } from "react"
import { ItemDetails } from "./ItemDetails";
import "./Customer.css"
import { Button, Collapse } from "react-bootstrap"
// this is to toggle the display
export const CustomerTable = ({ myItem, visibility }) => {
    


    return (
        <>

            <tr>
                <td colSpan="1">
                    {myItem.supplyItemName}
                </td>

                {myItem.packaging.map(singleItem =>
                    <tr>
                        <td colSpan="2">
                            <strong>{singleItem.number}</strong> <em>{singleItem.type}</em>
                        </td>
                        <td>
                            <ul>
                                {singleItem.instance.map(singleInstance => <li>{singleInstance.number} {singleInstance.description} for {singleInstance.className}</li>)}
                            </ul>
                        </td>
                    </tr>)
                }
            </tr>
        </>
    )
}