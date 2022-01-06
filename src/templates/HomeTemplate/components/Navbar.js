import React, { useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import logo from './../../../assets/logo.png'
import {AccountCircle , Dehaze , FilterTiltShift} from '@mui/icons-material'
import { useEffect } from 'react'

const mainNav = [
    {
        display: "Nơi ở",
        path: "/"
    },
    {
        display: "Trải nghiệm",
        path: "/"
    },
    {
        display: "Trải nghiệm trực tuyén",
        path: "/products"
    },
]



const Navbar = () => {
    const [showLogin , setShowLogin] = useState(false)
    const navBarRef = useRef()
    const { pathname } = useLocation()
    

    const activeNav = mainNav.findIndex((e) => e.path === pathname)

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
                navBarRef.current?.classList.add('shrink')
            }else {
                navBarRef.current?.classList.remove('shrink')
            }
        })
        return () => {
            window.removeEventListener('scroll', () => {

            })
        }
    }, [])


    return (
        <div className='navbar' ref={navBarRef}>
            <Link className="navbar-logo" to='/'>
                <img src={logo} alt="logo" />
            </Link>
            <div className="navbar-menu">
                {
                    mainNav.map((item , index) => (
                        <div key={index} className={`navbar-menu ${index === activeNav ? 'active' : ''}`}>
                            <Link to={item.path}>{item.display}</Link>
                        </div>
                    ))
                }
            </div>
            
            <div className="navbar-right">
                <span>Trở thành chủ nhà</span>
                <FilterTiltShift />
                <div className="navbar-right-login">
                    <div className="navbar-right-login-icon" onClick={() => setShowLogin(!showLogin)}>
                        <Dehaze className='navbar-right-login-item'/>
                        <AccountCircle/>
                    </div>
                    {showLogin &&             
                    <div className="navbar-right-login-user">
                        <NavLink  
                            activeClassName="active"
                            className="nav-link header--nav-link"
                            to='/register'
                        >
                            Đăng kí
                        </NavLink>
                        <NavLink  
                            activeClassName="active"
                            className="nav-link header--nav-link"
                            to='/login'
                        >
                            Đăng nhập
                        </NavLink>
                    </div>}
                </div>
            </div>
        </div>
    )
}

export default Navbar
