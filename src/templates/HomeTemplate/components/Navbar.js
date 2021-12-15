import React from 'react'
import { useEffect } from 'react'
import api from './../../../utils/apiUtils'
import logo from './../../../assets/logo.png'

const Navbar = () => {
    useEffect(() => {
        async function fetchData() {
            api.get("api/users/pagination").then(
                (result) => {
                    console.log(result)
                }
            ).catch()
            
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

export default Navbar
