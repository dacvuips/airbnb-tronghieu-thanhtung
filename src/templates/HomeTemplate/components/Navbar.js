import React from 'react'
import { useEffect } from 'react'
import api from './../../../utils/apiUtils'
import logo from './../../../assets/logo.png'

const Navbar = () => {
    useEffect(() => {
        async function fetchData() {
            api.get("/api/locations").then(
                (resul) => {
                    console.log(resul)
                }
            ).catch()// anh luuw file lại giúp e với
            
        }
        fetchData()
    },[])
    return (
        <div className='navbar'>
            <div className="navbar-logo">
                <img src={logo} alt="logo" />
            </div>
            <div className="navbar-menu">
                Menu
            </div>
            <div className="navbar-right">
                Right
            </div>
        </div>
    )
}

export default Navbar// a dang di lam ma
