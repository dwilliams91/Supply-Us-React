import React, {useContext} from "react"
import { Link } from "react-router-dom"
import { ClassListContext } from "../../DataProviders/ClassListProvider"
import {Button} from "react-bootstrap"

export const TeacherClass = ({myClass}) => {
    const {deleteClassList}=useContext(ClassListContext)
    
    return(
    <>
    <div className="classCard">
        <h3 className="ClassName">
            <Link to={{
                pathname:`/teachers/class${myClass.id}`,
                state:{
                chosenClassName:myClass.class_name,
                chosenClass:myClass
            }
                }}>
                { myClass.class_name }
            </Link>
        </h3>
        <Button variant="outline-primary" onClick={()=>deleteClassList(myClass.id)}>Delete</Button>
        </div>
        </>
)
            }
