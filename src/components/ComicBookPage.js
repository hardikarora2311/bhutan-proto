import React from 'react'
import CharacterScale from './CharacterScale'
import image1 from "../assets/Pema Lingpa 2.png"
import bg from "../assets/bg.png";

const char1scale= [1450,1521, image1,"PEMA LINGPA", 0, 0,0]


const ComicBookPage = () => {
  return (
    <div>
      <img className='bg-main' src={bg} alt="Map background" />
        <CharacterScale characterInfo={char1scale}/>
    </div>
  )
}

export default ComicBookPage