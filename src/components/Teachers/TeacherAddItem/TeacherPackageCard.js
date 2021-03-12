import React, { useContext } from "react"
import { Link } from "react-router-dom"
import { Button } from "react-bootstrap"

export const PackageCard = ({key, singleItem} ) => {
    
    return (
        
        <div>
            {console.log(key)}
            <p>{singleItem.type}</p>
          
            
        </div>
    )
}