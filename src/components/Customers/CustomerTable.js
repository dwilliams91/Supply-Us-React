import React, { useEffect, useState } from "react"
import { ItemDetails } from "./ItemDetails";
import "./Customer.css"
import { Button, Collapse } from "react-bootstrap"
// this is to toggle the display
export const CustomerTable = ({ myItem, visibility }) => {
    const [packageType, setPackageType] = useState("")
    const [open, setOpen]= useState(visibility)
    console.log(myItem)


    useEffect(() => {
        if (myItem.packaging) {
            setPackageType(" packs")
        }

    }, [])
   useEffect(()=>{
    setOpen(visibility)
   },[visibility])

   const handleStateChange=()=>{
       setOpen(!open)
   }

    return (
        <>

            <tr className="TableRow">
                <td colSpan="1" className="tableColumn Name">
                    {myItem.supplyItemName}
                
                </td>
                
                {myItem.packaging.map(singleItem=>
                <tr>
                    <td colSpan="1" className="tableColumn Number">
                    <strong>{singleItem.number}</strong> <em>{singleItem.type}</em>
                </td>
                </tr>)
                }
                
                
                <td colSpan="6" className="tableColumn DeleteButton">
                    
                    <Button variant="outline-primary" size="sm"
                        onClick={() => handleStateChange()}
                        aria-controls="collapse"
                        aria-expanded={open}
                    >
                        see details for {myItem.name}
                    </Button>
                    <Collapse in={open}>
                        <div id="example-fade-text">
                        <ul>
                    </ul>
                        </div>
                    </Collapse>
                    {/* <ItemDetails visbilityCheck={visibility} myItem={myItem} /> */}
                </td>

            </tr>
        </>
    )
}