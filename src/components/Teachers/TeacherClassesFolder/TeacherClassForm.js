import React, { useContext, useRef } from "react"
import { ClassListContext } from "../../DataProviders/ClassListProvider"
import {Button} from "react-bootstrap"
export const TeacherClassForm = (props) => {
    // get the add class function
    const { addClassList } = useContext(ClassListContext)

    // set user to logged in user and set the name so it can be used again
    const name = useRef(null)
    const user = parseInt(localStorage.getItem("app_user_id"))

    // creates a new object with the name the person entered in the form. Dispatches it to the json
    const constructNewClass = () => {
        const newClass =
        {
            name: name.current.value,
            userId: user
        }
        addClassList(newClass).then(() => props.history.push("/teachers"))
    }


    return (
        <>

            <div className="h1Background">
            <h1 >Add a Class</h1>
            </div>
            <div className="addClassCardContainer">
                <div className="addClassCard">
                <form className="TeacherClassForm">
                    <h2 className="TeacherClassFormLabel">Class name</h2>
                    <input type="text" id="AddingAClass" ref={name} required autoFocus className="form-control" placeholder="Name of the class" />
                    <Button type="submit" onClick={evt => {
                        evt.preventDefault() // Prevent browser from submitting the form
                        constructNewClass()
                    }}> Save </Button>
                </form>
                </div>
                <div className="AddClassPicture">
                    <img id="classPicture" src="https://images.unsplash.com/photo-1604134967494-8a9ed3adea0d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80"></img>
                </div>
            </div>
        </>
    )

}