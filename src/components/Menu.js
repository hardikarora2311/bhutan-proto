import React from 'react';
import '../styles/Menu.css'

const Menu = ({menuHandle, setMenuHandle}) => {
    return (
    <ul className={(menuHandle>=0 && menuHandle<5)? (menuHandle===0? 'reveal-menu menu-main': "animate__animated animate__fadeOut menu-main"):"animate__animated animate__fadeOut menu-main v-hidden" }>
        <li onClick={()=> setMenuHandle(1)} className='revealRight-class'>Historic Background</li>
        <li onClick={()=> setMenuHandle(2)} className='revealLeft-class' style={{backgroundColor: "#9C3D22", height: "60px"}}>Lineage</li>
        <li onClick={()=> setMenuHandle(3)} className='revealRight-class' style={{backgroundColor: "#9C3D22", marginLeft:"1em"}}>Revelations by pema lingpa</li>
        <li onClick={()=> setMenuHandle(4)} className='revealLeft-class' style={{alignSelf:"flex-start"}}>Legacy</li>
    </ul>
    )
}

export default Menu