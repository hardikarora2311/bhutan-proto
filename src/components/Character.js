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
            <div className={charActivate? "char-header no-char": "char-header"} onClick={characterHandler}>
                <span className='date'>{characterInfo[0]}<br></br>-{characterInfo[1]}</span>
                <img src={characterInfo[2]} alt={characterInfo[3]} />
                <span className='name'>{characterInfo[3]}</span>
            </div>
            <div className={charActivate? "show-char": "show-char no-char"} >
                <img src={characterInfo[2]} alt={characterInfo[3]} onClick={characterHandler}/>
                <div className="char-label">
                    <span className='info-name'>{characterInfo[3]}</span>
                    <span className='info-date'>{characterInfo[0]} - {characterInfo[1]}</span>
                </div>
            </div>
            <div className={charActivate? "char-section": "char-section no-char"}>
                <button className= {menuHandle>0? "home-icon": "home-icon no-char"} onClick={menuReset}><img src={home} alt="Main Menu" /></button>
                <Intro menuHandle={menuHandle}/>
                <Menu menuHandle={menuHandle} setMenuHandle={setMenuHandle}/>
                <History menuHandle={menuHandle}/>
                <Lineage menuHandle={menuHandle}/>
                <Revelations menuHandle={menuHandle} setMenuHandle={setMenuHandle}/>
                <Legacy menuHandle={menuHandle} setMenuHandle={setMenuHandle}/>
                <button className={(menuHandle===-1 || menuHandle>0) && menuHandle %1 ===0 ?"next": "next no-char"} onClick={menuHandler}></button>
            </div>
            
            

                {/* [ [menu], [main,..], [main,..], [main,..] ] */}
            
    </div>
  )
}

export default Character