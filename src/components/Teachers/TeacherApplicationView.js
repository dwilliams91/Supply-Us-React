import React from "react"
import { Route } from "react-router-dom"
import { ClassListProvider } from "../DataProviders/ClassListProvider"
import { TeacherClasses } from "./TeacherClassesFolder/TeacherClasses"
import { TeacherClassForm } from "./TeacherClassesFolder/TeacherClassForm"
import { TeacherSupplyForm } from "./TeacherSupplyForm/TeacherSupplyForm"
import { SupplyItemsProvider } from "../DataProviders/SupplyItemProvider"
import { SupplyTypeProvider } from "../DataProviders/SupplyTypeProvider"
import { ClassListSupplyItemProvider } from "../DataProviders/ClassListSupplyItemProvider"
import { TeacherSupplyTableList } from "./TeacherSupplyForm/TeacherSupplyTableList"
import { Logout } from "../auth/Logout"
import "../Teachers/TeacherSupplyForm/TeacherSupply.css"
import { TeacherAddItem } from "./TeacherAddItem/TeacherAddItem"
import {TeacherSupply} from "./TeacherSupply"

export const TeacherApplicationView = (props) => {
    const userType=parseInt(localStorage.getItem("userType"))
    console.log("userType", userType)
    // if (userType ===2){
    //     props.history.push("/customers")
    // }
    return (
        <>
        <div className="teacherBackground">
        <div className="flexLogoutButton">
            <ClassListSupplyItemProvider>
                <SupplyTypeProvider>
                    <SupplyItemsProvider>
                        <ClassListProvider>
                            <Route exact path="/teachers">
                                <TeacherClasses></TeacherClasses>
                            </Route>
                        </ClassListProvider>
                    </SupplyItemsProvider>
                </SupplyTypeProvider>
            </ClassListSupplyItemProvider>

            <ClassListProvider>
                <Route exact path="/teachers/addClass"  render={props=><TeacherClassForm {...props}/>
                }/>
            </ClassListProvider>
            
            <ClassListProvider>
            <ClassListSupplyItemProvider>
                <SupplyTypeProvider>
                    <SupplyItemsProvider>
                    <Route path="/teachers/class:ClassListId(\d+)" render={
                                props => <TeacherSupply {...props} />
                            } />
                            
                    </SupplyItemsProvider>
                </SupplyTypeProvider>
            </ClassListSupplyItemProvider>
            </ClassListProvider>
            
            <SupplyTypeProvider>
                <SupplyItemsProvider>
            <Route path="/teachers/addItem" render={
                props => <TeacherAddItem {...props}/>
            }/>
            </SupplyItemsProvider>
            </SupplyTypeProvider>
            <div className="LogoutButton">
            <Route render={props => <Logout {...props} />} />  
            </div> 
            </div>
            </div>
        </>

    )

}

