import React, { useContext, useState } from "react"
import { Form, Col, Row, Button } from "react-bootstrap"

export const Admin = () => {
    

    return (
        <>
            <div className="h1Background">
            <h1 >Add a Class</h1>
            </div>
            <div className="addClassCardContainer">
                <div className="addClassCard">
                <form className="TeacherClassForm">
                    <h2 className="TeacherClassFormLabel">Class name</h2>
                    
                    
                </form>
                </div>
                <div className="AddClassPicture">
                    <img id="classPicture" src="https://images.unsplash.com/photo-1604134967494-8a9ed3adea0d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80"></img>
                </div>
            </div>
        </>
    )
}