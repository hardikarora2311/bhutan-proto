import React from 'react'
import '../styles/Menu.css'
import { useState, useEffect } from 'react'

const Menu3 = ({menuHandle, setMenuHandle}) => {
    const [timeChange1, setTimeChange1]= useState(false)
    const [timeChange2, setTimeChange2]= useState(false)
    const [timeChange3, setTimeChange3]= useState(false)
    const [timeChange4, setTimeChange4]= useState(false)

useEffect(() => {
    if (menuHandle===-1){
        setTimeChange1(false) 
        setTimeChange2(false) 
        setTimeChange3(false) 
        setTimeChange4(false) 
        }; 
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

    // setTimeout(() => {
    // if (menuHandle===0){
    //     setTimeChange1(false) 
    //     setTimeChange2(false) 
    //     setTimeChange3(false) 
    //     setTimeChange4(false) 
    //     }; 
    // }, 20000);
}, [menuHandle]); 
    return (
        <ul className={(menuHandle>=0 && menuHandle<5)? (menuHandle===0? 'reveal-menu menu-main': "menu-exitt menu-main"):"animate__animated animate__fadeOut menu-main v-hidden" }>
            <li onClick={()=> {setMenuHandle(1); setTimeChange1(false); setTimeChange2(false); setTimeChange3(false); setTimeChange4(false)}} className={timeChange1?'jello-horizontal':'animate__animated swing-in-top-fwd animate__delay-2s'}>Historic Background</li>
            <li onClick={()=> {setMenuHandle(2); setTimeChange1(false); setTimeChange2(false); setTimeChange3(false); setTimeChange4(false)}} className={timeChange2?'jello-horizontal':'animate__animated swing-in-top-fwd animate__delay-3s'} style={{backgroundColor: "#9C3D22", height: "60px"}}>Lineage</li>
            <li onClick={()=> {setMenuHandle(3); setTimeChange1(false); setTimeChange2(false); setTimeChange3(false); setTimeChange4(false)}} className={timeChange3?'jello-horizontal':'animate__animated swing-in-top-fwd animate__delay-4s'} style={{backgroundColor: "#9C3D22", marginLeft:"1em"}}>Revelations by pema lingpa</li>
            <li onClick={()=> {setMenuHandle(4); setTimeChange1(false); setTimeChange2(false); setTimeChange3(false); setTimeChange4(false)}} className={timeChange4?'jello-horizontal':'animate__animated swing-in-top-fwd animate__delay-5s'} style={{alignSelf:"flex-start"}}>Legacy</li>
        </ul>
        )
    }

export default Menu3