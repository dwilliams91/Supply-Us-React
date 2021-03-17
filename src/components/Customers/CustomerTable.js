import React, { useEffect, useState } from "react"
import { ItemDetails } from "./ItemDetails";
import "./Customer.css"
import { Button, Collapse } from "react-bootstrap"
// this is to toggle the display
export const CustomerTable = ({ myItem, visibility }) => {
    const [packageType, setPackageType] = useState("")
    // const [open, setOpen] = useState(visibility)
    console.log(myItem.packaging[0].instance[0].description)
    console.log(myItem.packaging.map(singlePackageType => singlePackageType.instance.map(singleInstance => singleInstance.description)))

    useEffect(() => {
        if (myItem.packaging) {
            setPackageType(" packs")
        }

    }, [])
    // useEffect(() => {
    //     setOpen(visibility)
    // }, [visibility])

    // const handleStateChange = () => {
    //     setOpen(!open)
    // }

    return (
        <>

            <tr className="TableRow">
                <td colSpan="1" className="tableColumn Name">
                    {myItem.supplyItemName}

                </td>

                {myItem.packaging.map(singleItem =>
                    <tr colSpan="2">
                        
                        <td >
                            <strong>{singleItem.number}</strong> <em>{singleItem.type}</em>
                        </td>
                        <td>
                            {singleItem.instance.map(singleInstance=><p>{singleInstance.description} for {singleInstance.className}</p>)}
                        </td>
                    </tr>)
                }


                <td colSpan="6" className="tableColumn DeleteButton">

                    <Collapse>
                        <div id="example-fade-text">
                            <ul>
                                {myItem.packaging.map(singlePackageType=>singlePackageType).map(singleInstance=><li>{singleInstance.description}</li>)}
                            </ul>
                        </div>
                    </Collapse>
                    {/* <ItemDetails visbilityCheck={visibility} myItem={myItem} /> */}
                </td>

            </tr>
        </>
    )
}