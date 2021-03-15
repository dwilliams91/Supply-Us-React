import React, { useContext } from "react"
import { Link } from "react-router-dom"
import { UserClassesContext } from "../DataProviders/UserClassesProvider"
import { Button } from "react-bootstrap"

export const CustomerClassCards = ({ myClass, props }) => {
    const { deleteUserClasses } = useContext(UserClassesContext)
    console.log(myClass)
    return (
        <div className="CustomerClassesCard">
            <p>{myClass.class_name}</p>
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
                    chosenClassName: myClass.class_name,
                    chosenClass: myClass
                }
            }}>
                <Button variant="success" size="sm">See only {myClass.class_name}</Button>
            </Link>
        </div>
    )
}