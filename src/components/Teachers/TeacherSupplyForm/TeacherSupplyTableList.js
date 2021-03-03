import React, { useContext, useEffect } from "react"
import { ClassListSupplyItemContext } from "../../DataProviders/ClassListSupplyItemProvider"
import { TeacherSupplyTable } from "./TeacherSupplyTable"
import {Table} from "react-bootstrap"
export const TeacherSupplyTableList = (props) => {
    const { classListSupplyItem, getClassListSupplyItem } = useContext(ClassListSupplyItemContext)
    const classId=props.location.state.chosenClass.id

    useEffect(() => {
        getClassListSupplyItem()
    }, [])
    
    useEffect(()=>{
        getClassListSupplyItem()
    },[])

    return (
        <>
        {/* {console.log("classId",classId)} */}
        <div className="TeacherSupplyTableContainer">
            <Table striped bordered hover className="TeacherSupplyTable">
                
                <thead>
                    <tr>
                        <th className="TeacherTableHead">
                            Item
                        </th>
                        <th className="TeacherTableHead">
                            Number
                        </th>
                        <th className="TeacherTableHead">
                            Description
                        </th>
                        <th className="TeacherTableHead">

                        </th>
                    </tr>
                </thead>
                <tbody>
                    {/* {findClass()} */}
                    {classListSupplyItem.filter(singleItem=>singleItem.classList.id===parseInt(classId)).map(singleItem=>{
                        return <TeacherSupplyTable key={singleItem.id} myItem={singleItem}/>
                    })}

                </tbody>

            </Table>
            </div>
        </>
    )

}