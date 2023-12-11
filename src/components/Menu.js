import React from 'react';
import '../styles/Menu.css'

const Menu = ({menuHandle, setMenuHandle}) => {
    return (
    <ul className={(menuHandle>=0 && menuHandle<5)? (menuHandle===0? 'animate__animated animate__fadeIn animate__delay-1s menu-main': "animate__animated animate__fadeOut menu-main"):"animate__animated animate__fadeOut menu-main v-hidden" }>
        <li onClick={()=> setMenuHandle(1)}>Historic Background</li>
        <li onClick={()=> setMenuHandle(2)} style={{backgroundColor: "#9C3D22"}}>Lineage</li>
        <li onClick={()=> setMenuHandle(3)} style={{backgroundColor: "#9C3D22"}}>Revelations by pema lingpa</li>
        <li onClick={()=> setMenuHandle(4)}>Legacy</li>
    </ul>
    )
}

export default Menu