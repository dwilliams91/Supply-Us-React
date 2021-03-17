import React, { useContext, useEffect, useState } from "react"
import { TeacherContext } from "../DataProviders/TeacherDataProvider"
import { ClassListContext } from "../DataProviders/ClassListProvider"
import { UserClassesContext } from "../DataProviders/UserClassesProvider"
import { CustomerClassCards } from "./CustomerClassCards"
import "./Customer.css"
import { Button } from 'react-bootstrap';

export const CustomerForm = (props) => {
    // get all the things you will need
    const { Teachers, getTeachers } = useContext(TeacherContext)
    const { classLists, getClassLists, joinClass } = useContext(ClassListContext)
    const { userClasses, getUserClasses, addUserClasses } = useContext(UserClassesContext)
   
    const [Teacher, setTeacher] = useState(0)
    const [Class, setClass] = useState(0)
    const [filteredClasses, setFilteredClasses] = useState([])
    const [myClasses, setMyClasses] = useState([])

    // initial render
    useEffect(() => {
        
        getClassLists()

    }, [])
    //    if the dropdown menus change, change the state
   
    const SecondHandleFieldChange = (event) => {
        setClass(event.target.value)
    }
   
const saveClasses = () => {
    // get the user from local storage
    const user = parseInt(localStorage.getItem("app_user_id"))
    // console.log(Class)
    // create an item on the join table with the ID of user and the classListId of the selected class
    const newItem = {
        classListId: parseInt(Class)

    }
    if (userClasses.find(singleClass => singleClass.userId === newItem.userId && singleClass.classListId === newItem.classListId)) {
        window.alert("You already have this class")
    } else {
        joinClass(newItem)
        setClass(0)
    }
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
                {classLists.filter(oneClass=>oneClass.joined==true).map(singleClass => {
                    return <CustomerClassCards key={singleClass.id} myClass={singleClass} props={props}></CustomerClassCards>
                })}
            </div>}
            <Button onClick={event => { displayAllLists() }}>Display All Classes</Button>
        </div>
    </>
)
}