import React from 'react';
import "../App.css";
import { useState } from "react";
import Legacy from './Legacy';
import home from '../assets/Home Icon.png'
import 'animate.css';
import Intro2 from './Intro2';
import Menu2 from './Menu2';
import History2 from './History2';
import Lineage2 from './Lineage2';
import Revelations2 from './Revelations2';

const Character2 = ({characterInfo=[]}) => {
  const [charActivate, setCharActivate]= useState(false)
const [menuHandle, setMenuHandle]= useState(-1)
const characterHandler = () => {
    setCharActivate(!charActivate)
    setMenuHandle(-1)
};
const menuHandler = () => {
    setMenuHandle(menuHandle+1)
};
const menuReset = () => {
    setMenuHandle(0)
};
const styles = { 
    transform: `translate(${characterInfo[4]}%, ${characterInfo[5]}%)` 
};
  return (
    <div className="character" style={styles}>
            <div className={charActivate?"char-header " :"char-header "} onClick={characterHandler}>
                <span className={charActivate?'date blur-out-contract': "date date-an-2"}>{characterInfo[0]}<br></br>-{characterInfo[1]}</span>
                <div className="img-container">
                    <img className={charActivate?"main-img-2 main-img-2-shad": 'shake-horizontal main-img-2'} src={characterInfo[2]} alt={characterInfo[3]} />
                </div>
                <div className={charActivate?(menuHandle===-1 || menuHandle %1 !==0? "name name-new rotate-out-center-label":(menuHandle===0?"name name-menu rotate-out-center-label-new":(menuHandle %1 ===0?"name name-menu-item rotate-out-center-label":"name menu-sub-item rotate-out-center-label-new"))):'name shake-horizontal-label '}>{characterInfo[3]} <br />
                    <div className={charActivate? 'info-date': "info-date date-hidden"}>{characterInfo[0]} - {characterInfo[1]}</div>
                </div>
            </div>
            {/* <div className={charActivate? "show-char": "show-char no-char"} >
                <img src={characterInfo[2]} alt={characterInfo[3]} onClick={characterHandler}/>
                <div className="char-label">
                    <span className='info-name'>{characterInfo[3]}</span>
                    <span className='info-date'>{characterInfo[0]} - {characterInfo[1]}</span>
                </div>
            </div> */}
            <div className={charActivate? "char-section": "char-section no-char"}>
                {/* <button className= {menuHandle===-1? "home-icon animate__animated animate__fadeIn animate__delay-4s":(menuHandle ===0)?"home-icon home-icon-red home-new-pos animate__animated animate__fadeIn animate__delay-4s":(menuHandle %1 ===0)?"home-icon home-icon-red animate__animated animate__fadeIn animate__delay-4s":(menuHandle %1 !==0)?"home-icon animate__animated animate__fadeIn animate__delay-4s": "home-icon no-char"} onClick={menuReset}><img src={home} alt="Main Menu" /></button> */}
                <button className= {menuHandle===-1? "home-icon animate__animated roll-in-blurred-right animate__delay-5s":(menuHandle ===0)?"home-icon home-icon-red animate__animated roll-in-blurred-right-home-new animate__delay-5s":(menuHandle %1===0 && menuHandle%2 !==0)?"home-icon home-icon-red animate__animated roll-in-blurred-right animate__delay-5s":(menuHandle %1===0 && menuHandle%2 ===0)?"home-icon home-icon-red animate__animated roll-in-blurred-right-home animate__delay-5s":(menuHandle %1 !==0)?"home-icon animate__animated roll-in-blurred-right animate__delay-5s": "home-icon roll-out-blurred-top-home"} onClick={menuReset}><img src={home} alt="Main Menu" className='animate__animated animate__fadeIn animate__delay-5s'/></button>
                <Intro2 menuHandle={menuHandle}/>
                <Menu2 menuHandle={menuHandle} setMenuHandle={setMenuHandle}/>
                <History2 menuHandle={menuHandle}/>
                <Lineage2 menuHandle={menuHandle}/>
                <Revelations2 menuHandle={menuHandle} setMenuHandle={setMenuHandle}/>
                <Legacy menuHandle={menuHandle} setMenuHandle={setMenuHandle}/>
                {/* <button className={(menuHandle===-1)?"next animate__animated animate__fadeIn animate__delay-4s":( menuHandle===1)?"next next-red animate__animated animate__fadeIn animate__delay-4s": "next no-char"} onClick={menuHandler}></button> */}
                <button className={(menuHandle===-1)?"next roll-in-blurred-left":( menuHandle===1)?"next next-red roll-in-blurred-left": "next roll-out-blurred-top-next"} onClick={menuHandler}></button>
                <button className={(menuHandle===2)?"next next-red next-newpos roll-in-blurred-left-pos": "next next-red roll-out-blurred-top-next"} onClick={menuHandler}></button>
            </div>
            
    </div>
  )
}
export default Character2