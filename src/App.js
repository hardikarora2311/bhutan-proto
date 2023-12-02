import './App.css';
import Character from './components/Character';
import image1 from "./assets/Pema Lingpa 2.png";
import { useEffect } from "react";


function App() {
  useEffect(() => {
    document.body.style.zoom = "50%";
  }, []);
  const char1= [1450,1521, image1,"PEMA LINGPA"]
  return (
    <div className='main'>
      <Character characterInfo={char1}/>
    </div>
  );
}

export default App;
