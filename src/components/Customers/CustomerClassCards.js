import React, { useContext } from "react"
import { Link } from "react-router-dom"
import { UserClassesContext } from "../DataProviders/UserClassesProvider"
import { Button } from "react-bootstrap"

export const CustomerClassCards = ({ myClass, props }) => {
    const { deleteUserClasses } = useContext(UserClassesContext)

    return (
        <div className="CustomerClassesCard">
            <p>{myClass.classList.name}</p>
            <Button variant="secondary" size="sm" onClick={() =>

                deleteUserClasses(myClass.id).then(() => {
                    if (props.history.location.pathname !== "/customers") {
                        props.history.replace({pathname:`/customers`})
                    } else {
                        props.history.push("./customers")
                    }
                    
                })}>Delete</Button>
            {/* {    console.log("myclass",myClass.classList.name)
} */}
            <Link to={{
                pathname: `/customers/class${myClass.id}`,
                state: {
                    chosenClassName: myClass.classList.name,
                    chosenClass: myClass
                }
            }}>
                <Button variant="success" size="sm">See only {myClass.classList.name}</Button>
            </Link>
        </div>
    )
}