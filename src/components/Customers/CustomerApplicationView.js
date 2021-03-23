import React from "react"
import { Route } from "react-router-dom"
import { Logout } from "../auth/Logout"
import { ClassListProvider } from "../DataProviders/ClassListProvider"
import { ClassListSupplyItemProvider } from "../DataProviders/ClassListSupplyItemProvider"
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
                    <ClassListProvider>
                        
                                <Col lg="4">
                                <Route exact path="/customers" render={props => <CustomerForm {...props} />} />
                                </Col>

                                

                                <Col lg="8">
                                <Route exact path="/customers" render={props => <CustomerTableList {...props} />} />
                                </Col>
                            
                            
                    </ClassListProvider>
            </ClassListSupplyItemProvider>
            </Row>

            <Row>
                <ClassListSupplyItemProvider>
                    <ClassListProvider>
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
                        
                    </ClassListProvider>
                </ClassListSupplyItemProvider>
            </Row>
            </div>
            
            <Route render={props => <Logout {...props} />} />  
            </div>   

             </>

    )
}

