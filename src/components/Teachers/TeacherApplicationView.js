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
import { TeacherSupply } from "./TeacherSupply"
import { PackageTypeProvider } from "../DataProviders/PackageTypeProvider"
import {Admin} from "./admin"
import { AdminProvider } from "../DataProviders/adminProvider"

export const TeacherApplicationView = (props) => {
    
    return (
        <>
            <div className="teacherBackground">
                <div className="flexLogoutButton">
                    <PackageTypeProvider>
                        <ClassListSupplyItemProvider>
                            <SupplyTypeProvider>
                                <SupplyItemsProvider>
                                    <ClassListProvider>
                                        <Route exact path="/teachers">
                                            <TeacherClasses></TeacherClasses>
                                        </Route>
                                        <Route exact path="/teachers/addClass" render={props => <TeacherClassForm {...props} />
                                        } />
                                        <Route exact path="/teachers/class:ClassListId(\d+)" render={
                                            props => <TeacherSupply {...props} />
                                        } />
                                        <Route exact path="/teachers/addItem" render={
                                            props => <TeacherAddItem {...props} />
                                        } />
                                        


                                    </ClassListProvider>
                                </SupplyItemsProvider>
                            </SupplyTypeProvider>
                        </ClassListSupplyItemProvider>
                    </PackageTypeProvider>
                    
                    <AdminProvider>
                    <Route exact path="/teachers/admin" render={
                        props => <Admin {...props} />
                    } />
                    </AdminProvider>
                    <div className="LogoutButton">
                        <Route render={props => <Logout {...props} />} />
                    </div>
                </div>
            </div>
        </>

    )

}

