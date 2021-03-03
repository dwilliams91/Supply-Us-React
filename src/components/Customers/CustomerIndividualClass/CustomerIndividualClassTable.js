import React, { useContext } from "react"
import { useEffect } from "react"
import { useState } from "react"
import { useRef } from "react"

export const CustomerIndividualClassTable=({myItem})=>{
    const [PackageString, setPackageString]=useState("")
    useEffect(()=>{
        if (myItem.supplyItem.packaging){
            setPackageString(" packs")
        }
    },[])
    // console.log(myItem.supplyItem.packaging)
    return(
        <>
        <tr className="TableRow">
            <td className="tableColumn Name">
                {myItem.supplyItem.name}
            </td>
            <td className="tableColumn Number">
               {myItem.number} {PackageString}
            </td>
            <td className="tableColumn Description">
               {myItem.description}
            </td>
            
        </tr>
        </>
    )
}