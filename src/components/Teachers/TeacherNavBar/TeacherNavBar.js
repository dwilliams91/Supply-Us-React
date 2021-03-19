import React from "react"
import { Link } from "react-router-dom"
import "./TeacherNavBar.css"
import { Navbar, Nav, Row, Col } from "react-bootstrap"
export const TeacherNavBar = (props) => {
    let admin=localStorage.getItem("is_superuser")

    return (
        <>
        {admin==="true"? console.log("true"): console.log("not true")}
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
                        <Link className="navbar__link" to="/teachers/addItem">Add or Edit an Item the database</Link>
                        </Col>
                        <Col lg="auto">
                        {admin==="true" ? <Link className="navbar__link" to="/teachers/admin">admin</Link> : <></>}
                        </Col>
                        </Row>
                </Nav>
            </Navbar>



        </>
    )
}