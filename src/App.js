import './App.css';
import Character from './components/Character';
import image1 from "./assets/Pema Lingpa 2.png";
import image2 from "./assets/Supine Demoness 1.png"
import image3 from "./assets/Guru Rinpoche 1.png"
import image4 from "./assets/Tibetan Movement 1.png"
// import { useEffect } from "react";


function App() {
  // useEffect(() => {
  //   document.body.style.zoom = "25%";
  // }, []);
  const char1= [1450,1521, image1,"PEMA LINGPA", 1800, 200]
  const char2= [800,90, image2,"SUPINE DEMONESS", 44, 1100]
  const char3= [900,1000, image3,"GURU RINPOCHE", 3800, 200]
  const char4= [1200,1800, image4,"TIBETAN INFLUX INTO BHUTAN", 3000, 1100]
  return (
    <div className='main'>
      <Character characterInfo={char1}/>
      <Character characterInfo={char2}/>
      <Character characterInfo={char3}/>
      <Character characterInfo={char4}/>
    </div>
  );
}

export default App;
