import React from "react"
import { Link } from "react-router-dom"
import "./TeacherNavBar.css"
import { Navbar, Nav, Row, Col } from "react-bootstrap"
export const TeacherNavBar = (props) => {

    return (
        <>
            <Navbar>
                <Nav className="NavBarFlex">
                    <Row>
                        <Col lg="auto">
                        <Link className="navbar__link" to="/teachers">My Classes</Link>
                        </Col>

                        <Col lg="auto">
                        <Link className="navbar__link" to="/teachers/addClass">Add a Class</Link>
                        </Col>

                        <Col lg="auto">
                        <Link className="navbar__link" to="/teachers/addItem">Add an Item To the Database</Link>
                        </Col>
                        </Row>
                </Nav>
            </Navbar>



        </>
    )
}