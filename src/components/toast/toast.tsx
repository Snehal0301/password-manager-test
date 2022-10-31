import React from 'react'
import './toast.css'
const Toast = () => {

    const closeAlert = () => {
        console.log('close')
    }
    return (
        <>
            <div className="alert">
                Congrats!!! Success, Signin to access the vault
                <span className="closebtn" onClick={closeAlert}>&times;</span>
            </div>
        </>
    )
}

export default Toast