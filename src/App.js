import { Route, Redirect } from "react-router-dom"
import React, { useEffect } from "react"
import { Login } from "./components/auth/Login"
import { Register } from "./components/auth/Register"
import { TeacherNavBar } from "./components/Teachers/TeacherNavBar/TeacherNavBar";
import { TeacherApplicationView } from "./components/Teachers/TeacherApplicationView";
import { CustomerApplicationView } from "./components/Customers/CustomerApplicationView";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Row } from "react-bootstrap"


import "./App.css"
import { UserTypeProvider } from "./components/DataProviders/UserTypeDataProvider";
function App() {
const user_type=localStorage.getItem("is_staff")
useEffect(()=>{

},[user_type])
  return (
    <>
    
      <header>
        <h1>Supply Us</h1>
        <div className="logo"></div>
      </header>

      <Route path="/login" render={props => <Login {...props} />} />
    
        <Route path="/register" render={props => <Register {...props} />} />
      

      <Route render={() => {
        // The user id is saved under the key app_user_id in local Storage. Change below if needed!
        
        if (localStorage.getItem("supply_us_id")) {
          
          if (localStorage.getItem("is_staff")) {
            return (
              <>

                <Route render={props => <TeacherNavBar {...props} />} />
                <Route render={props => <TeacherApplicationView {...props} />} />
              </>
            )
          }
          else {
            return (
              <>
                <Route render={props => <CustomerApplicationView {...props} />} />
              </>
            )
          }
        }
        
        else {
          return <Redirect to="/login" />
        }
      }} />

      

      <div className="footer">
        <Row>
          <Col className="logoFooter">
            <p>Sponsored by:</p>
            <p>The Nashville Software School</p>
            <p>© 2020 Dwillz Inc | privacy</p>
          </Col>
          <Col>
            <h4> Contact us</h4>
            <p> Phone: 1800-867-5309</p>
            <p> Email: supplyUs@supplyUs.com</p>
          </Col>
          <Col>

          </Col>
        </Row>
      </div>

    </>
  );
}

export default App;
