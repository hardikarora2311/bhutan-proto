import React, { useState } from 'react';
import '../styles/Lineage.css'

const Lineage = ({menuHandle}) => {

const [showTree, setShowTree]= useState(false)
    if (menuHandle===2 || menuHandle===3){
        return (
        <div className="lineage-wrapper">
            <div className={(menuHandle>=2 && menuHandle<4)? ( menuHandle===2? "animate__animated animate__zoomIn animate__delay-1s text-box text-box-share text-box-clrd":"animate__animated animate__zoomOut animate__delay-1s text-box text-box-share text-box-clrd"): ("animate__animated animate__zoomOut text-box text-box-share text-box-clrd v-hidden") }>
                <h1 className='animate__animated animate__fadeIn animate__delay-2s'>LINEAGE</h1>
                <hr></hr>
                <p className='animate__animated animate__fadeIn animate__delay-3s'>Pema Lingpa’s lineage is maintained by his three incarnation lines – Peling Sungtrul from his direct incarnation, Peling Tukse from his son and Gangteng Trulku from his grandson. Ganteng Trulku Rinpoche is the authentic representative of Peling tradition with the Gangtey monastery in Phubjikha Valley serving as his seat. Pema Lingpa’s sons also established important noble families in Bhutan, namely Tamzhing Choeji of Bumthang and Dungkhar Choeji of Kurtoe. His descendants played a major part in the unification of Bhutan in the 17th century. Jigme Namgyel, the forefather of the ruling Wangchuck dynasty was born into the family of Dungkhar Choeji founded by Pema Lingpa’s son Kunga Wangpo.</p>
            </div>
            <div className={(menuHandle>=2 && menuHandle<4)? ( menuHandle===2? "familytree animate__animated animate__fadeIn animate__delay-4s":"animate__animated animate__fadeOut familytree"): ("animate__animated animate__fadeOut familytree v-hidden") }>
                <div className="family-head">PEMA LINGPA</div>
                <span>SONS</span>
                <ul className="sons">
                    <li>DRAKPA GYALPO</li>
                    <li>DAWA GYALTSHEN</li>
                    <li>KUENGA WANGPO</li>
                    <li>SANGDA</li>
                </ul>
                <div className="expand-buttton" onClick={()=> setShowTree(!showTree)}></div>
                <div className={showTree? "expanded-content": "expanded-content no-char"}>
                    <span>CHOEJE</span>
                </div>
            </div>
        </div>
        
      )}
}

export default Lineage