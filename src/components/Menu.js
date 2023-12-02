import React from 'react';
import '../styles/Menu.css'

const Menu = ({menuHandle, setMenuHandle}) => {
  if (menuHandle===0){
    return <ul className='menu-main'>
        <li onClick={()=> setMenuHandle(1)}>Historic Background</li>
        <li onClick={()=> setMenuHandle(2)}>Lineage</li>
        <li onClick={()=> setMenuHandle(3)}>Revelations by pema lingpa</li>
        <li onClick={()=> setMenuHandle(4)}>Legacy</li>
    </ul>
  }
}

export default Menu