import React from 'react'
import { speakerData } from '../data/speaker'

const Speakers = () => {

    const firstFiveImages = speakerData.slice(0,5)
  return (
    <>
    <h2>Speakers</h2>
   <div className='ProSection'>
        
        {
            firstFiveImages.map((item)=>{
                return(
                  
                 
                    <div className="imageBox">
                        
                    <img  className='proImage' src={item.image} alt="image" />
                 

                    </div>
                    


                )
            })
        }
    </div>
  
  </>
  )
}

export default Speakers