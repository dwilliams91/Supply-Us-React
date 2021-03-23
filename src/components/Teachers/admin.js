import React, { useEffect, useContext, useState } from "react"
import {AdminContext} from "../DataProviders/adminProvider"

export const Admin = () => {
    const { users, getPendingTeachers, ApproveTeacher } = useContext(AdminContext)
    useEffect(() => {
        getPendingTeachers()
    }, [])

    const userCard=(singleUser)=>{
        return(
            <>
            <p>{singleUser.email}</p>
            <button onClick={() => approval(singleUser.email)}>approve</button>
            </>
        )

    }

    const approval=(email)=>{
        const emailObject={
            email:email
        }
        ApproveTeacher(emailObject)
        }

    return (
        <>
            <div className="h1Background">
            <h1 >Pending Teachers</h1>
            </div>
            <div className="addClassCardContainer">
                <div className="addClassCard">
                <form className="TeacherClassForm">
                    {users.map(singleUser=>
                    userCard(singleUser)
                    
                   )}
                    
                    
                </form>
                </div>
                <div className="AddClassPicture">
                    <img id="classPicture" src="https://images.unsplash.com/photo-1604134967494-8a9ed3adea0d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80"></img>
                </div>
            </div>
        </>
    )
}