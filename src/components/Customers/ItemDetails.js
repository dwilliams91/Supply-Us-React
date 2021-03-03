import React from "react"

export const ItemDetails=({visbilityCheck, myItem})=>{
    if(visbilityCheck){
        return (
            <ul>
                        {myItem.descriptions.map(singleDescription => <li key={singleDescription.id}><strong> {singleDescription.singleListNumber}</strong> {singleDescription.description} for <strong>{singleDescription.className}</strong> </li>)}
                    </ul>
        )
    } else {
        return(
         <></>
    )}
}