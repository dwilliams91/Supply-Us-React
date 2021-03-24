import React, { useRef } from "react"
import { Link, useHistory } from "react-router-dom";
import "./Login.css"


export const Login = props => {
    const email = useRef()
    const password = useRef()
    const invalidDialog = useRef()
    const history = useHistory()
    
    const handleLogin = (e) => {
        e.preventDefault()

        return fetch("http://127.0.0.1:8000/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                username: email.current.value,
                password: password.current.value
            })
        })
            .then(res => res.json())
            .then(res => {
                if ("valid" in res && res.valid) {
                    localStorage.setItem("supply_us_id", res.token)
                    
                    if (res.is_staff){
                        localStorage.setItem("is_staff", res.is_staff)
                        localStorage.setItem("is_superuser", res.is_superuser)
                        history.push("/teachers")}
                    else{
                        history.push("/customers")
                    }
                }
                else {
                    invalidDialog.current.showModal()
                }
            })
    }

    return (
        <main className="container--login">
            <dialog className="dialog dialog--auth" ref={invalidDialog}>
                <div>Email or password was not valid.</div>
                <button className="button--close" onClick={e => invalidDialog.current.close()}>Close</button>
            </dialog>
            <h1>Supply Us</h1>
            <section className="loginContainer">
                <div className="loginCard">
                <form className="form--login" onSubmit={handleLogin}>
                    
                    <h2>Please sign in</h2>
                    <fieldset>
                        <label htmlFor="inputEmail"> Email address </label>
                        <input ref={email} type="email" id="email" className="form-control" defaultValue="parent@parent.com" placeholder="Email address" required autoFocus />
                    </fieldset>
                    <fieldset>
                        <label htmlFor="inputPassword"> Password </label>
                        <input ref={password} type="password" id="password" className="form-control" defaultValue="123" placeholder="Password" required />
                    </fieldset>
                    <fieldset style={{
                        textAlign: "center"
                    }}>
                        <button className="btn btn-1 btn-sep icon-send" type="submit">Sign In</button>
                    </fieldset>
                </form>
                </div>
            </section>
            <section className="link--register">
                <Link to="/register">Not a member yet?</Link>
            </section>
        </main>
    )
}

