import React from 'react';
import "../App.css";
import { useState } from "react";
import Menu from './Menu';
import History from './History';
import Intro from './Intro';
import Lineage from './Lineage';
import Revelations from './Revelations';
import Legacy from './Legacy';
import home from '../assets/Home Icon.png'
import 'animate.css';

const Character = ({characterInfo=[]}) => {
    
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

  return (
    <div className="character">
            <div className={charActivate?"char-header " :"animate__animated animate__zoomIn char-header"} onClick={characterHandler}>
                <span className={charActivate?'date v-hidden': "date"}>{characterInfo[0]}<br></br>-{characterInfo[1]}</span>
                <img src={characterInfo[2]} alt={characterInfo[3]} />
                <div className={charActivate?(menuHandle===-1 || menuHandle %1 !==0? "name name-new":(menuHandle===0?"name name-menu":(menuHandle %1 ===0?"name name-menu-item":"name menu-sub-item"))):'name'}>{characterInfo[3]} <br />
                    <div className={charActivate? 'info-date': "info-date no-char"}>{characterInfo[0]} - {characterInfo[1]}</div>
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
                <button className= {menuHandle>=-1? "home-icon animate__animated animate__fadeIn animate__delay-4s": "home-icon no-char"} onClick={menuReset}><img src={home} alt="Main Menu" /></button>
                <Intro menuHandle={menuHandle}/>
                <Menu menuHandle={menuHandle} setMenuHandle={setMenuHandle}/>
                <History menuHandle={menuHandle}/>
                <Lineage menuHandle={menuHandle}/>
                <Revelations menuHandle={menuHandle} setMenuHandle={setMenuHandle}/>
                <Legacy menuHandle={menuHandle} setMenuHandle={setMenuHandle}/>
                <button className={(menuHandle===-1)?"next animate__animated animate__fadeIn animate__delay-4s":( menuHandle===1)?"next next-red animate__animated animate__fadeIn animate__delay-4s": "next no-char"} onClick={menuHandler}></button>
                <button className={(menuHandle===2)?"next next-red next-newpos animate__animated animate__fadeIn animate__delay-4s": "next no-char"} onClick={menuHandler}></button>
            </div>
            
    </div>
  )
}

export default Character