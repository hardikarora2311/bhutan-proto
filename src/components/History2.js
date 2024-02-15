import React from 'react'

const History2 = ({menuHandle}) => {
    if (menuHandle===1 || menuHandle===2){
        return (
        <div className={(menuHandle>=1 && menuHandle<3)? ( menuHandle===1? "text-box text-box-2 text-box-clrd":"text-box text-box-clrd text-box-2 slide-out-blurred-top"): ("text-box text-box-clrd text-box-2 v-hidden") }>
            <h1 className='animate__animated focus-in-expand animate__delay-3s'>HISTORIC <br></br> BACKGROUND</h1>
            <hr></hr>
            <p className='animate__animated focus-in-expand animate__delay-4s'>The tradition of hiding treasures, Terma originated with Padmasambhava in the 8th century. Holy objects or scrolls with spiritual instructions were hidden in caves and cliffs and sometimes the meanings of these teachings themselves were planted in the minds of chosen disciples. The location and circumstances of their discovery are recorded as prophecies in ancient texts attributed to Padmasambhava. The person who was destined to reveal a particular treasure was called Tertön, the treasure-revealer. Pema Lingpa is recognized as the fourth of five Tertön Kings or Sovereign Tertöns, who rank among one hundred major and one thousand minor treasure revealers.</p>
        </div>
        )
      }
}

export default History2