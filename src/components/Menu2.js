import React from 'react'
import '../styles/Menu.css'
import { useState, useEffect } from 'react'


 
const Menu2 = ({menuHandle, setMenuHandle}) => {
    const [timeChange1, setTimeChange1]= useState(false)
    const [timeChange2, setTimeChange2]= useState(false)
    const [timeChange3, setTimeChange3]= useState(false)
    const [timeChange4, setTimeChange4]= useState(false)

useEffect(() => {
 setTimeout(() => {
    if (menuHandle===0){
    setTimeout(() => {
        setTimeChange1(true);
    }, 2000)
    setTimeout(() => {
        setTimeChange2(true);
      }, 4000) 
    setTimeout(() => {
        setTimeChange3(true);
      }, 6000) 
    setTimeout(() => {
        setTimeChange4(true);
      }, 8000)    
    }; 
    }, 7000);

    setTimeout(() => {
    if (menuHandle===0){
        setTimeChange1(false) 
        setTimeChange2(false) 
        setTimeChange3(false) 
        setTimeChange4(false) 
        }; 
    }, 20000);
}, [menuHandle]); 
    return (
        <ul className={(menuHandle>=0 && menuHandle<5)? (menuHandle===0? 'reveal-menu menu-main': "menu-exit slit-out-vertical menu-main"):"animate__animated animate__fadeOut menu-main v-hidden" }>
            <li onClick={()=> setMenuHandle(1)} className={timeChange1?'heartbeat':'animate__animated slit-in-vertical animate__delay-2s'}>Historic Background</li>
            <li onClick={()=> setMenuHandle(2)} className={timeChange2?'heartbeat':'animate__animated slit-in-vertical animate__delay-3s'} style={{backgroundColor: "#9C3D22", height: "60px"}}>Lineage</li>
            <li onClick={()=> setMenuHandle(3)} className={timeChange3?'heartbeat':'animate__animated slit-in-vertical animate__delay-4s'} style={{backgroundColor: "#9C3D22", marginLeft:"1em"}}>Revelations by pema lingpa</li>
            <li onClick={()=> setMenuHandle(4)} className={timeChange4?'heartbeat':'animate__animated slit-in-vertical animate__delay-5s'} style={{alignSelf:"flex-start"}}>Legacy</li>
        </ul>
        )
    }

export default Menu2