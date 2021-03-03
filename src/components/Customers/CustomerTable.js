import React, { useEffect, useState } from "react"
import { ItemDetails } from "./ItemDetails";
import "./Customer.css"
import { Button, Collapse } from "react-bootstrap"
// this is to toggle the display
export const CustomerTable = ({ myItem, visibility }) => {
    const [packageType, setPackageType] = useState("")
    const [open, setOpen]= useState(visibility)
    console.log(visibility)


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
                    {myItem.name}
                </td>
                <td colSpan="1" className="tableColumn Number">
                    {myItem.number} {packageType}
                </td>
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
                        {myItem.descriptions.map(singleDescription => <li key={singleDescription.id}><strong> {singleDescription.singleListNumber}</strong> {singleDescription.description} for <strong>{singleDescription.className}</strong> </li>)}
                    </ul>
                        </div>
                    </Collapse>
                    {/* <ItemDetails visbilityCheck={visibility} myItem={myItem} /> */}
                </td>

            </tr>
        </>
    )
}