import './menu.scss';
import React from 'react'

const Menu = ({ menuOpen,setMenuOpen }) => {
    return (
        <div className={"menu " + (menuOpen && "active") }>
            <ul>
                <li onClick={()=>setMenuOpen(false)} >
                    <a href="#intro"  >Home</a>
                </li>
                <li  onClick={()=>setMenuOpen(false)}>
                    <a href="#portfolio"> portfolio</a>
                </li>
                <li  onClick={()=>setMenuOpen(false)}>
                    <a href="#works">works</a>
                </li>
                <li  onClick={()=>setMenuOpen(false)}>
                    <a href="#testimonial">testimonial</a>
                </li>
                <li  onClick={()=>setMenuOpen(false)}>
                    <a href="#contact">contact</a>
                </li>
            </ul>
        </div>
    )
}

export default Menu