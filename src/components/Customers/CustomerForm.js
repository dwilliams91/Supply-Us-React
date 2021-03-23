import React, { useContext, useEffect, useState } from "react"
import { ClassListContext } from "../DataProviders/ClassListProvider"
import { CustomerClassCards } from "./CustomerClassCards"
import "./Customer.css"
import { Button } from 'react-bootstrap';

export const CustomerForm = (props) => {
    // get all the things you will need
    const { classLists, getClassLists, joinClass } = useContext(ClassListContext)
   
    const [Class, setClass] = useState(0)
   

    // initial render
    useEffect(() => {
        getClassLists()
    }, [])
    //    if the dropdown menus change, change the state
   
    const SecondHandleFieldChange = (event) => {
        setClass(event.target.value)
    }
   
const saveClasses = () => {
    
    // create an item on the join table with the ID of user and the classListId of the selected class
    const newItem = {
        classListId: parseInt(Class)

    }
    
        joinClass(newItem)
        setClass(0)
    
}
// this renders the table of all someones classes if they had been looking at individual class lists
const displayAllLists = () => {
    props.history.push("/customers")

}

return (
    <>
        <div className="CustomerForm">
            <h2>Find Your Classes</h2>
            <form>
                
                <fieldset>
                    <label>Add a Class to Your List</label>
                    <select id="ClassName" value={Class} className="form-control" onChange={SecondHandleFieldChange} >
                        <option value="0">Select Class</option>
                        {classLists.map(e => (
                            <option key={e.id} value={e.id}>
                                {e.class_name}
                            </option>
                        ))}
                    </select>
                </fieldset>
                <Button type="submit" onClick={event => {
                    event.preventDefault()
                    saveClasses()
                    setClass(0)
                }}> Add Class</Button>
            </form>
            <h3>Your Classes</h3>
            {classLists&&<div className="myClassesContainer">
                {classLists.filter(oneClass=>oneClass.joined===true).map(singleClass => {
                    return <CustomerClassCards key={singleClass.id} myClass={singleClass} props={props}></CustomerClassCards>
                })}
            </div>}
            <Button onClick={event => { displayAllLists() }}>Display All Classes</Button>
        </div>
    </>
)
}