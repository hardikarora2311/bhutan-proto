import React, { useState }   from 'react'
import '../styles/Lineage.css'


const Lineage3 = ({menuHandle}) => {
    const [showone, setShowone]= useState(false)
    const [showtwo, setShowtwo]= useState(false)
    const [showthree, setShowthree]= useState(false)
    const [showfour, setShowfour]= useState(false)
    
        if (menuHandle===2 || menuHandle===3){
            return (
            <div className="lineage-wrapper">
                <div className={(menuHandle>=2 && menuHandle<4)? ( menuHandle===2? "text-box-3 text-box text-box-share text-box-clrd":"text-box text-box-3 text-box-share text-box-clrd flip-out-hor-top"): ("text-box text-box-share text-box-clrd text-box-3 v-hidden") }>
                    <h1 className='animate__animated slide-right animate__delay-4s'>LINEAGE</h1>
                    <hr></hr>
                    <p className='animate__animated slide-right animate__delay-5s'>Pema Lingpa’s lineage is maintained by his three incarnation lines – Peling Sungtrul from his direct incarnation, Peling Tukse from his son and Gangteng Trulku from his grandson. Ganteng Trulku Rinpoche is the authentic representative of Peling tradition with the Gangtey monastery in Phubjikha Valley serving as his seat. Pema Lingpa’s sons also established important noble families in Bhutan, namely Tamzhing Choeji of Bumthang and Dungkhar Choeji of Kurtoe. His descendants played a major part in the unification of Bhutan in the 17th century. Jigme Namgyel, the forefather of the ruling Wangchuck dynasty was born into the family of Dungkhar Choeji founded by Pema Lingpa’s son Kunga Wangpo.</p>
                </div>
                <div className={(menuHandle>=2 && menuHandle<4)? ( menuHandle===2? "familytree animate__animated animate__fadeIn animate__delay-5s":"animate__animated animate__fadeOut familytree"): ("animate__animated animate__fadeOut familytree v-hidden") }>
                    <div className="family-head">PEMA LINGPA</div>
                    <ul className="sons header-sons">
                        <li>SONS</li>
                    </ul>
                    <ul className="sons">
                        <li className={showone?"clrd-click":""} onClick={() => setShowone(!showone)}>DRAKPA GYALPO</li>
                        <li className={showtwo?"clrd-click":""} onClick={() => setShowtwo(!showtwo)}>DAWA GYALTSHEN</li>
                        <li className={showthree?"clrd-click":""} onClick={() => setShowthree(!showthree)}>KUENGA WANGPO</li>
                        <li  className={showfour?"clrd-click":""} onClick={() => setShowfour(!showfour)}>SANGDA</li>
                    </ul>
                    <ul className="sons choeje">
                        <li className={showone?"son1":"son1 o-hidden-new"}>choeje</li>
                        <li className={showtwo?"son2":"son2 o-hidden-new"}>choeje</li>
                        <li className={showthree?"son3":"son3 o-hidden-new"}>choeje</li>
                        <li className={showfour?"son4":"son4 o-hidden-new"}>choeje</li>
                    </ul>
                    <ul className={showfour?"sons list-1 no-char":"sons list-1"}>
                        <li className={showone?"":"o-hidden-new"}>Tamshing</li>
                        <li className={showtwo?"":"o-hidden-new"}>prakhar</li>
                        <li className={showthree?"":"o-hidden-new"}>kochung</li>
                        <li className={showthree?"":"o-hidden-new"}>bidung</li>
                    </ul>
                    <ul className={showfour?"sons list-1 list-3":"sons list-1 no-char"}>
                        <li className={showfour?"":"o-hidden-new"}>tsakaling</li>
                        <li className={showfour?"":"o-hidden-new"}>drophu</li>
                        <li className={showfour?"":"o-hidden-new"}>drametse</li>
                        <li className={showfour?"":"o-hidden-new"}>yagang</li>
                    </ul>
                    <ul className="sons list-2">
                        <li className={showthree?"":"o-hidden-new"}>kheri</li>
                        <li className={showthree?"":"o-hidden-new"}>dungkar</li>
                    </ul>
                </div>
            </div>
            
          )}
    }

export default Lineage3