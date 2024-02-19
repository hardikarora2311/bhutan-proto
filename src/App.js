import './App.css';
import Character from './components/Character';
import Character2 from './components/Character2';
import image1 from "./assets/Pema Lingpa 2.png";
import image2 from "./assets/Supine Demoness 1.png";
import image3 from "./assets/Guru Rinpoche 1.png";
import image4 from "./assets/Tibetan Movement 1.png";
import image5 from "./assets/Zhabdrung 1.png";
import Character3 from './components/Character3';
import React, { useCallback, useRef ,useState} from "react";
import QuickPinchZoom, { make3dTransformValue } from "react-quick-pinch-zoom";


function App() {
  // useEffect(() => {
  //   document.body.style.zoom = "33%";
  // }, []);
  const imgRef = useRef();
  const onUpdate = useCallback(({ x, y, scale }) => {
    const { current: div } = imgRef;

    if (div) {
      const value = make3dTransformValue({ x, y, scale });

      div.style.setProperty("transform", value);
    }
  }, []);
  const [variations, setVariations]= useState(1)
  const char1= [1450,1521, image1,"PEMA LINGPA", 115, 260]
  const char2= [800,90, image2,"SUPINE DEMONESS", -270, 450]
  const char2opp= [800,90, image2,"SUPINE DEMONESS", 120, -150]
  const char3= [900,1000, image3,"GURU RINPOCHE", -120, 210]
  const char4= [1200,1800, image4,"TIBETAN INFLUX INTO BHUTAN", -130, 450]
  const char5= [1594,1651, image5,"ZHABDRUNG NGAWANG NAMGYAL", 120, 450]
  return (
    <div className="main-wrapper">
      <h3>WP : Interactive Table : Prototype v2</h3>
      <QuickPinchZoom onUpdate={onUpdate}>
        <div className='main' ref={imgRef}>
          {(()=>{
            if (variations===1){
              return <>
              <Character characterInfo={char1}/>
              <Character characterInfo={char2}/>
              <Character characterInfo={char3}/>
              <Character characterInfo={char4}/>
              <Character characterInfo={char5}/>
              <Character characterInfo={char2opp}/>

              </>
            }
            if (variations===2){
              return <><Character2 characterInfo={char1}/>
              <Character2 characterInfo={char2}/>
              <Character2 characterInfo={char3}/>
              <Character2 characterInfo={char4}/>
              <Character2 characterInfo={char5}/>

              </>
            }
            if (variations===3){
              return <><Character3 characterInfo={char1}/>
              <Character3 characterInfo={char2}/>
              <Character3 characterInfo={char3}/>
              <Character3 characterInfo={char4}/>
              <Character3 characterInfo={char5}/>

              </>
            }
          })()}
        </div>
      </QuickPinchZoom>
      <div className="variation-btns">
        <div className={variations===1?"btns-active":"btns"} onClick={()=> setVariations(1)}>Variation 1</div>
        <div className={variations===2?"btns-active":"btns"} onClick={()=> setVariations(2)}>Variation 2</div>
        <div className={variations===3?"btns-active":"btns"} onClick={()=> setVariations(3)}>Variation 3</div>
      </div>
    </div>
  );
}

export default App;
