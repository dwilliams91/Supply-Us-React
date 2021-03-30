import React, { useRef, useState } from "react"
import { Link, useHistory } from "react-router-dom"
import "./Login.css"

export const Register = (props) => {
    const firstName = useRef()
    const lastName = useRef()
    const email = useRef()
    const password = useRef()
    const verifyPassword = useRef()
    const passwordDialog = useRef()
    const history = useHistory()
    const teacherCode= useRef()
    const [type, setType]=useState(0)

    const handleRegister = (e) => {
        e.preventDefault()

        if (password.current.value === verifyPassword.current.value) {
            const newUser = {
                "first_name": firstName.current.value,
                "last_name": lastName.current.value,
                "email": email.current.value,
                "username": email.current.value,
                "password": password.current.value,
                "created_on": Date.now(),
                "active": true,
                "date_joined": Date.now(),
                "is_staff": type
            }
            return fetch("http://localhost:8000/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify(newUser)
            })
                .then(res => res.json())
                .then(res => {
                    if ("token" in res) {
                    // localStorage.setItem("supply_us_id", res.token)
                    // localStorage.setItem("is_staff", res.is_staff)
                    history.push("/login")
                    }
                })
        } else {
            passwordDialog.current.showModal()
        }
    }

    const changeType=(event)=>{
        if (event.target.value=="0"){
            setType(0)
        }
        else {
            setType(1)
        }
        
    }

    const teacherCodeField=()=>{
        return(
            <fieldset>
                    <label>Teacher Activation Code </label>
                    <p className="TeacherWarning">(for immediate access. If you do not have a code, you will need to wait for your account to be approved)</p>
                    <input ref={teacherCode} type="text" name="teacherCode" className="form-control" placeholder="" />
                </fieldset>
        )
    }
     
    

    return (
        <main style={{ textAlign: "center" }}>
            
            <dialog className="dialog dialog--password" ref={passwordDialog}>
                <div>Passwords do not match</div>
                <button className="button--close" onClick={e => passwordDialog.current.close()}>Close</button>
            </dialog>

            <form className="form--login" onSubmit={handleRegister}>
                <h1 className="h3 mb-3 font-weight-normal">Please Register for Application Name</h1>
                <div className="registerContainer">
                    <div className="registerCard">
                <fieldset>
                    <label htmlFor="firstName"> First Name </label>
                    <input ref={firstName} type="text" name="firstName" className="form-control" placeholder="First name" required autoFocus />
                </fieldset>
                <fieldset>
                    <label htmlFor="lastName"> Last Name </label>
                    <input ref={lastName} type="text" name="lastName" className="form-control" placeholder="Last name" required />
                </fieldset>
                <fieldset>
                    <label htmlFor="inputEmail"> Email address </label>
                    <input ref={email} type="email" name="email" className="form-control" placeholder="Email address" required />
                </fieldset>
                <fieldset>
                    <label htmlFor="inputPassword"> Password </label>
                    <input ref={password} type="password" name="password" className="form-control" placeholder="Password" required />
                </fieldset>
                <fieldset>
                    <label htmlFor="verifyPassword"> Verify Password </label>
                    <input ref={verifyPassword} type="password" name="verifyPassword" className="form-control" placeholder="Verify password" required />
                </fieldset>
                <fieldset>
                    <label>Select Type</label>
                    <select value={type} onChange={changeType}>
                        <option  value="0">Parent</option>
                        <option  value="1"> Teacher </option>
                    </select>
                </fieldset>
                <div>
                    {type==1 ? teacherCodeField():<></>}
                </div>
                <fieldset>
                    <button type="submit"> Sign in </button>
                </fieldset>
                </div>
                </div>
            </form>
            <section className="link--register">
                Already registered? <Link to="/login">Login</Link>
            </section>
        </main>
    )
}

