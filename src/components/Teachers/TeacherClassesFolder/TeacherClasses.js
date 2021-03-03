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

    // Goes through all the classes and returns only the ones with the userId that is the same as the logged in user
    const filterClasses = (allClasses) => {
        const user = parseInt(localStorage.getItem("app_user_id"))
        const userType=parseInt(localStorage.getItem("userType"))
        if (userType===1){
            const myClasses = allClasses.filter(singleClass => parseInt(singleClass.userId) === user)
            return myClasses
        } else if (userType===3){
            const myClasses=allClasses
            return myClasses
        }
        // console.log(myClasses)
    }

    return (
        <>
            <div className="h1Background">
            <h1 >My Classes</h1>
            </div>
            <div className="classCardContainer">
                <div className="classCardFlex">
                    {filterClasses(classLists).map(singleClass => {
                        return <TeacherClass key={singleClass.id} myClass={singleClass}></TeacherClass>
                    })}
                </div>
            </div>
        </>
    )

}