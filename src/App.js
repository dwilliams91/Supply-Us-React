import { Route, Redirect } from "react-router-dom"
import React from "react"
import { Login } from "./components/auth/Login"
import { Register } from "./components/auth/Register"
import { TeacherNavBar } from "./components/Teachers/TeacherNavBar/TeacherNavBar";
import { TeacherApplicationView } from "./components/Teachers/TeacherApplicationView";
import { CustomerApplicationView } from "./components/Customers/CustomerApplicationView";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Col, Row} from "react-bootstrap"


import "./App.css"
import { UserTypeProvider } from "./components/DataProviders/UserTypeDataProvider";
function App() {

  return (
    <>
    <header>
      <h1>Supply Us</h1>
      <div className="logo"></div>
      {/* <img id="logo" src="./Pictures/Supply.png" alt="logo"/> */}
    </header>
      <Route render={() => {
        // The user id is saved under the key app_user_id in local Storage. Change below if needed!
        if (localStorage.getItem("app_user_id")) {
          if (parseInt(localStorage.getItem("userType")) === 1 ||  parseInt(localStorage.getItem("userType")) === 3){
            return (
              <>
                <Route render={props => <TeacherNavBar {...props} />} />
                <Route render={props => <TeacherApplicationView {...props} />} />
              </>
            )
          } else if (parseInt(localStorage.getItem("userType")) === 2) {
            return(
            <>
              {console.log("this is the customer")}
              <Route render={props => <CustomerApplicationView {...props} />} />
            </>
            )
          }
        } else {
          return <Redirect to="/login" />
        }
      }} />

      <Route path="/login" render={props => <Login {...props} />} />
      <UserTypeProvider>
      <Route path="/register" render={props => <Register {...props} />} />
      </UserTypeProvider>
    
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
