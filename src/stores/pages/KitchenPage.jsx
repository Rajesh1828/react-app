import React from 'react'
import { kitchenData } from '../data/kitchen'
import Navbar from '../components/Navbar'



const KitchenPage = () => {
  return (
    <>
    <Navbar/>
    <div className='pageSection'>
        {kitchenData.map((item)=>{
            return(<div>

              <div className="pageImage">
                <img src={item.image} alt="image" />
                <div className="mobileInfo">
                                <h3>{item.model}</h3>
                                <p><strong>Company:</strong> {item.company}</p>
                                <p><strong>Price:</strong> ${item.price}</p>
                                <p><strong>Category:</strong> {item.category}</p>
                                <p><strong>Description:</strong> {item.description}</p>
                            </div>
              </div>

            </div>
            
        )
        })}
     

    </div>
    </>
  )
}

export default KitchenPage