import React from "react"
import { Route } from "react-router-dom"
import { TeacherSupplyForm } from "./TeacherSupplyForm/TeacherSupplyForm"
import { TeacherSupplyTableList } from "./TeacherSupplyForm/TeacherSupplyTableList"
import "../Teachers/TeacherSupplyForm/TeacherSupply.css"

export const TeacherSupply = (props) => {
    const className = props.location.state.chosenClassName


    return (
        <>
        <div className="h1Background">
            <h1 >{className}</h1>
            </div>
            <div className="TeacherSupplyContainer">
                <Route path="/teachers/class:ClassListId(\d+)" render={
                    props => <TeacherSupplyForm {...props} />
                } />
                <Route path="/teachers/class:ClassListId(\d+)" render={
                    props => <TeacherSupplyTableList {...props} />
                } />
            </div>
        </>
    )

}