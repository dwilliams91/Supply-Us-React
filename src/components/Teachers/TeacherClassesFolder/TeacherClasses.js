import React, { useContext, useEffect } from "react"
import { ClassListContext } from "../../DataProviders/ClassListProvider"
import { TeacherClass } from "./TeacherClass"
import "./TeacherClass.css"
export const TeacherClasses = () => {
    // gets the classes
    const { classLists, getClassLists } = useContext(ClassListContext)

    // listens for a change
    useEffect(() => {
        getClassLists()
    }, [])

    

    return (
        <>
            <div className="h1Background">
            <h1 >My Classes</h1>
            </div>
            <div className="classCardContainer">
                <div className="classCardFlex">
                    {classLists.map(singleClass => {
                        return <TeacherClass key={singleClass.id} myClass={singleClass}></TeacherClass>
                    })}
                </div>
            </div>
        </>
    )

}