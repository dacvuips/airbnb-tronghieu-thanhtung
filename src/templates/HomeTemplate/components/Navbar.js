import React, { useRef } from 'react'
import { Link, useHistory } from 'react-router-dom'
import logo from './../../../assets/logo.png'
import {AccountCircle , Dehaze , FilterTiltShift} from '@mui/icons-material'
import { useEffect } from 'react'


const Navbar = () => {
    
    const menuRef = useRef()
    const navBarRef = useRef()

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
                navBarRef.current.classList.add('shrink')
            }else {
                navBarRef.current.classList.remove('shrink')
            }
        })
        return () => {
            window.removeEventListener('scroll', () => {

            })
        }
    }, [])

    const handleAddClassActive = (e) => {
        const listSpanEle = menuRef.current.querySelectorAll('a');
        [...listSpanEle].forEach(item => {
            if(item === e.target){
                e.target.classList.add('active')
            }else{
                item.classList.remove('active')

            }
        });
    }

    
    return (
        <div className='navbar' ref={navBarRef}>
            <Link className="navbar-logo" to='/'>
                <img src={logo} alt="logo" />
            </Link>
            <div className="navbar-menu" ref={menuRef}>
                {/* <span className='active' onClick={handleAddClassActive}>Nơi ở</span>
                <span onClick={handleAddClassActive}>Trải nghiệm</span>
                <span onClick={handleAddClassActive}>Trải nghiệm trực tuyén</span> */}
                <Link to='/' className='active' onClick={handleAddClassActive}>Nơi ở</Link>
                <Link to='/' onClick={handleAddClassActive}>Trải nghiệm</Link>
                <Link to='/products' onClick={handleAddClassActive}>Trải nghiệm trực tuyén</Link>
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
