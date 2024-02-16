import React from 'react'
import "../App.css";
import { useState } from "react";
import Legacy from './Legacy';
import home from '../assets/Home Icon.png'
import 'animate.css';
import Intro3 from './Intro3';
import Menu3 from './Menu3';
import History3 from './History3';
import Lineage3 from './Lineage3';
import Revelations3 from './Revelations3';

const Character3 = ({characterInfo=[]}) => {
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
        transform: `translate(${characterInfo[4]}px, ${characterInfo[5]}px)` 
    };
      return (
        <div className="character" style={styles}>
                <div className={charActivate?"char-header " :"char-header "} onClick={characterHandler}>
                    <span className={charActivate?'date flip-out-ver-right': "date date-an-3"}>{characterInfo[0]}<br></br>-{characterInfo[1]}</span>
                    <div className="img-container">
                        <img className={charActivate?"main-img-2 flip-2-hor-top-fwd": 'wobble-hor-bottom  main-img-2'} src={characterInfo[2]} alt={characterInfo[3]} />
                    </div>
                    <div className={charActivate?(menuHandle===-1 || menuHandle %1 !==0? "name flip-out-ver-left-label name-new":(menuHandle===0?"name flip-out-ver-left-label-new name-menu":(menuHandle %1 ===0?"name flip-out-ver-left-label name-menu-item":"name flip-out-ver-left-label-new menu-sub-item"))):'name bounce-left-label'}>{characterInfo[3]} <br />
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
                    <button className= {menuHandle===-1? "home-icon animate__animated flip-2-ver-left-bck animate__delay-5s":(menuHandle ===0)?"home-icon home-icon-red animate__animated flip-2-ver-left-bck-home animate__delay-5s":(menuHandle %1===0 && menuHandle%2 !==0)?"home-icon home-icon-red animate__animated flip-2-ver-left-bck animate__delay-5s":(menuHandle %1===0 && menuHandle%2 ===0)?"home-icon home-icon-red animate__animated roll-in-blurred-right-home animate__delay-5s":(menuHandle %1 !==0)?"home-icon animate__animated flip-2-ver-left-bck animate__delay-5s": "home-icon flip-out-ver-left"} onClick={menuReset}><img src={home} alt="Main Menu" className='animate__animated animate__fadeIn animate__delay-5s'/></button>
                    <Intro3 menuHandle={menuHandle}/>
                    <Menu3 menuHandle={menuHandle} setMenuHandle={setMenuHandle}/>
                    <History3 menuHandle={menuHandle}/>
                    <Lineage3 menuHandle={menuHandle}/>
                    <Revelations3 menuHandle={menuHandle} setMenuHandle={setMenuHandle}/>
                    <Legacy menuHandle={menuHandle} setMenuHandle={setMenuHandle}/>
                    {/* <button className={(menuHandle===-1)?"next animate__animated animate__fadeIn animate__delay-4s":( menuHandle===1)?"next next-red animate__animated animate__fadeIn animate__delay-4s": "next no-char"} onClick={menuHandler}></button> */}
                    <button className={(menuHandle===-1)?"next flip-2-ver-right-bck":( menuHandle===1)?"next next-red flip-2-ver-right-bck": "next flip-out-ver-right-btn"} onClick={menuHandler}></button>
                    <button className={(menuHandle===2)?"next next-red next-newpos roll-in-blurred-left-pos": "next next-red flip-out-ver-right-btn"} onClick={menuHandler}></button>
                </div>
                
        </div>
      )
    }

export default Character3