import React, { useRef } from "react"
import { Link } from "react-router-dom";
import "./Login.css"


export const Login = props => {
    const email = useRef()
    const password = useRef()
    const existDialog = useRef()
    const passwordDialog = useRef()
    console.log("the app is running")
    const existingUserCheck = () => {
        // If your json-server URL is different, please change it below!
        return fetch(`http://localhost:8088/users?email=${email.current.value}`)
            .then(_ => _.json())
            .then(user => {
                console.log("hi")
                return user.length ? user[0] : false})
    }

    const handleLogin = (e) => {
        e.preventDefault()

        existingUserCheck()
            .then(exists => {
                console.log(exists)
                if (exists && exists.password === password.current.value) {
                    // The user id is saved under the key app_user_id in local Storage. Change below if needed!
                    localStorage.setItem("app_user_id", exists.id)
                    localStorage.setItem("userType", exists.userType)
                    if (exists.userType===1 || exists.userType===3){
                        props.history.push("/teachers")
                    } else {
                        props.history.push("/customers")
                    }
                } else if (exists && exists.password !== password.current.value) {
                    passwordDialog.current.showModal()
                } else if (!exists) {
                    existDialog.current.showModal()
                }
            })
    }

    return (
        <main className="container--login">
            <dialog className="dialog dialog--auth" ref={existDialog}>
                <div>User does not exist</div>
                <button className="button--close" onClick={e => existDialog.current.close()}>Close</button>
            </dialog>
            <dialog className="dialog dialog--password" ref={passwordDialog}>
                <div>Password does not match</div>
                <button className="button--close" onClick={e => passwordDialog.current.close()}>Close</button>
            </dialog>
            <section>
                <form className="form--login" onSubmit={handleLogin}>
                    
                    <h2>Please sign in</h2>
                    <div className="loginContainer">
                        <div className="loginCard">
                            
                    <fieldset>
                        <label htmlFor="inputEmail"> Email address </label>
                        <input ref={email} type="email"
                            id="email"
                            className="form-control"
                            placeholder="Email address"
                            required autoFocus />
                    </fieldset>
                    <fieldset>
                        <label htmlFor="inputPassword"> Password </label>
                        <input ref={password} type="password"
                            id="password"
                            className="form-control"
                            placeholder="Password"
                            required />
                    </fieldset>
                    <fieldset>
                        <button type="submit">
                            Sign in
                        </button>
                    </fieldset>
            <section className="link--register">
                <Link to="/register">Not a member yet?</Link>
            </section>
                    </div>
            </div>
                </form>
            </section>
        </main>
    )
}

