import React, { useState } from 'react';
import '../styles/Lineage.css'

const Lineage = ({menuHandle}) => {

const [showTree, setShowTree]= useState(false)
    if (menuHandle===2){
        return (
        <div className="lineage-wrapper">
            <div className="text-box text-box-share">
                <h1>LINEAGE</h1>
                <hr></hr>
                <p>Pema Lingpa’s lineage is maintained by his three incarnation lines – Peling Sungtrul from his direct incarnation, Peling Tukse from his son and Gangteng Trulku from his grandson. Ganteng Trulku Rinpoche is the authentic representative of Peling tradition with the Gangtey monastery in Phubjikha Valley serving as his seat. Pema Lingpa’s sons also established important noble families in Bhutan, namely Tamzhing Choeji of Bumthang and Dungkhar Choeji of Kurtoe. His descendants played a major part in the unification of Bhutan in the 17th century. Jigme Namgyel, the forefather of the ruling Wangchuck dynasty was born into the family of Dungkhar Choeji founded by Pema Lingpa’s son Kunga Wangpo.</p>
            </div>
            <div className="familytree">
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