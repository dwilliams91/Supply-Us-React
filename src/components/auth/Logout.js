import React from "react"

export const Logout=(props)=>{

    const LogoutFunction=(e)=>{
            localStorage.clear()
            props.history.push("/login")
        }
    

    return (
        <>
        <form>
        <button  onClick={event=>LogoutFunction()}> Logout</button>
        </form>
        </>
    )
}