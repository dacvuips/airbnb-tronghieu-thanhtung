import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import logo from './../../../assets/logo.png'
import {AccountCircle , Dehaze , FilterTiltShift} from '@mui/icons-material'
import { useEffect } from 'react'

const Navbar = () => {
    const navBarRef = useRef(null)

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
                navBarRef.current.classList.add('shrink')
            }else {
                navBarRef.current.classList.remove('shrink')
            }
        })
        return () => {
            window.removeEventListener('scroll')
        }
    }, [])
    return (
        <div className='navbar' ref={navBarRef}>
            <Link className="navbar-logo" to='/'>
                <img src={logo} alt="logo" />
            </Link>
            <div className="navbar-menu">
                <span className='active'>Nơi ở</span>
                <span>Trải nghiệm</span>
                <Link to='/products'>Trải nghiệm trực tuyén</Link>
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
