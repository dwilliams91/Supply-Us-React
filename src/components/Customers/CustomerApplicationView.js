import React from "react"
import { Route } from "react-router-dom"
import { Logout } from "../auth/Logout"
import { ClassListProvider } from "../DataProviders/ClassListProvider"
import { ClassListSupplyItemProvider } from "../DataProviders/ClassListSupplyItemProvider"
import { TeacherProvider } from "../DataProviders/TeacherDataProvider"
import { UserClassesProvider } from "../DataProviders/UserClassesProvider"
import { CustomerForm } from "./CustomerForm"
import { CustomerIndividualClassTableList } from "./CustomerIndividualClass/CustomerIndividualClassTableList"
import { CustomerTableList } from "./CustomerTableList"
import {Row, Col} from "react-bootstrap"

export const CustomerApplicationView = () => {
    return (
        <>
        <div className="customerBackground">
        <div className="CustomerContainer">
            <Row>
                
            <ClassListSupplyItemProvider>
                <TeacherProvider>
                    <ClassListProvider>
                        <UserClassesProvider>
                        {/* <Col size="1"></Col> */}
                                <Col lg="4">
                                <Route exact path="/customers" render={props => <CustomerForm {...props} />} />
                                </Col>

                                {/* <Col sm="1"></Col> */}

                                <Col lg="8">
                                <Route exact path="/customers" render={props => <CustomerTableList {...props} />} />
                                </Col>
                            {/* <Col></Col> */}
                            
                        </UserClassesProvider>
                    </ClassListProvider>
                </TeacherProvider>
            </ClassListSupplyItemProvider>
            </Row>
            <Row>
            <TeacherProvider>
                <ClassListSupplyItemProvider>
                    <ClassListProvider>
                        <UserClassesProvider>
                        <Col lg="4">
                        <Route path="/customers/class:ClassListId(\d+)" render={
                                props => <CustomerForm {...props} />
                            } />
                            </Col>
                            <Col lg="8">
                            <Route path="/customers/class:ClassListId(\d+)" render={
                                props => <CustomerIndividualClassTableList {...props} />
                            } />
                            </Col>
                           
                        </UserClassesProvider>
                    </ClassListProvider>
                </ClassListSupplyItemProvider>
            </TeacherProvider>
            </Row>
            </div>
            
            <Route render={props => <Logout {...props} />} />  
            </div>   

             </>

    )
}

