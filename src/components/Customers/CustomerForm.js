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
    const { classLists, getClassLists } = useContext(ClassListContext)
    const { userClasses, getUserClasses, addUserClasses } = useContext(UserClassesContext)

    const [Teacher, setTeacher] = useState(0)
    const [Class, setClass] = useState(0)
    const [filteredClasses, setFilteredClasses] = useState([])
    const [myClasses, setMyClasses] = useState([])

    // initial render
    useEffect(() => {
        getTeachers()
            .then(getClassLists)
            .then(getUserClasses)

    }, [])
    //    if the dropdown menus change, change the state
    const FirstHandleFieldChange = (event) => {
        setTeacher(event.target.value)
    }
    const SecondHandleFieldChange = (event) => {
        setClass(event.target.value)
    }
    // this changes the second dropdown menu to match only the classes of the selected teacher
    useEffect(() => {
        const selectTeacherParsed = parseInt(Teacher)
        // finalArray.sort(function(a, b) {
        //     let firstItem = a.name.toUpperCase();
        //     let secondItem = b.name.toUpperCase();
        //     // if the first item is smaller, put it before. If the first item is bigger, put it after. 
        //     return (firstItem < secondItem) ? -1 : (firstItem > secondItem) ? 1 : 0;
        // });
        // // console.log(finalArray)

        // setFinalAddedArray(finalArray)
        // }


        if (selectTeacherParsed === 0) {
            classLists.sort(function (a, b) {
                let firstItem = a.name.toUpperCase();
                let secondItem = b.name.toUpperCase();
                // if the first item is smaller, put it before. If the first item is bigger, put it after. 
                return (firstItem < secondItem) ? -1 : (firstItem > secondItem) ? 1 : 0;
            });
            // console.log(finalArray)

            setFilteredClasses(classLists)
        }
     else {
        setFilteredClasses(classLists.filter(e => e.userId === selectTeacherParsed))
}
    }, [Teacher, classLists])

// this adds the class
const saveClasses = () => {
    // get the user from local storage
    const user = parseInt(localStorage.getItem("app_user_id"))
    // console.log(Class)
    // create an item on the join table with the ID of user and the classListId of the selected class
    const newItem = {
        userId: user,
        classListId: parseInt(Class)

    }
    if (userClasses.find(singleClass => singleClass.userId === newItem.userId && singleClass.classListId === newItem.classListId)) {
        window.alert("You already have this class")
    } else {
        addUserClasses(newItem)
    }
}
// this renders the table of all someones classes if they had been looking at individual class lists
const displayAllLists = () => {
    props.history.push("/customers")

}
// if the classes you are a part of change, then the total table will re-render. 
useEffect(() => {
    const user = parseInt(localStorage.getItem("app_user_id"))
    setMyClasses(userClasses.filter(e => e.userId === user))
}, [userClasses])
return (
    <>

        <div className="CustomerForm">
            <h2>Find Your Classes</h2>
            <form>
                <fieldset>
                    {/* <label>Select A Teacher</label> */}
                    {/* <select value={Teacher} id="TeacherName" className="form-control" onChange={FirstHandleFieldChange}>
                            <option value="0">Select Teacher</option>
                            {Teachers.map(e => (
                                <option key={e.id} value={e.id}>
                                    {e.name}
                                </option>
                            ))}
                        </select> */}
                </fieldset>
                <fieldset>
                    <label>Add a Class to Your List</label>
                    <select id="ClassName" className="form-control" onChange={SecondHandleFieldChange} >
                        <option value="0">Select Class</option>
                        {filteredClasses.map(e => (
                            <option key={e.id} value={e.id}>
                                {e.name}
                            </option>
                        ))}
                    </select>
                </fieldset>
                <Button type="submit" onClick={event => {
                    event.preventDefault()
                    saveClasses()
                }}> Add Class</Button>
            </form>
            <h3>Your Classes</h3>
            <div className="myClassesContainer">
                {myClasses.map(singleClass => {
                    return <CustomerClassCards key={singleClass.id} myClass={singleClass} props={props}></CustomerClassCards>
                })}
            </div>
            <Button onClick={event => { displayAllLists() }}>Display All Classes</Button>
        </div>
    </>
)
}