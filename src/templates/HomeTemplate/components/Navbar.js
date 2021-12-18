import React from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import api from './../../../utils/apiUtils'
import logo from './../../../assets/logo.png'
import {AccountCircle , Dehaze , FilterTiltShift} from '@mui/icons-material'

const Navbar = () => {
    useEffect(() => {
        async function fetchData() {
            api.get("/api/locations").then(
                (result) => {
                    console.log(result.data)
                }
            ).catch()
            
        }
        fetchData()
    },[])
    return (
        <div className='navbar'>
            <Link className="navbar-logo" href='/'>
                <img src={logo} alt="logo" />
            </Link>
            <div className="navbar-menu">
                <span className='active'>Nơi ở</span>
                <span>Trải nghiệm</span>
                <span>Trải nghiệm trực tuyén</span>
            </div>
            
            <div className="navbar-right">
                <span>Trở thành chủ nhà</span>
                <FilterTiltShift />
                <div className="navbar-right-login">
                    <Dehaze className='navbar-right-login-icon'/>
                    <AccountCircle className='navbar-right-login-icon'/>
                </div>
            </div>
        </div>
    )
}

export default Navbar
