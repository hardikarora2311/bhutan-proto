import React from 'react';
import img1 from '../assets/Kenchosum-Lhakhang.png'

const Legacy = ({menuHandle, setMenuHandle}) => {
    if (menuHandle===4){
        return (
            <div className="lineage-wrapper">
            <div className="text-box text-box-share" style={{height: "270px"}}>
                <h1>LEGACY</h1>
                <hr></hr>
                <p>Pema Lingpa established an enormous corpus of literature which serves as the primary basis of religious life for Buddhist followers. The teachings and the cycle of treasures of Pema Lingpa contain several practices, rituals, and instructions that lead sentient beings to liberation. Pema Lingpa’s legacies are preserved in the form of sacred dances which were revealed to him as dreams and visions. The ritual dances, cham composed by him serve as a centrepiece for many festivals and ceremonies across Bhutan.</p>
            </div>
            <div className="legacy-submenu">
                <div className="comic-cover">PHOTO SLIDESHOW</div>
                <div className="submenu-clickable" onClick={()=> setMenuHandle(4.1)}>Peling <br></br><span>Monasteries & Temples</span></div>
                <div className="comic-cover">VIDEO THUMB</div>
                <div className="submenu-clickable" id='last-submenu' onClick={()=> setMenuHandle(4.2)}>peling<br></br><span>dance</span></div>
    
            </div>
        </div>
        )
      }

      if (menuHandle===4.1){
        return (
        <div className="lineage-wrapper">
        <div className="text-box text-box-share" style={{height: "320px"}}>
            <h1 style={{fontSize: "32px"}}>Peling<br></br><b style={{fontSize: "48px"}}>Monasteries & Temples</b></h1>
            <hr></hr>
            <p>Pema Lingpa built many temples such as Tamzhing Lhundrup Choling in Bumthang; Pemaling, Dechenling, and Kunzangdrak in Chel; Kunzangling in Kurtö; Dekyiling in Bamrin; Orgyenling in Tsangchu; Kyerechung Tashi Tengye in Layak; and several others. He restored damages and reconsecrated Gyatso Lhalun. Like his previous incarnations, Pema Lingpa left magical markings of his passing in many places like Kunzangdrak monastery and Gyagar Khamphuk. These marks have a status akin to a terma, as they are reminders of his ever-living presence.</p>
        </div>
        <div className="comic-main">
            <div className="image-block-wrapper">
            <div className="comic-block image-block">
                <div className="comic image"><img src={img1}/></div>
            </div>
            <div className="comic-block image-block">
                <div className="comic image">IMG</div>
            </div>
            <div className="comic-block image-block">
                <div className="comic image">IMG</div>
            </div>
            </div>
           
            <div className="next-comic" onClick={()=> setMenuHandle(4.2)}>PELING<br></br><span>DANCE</span></div>
        </div>
    </div>
    )
    }

    if (menuHandle===4.2){
        return (
        <div className="lineage-wrapper">
        <div className="text-box text-box-share" style={{height: "300px"}}>
            <h1 style={{fontSize: "32px"}}>Peling<br></br><b style={{fontSize: "48px"}}>dance</b></h1>
            <hr></hr>
            <p>Pema Lingpa’s legacies are preserved in the form of sacred dances called peling tercham which were revealed to him as dreams and visions. The ritual dances composed by him serve as a centerpiece for many festivals and ceremonies. The most popular of the dances are the dakini dance, the three ging dances signifying the subjugation of evil and the ging and tsholing dance. It is said that dakini would visit him in his dreams to teach him the steps of different sacred dances and give him further instructions.</p>
        </div>
        <div className="comic-main">
            <div className="comic-block">
                <div className="comic video">VIDEO</div>
            </div>
            <div className="next-comic" onClick={()=> setMenuHandle(4.1)}>PELING<br></br><span>MONASTRIES & TEMPLES</span></div>
        </div>
    </div>
    )
    }
}

export default Legacy