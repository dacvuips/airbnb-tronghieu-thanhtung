import React from 'react'
import { useEffect } from 'react'
import api from './../../../utils/apiUtils'
import logo from './../../../assets/logo.png'
import {AccountCircle , Dehaze , FilterTiltShift} from '@mui/icons-material'

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
                <span>Nơi ở</span>
                <span>Trải nghiệm</span>
                <span>Trải nghiệm trực tuyén</span>
            </div>
            <div className="navbar-right">
                <span>Trở thành chủ nhà</span>
                <FilterTiltShift />
                <div className="navbar-right-login">
                    <Dehaze />
                    <AccountCircle />
                </div>
            </div>
        </div>
    )
}

export default Navbar