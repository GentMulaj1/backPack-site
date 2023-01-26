import React from 'react'
import './Description.css'
import firstImg from '../OurBest/firstImg.png'
import secondImg from '../OurBest/secondImg.png'

const Description = () => {
  return (
    <div className='description' id='aboutUs'>
      <div className="description__up" >
        <div className="description__upLeft">
          <img src={firstImg} alt="" />
          <div className='mid'>
            <strong>$70.00</strong>
            <del>$85.00</del>
          </div>
        </div>


      
        <div className="description__upRight">
          <h1>Men Minimalist Large Capacity Nylon Backpack</h1>
          <p>
            A beautifully Made Canvas Backpack With Padded Shoulder Straps And Genuine Top-Grain Leather Straps And Handle. All Straps Use Magnetic Clasps For Easy Access.
          </p>
          <button>ADD TO CARD</button>
        </div>
      </div>



      <div className="description__down">
        <div className="description__downLeft">
            <img src={secondImg} alt="" />
            <div className='mid'>
              <strong>$85.00</strong>
              <del>$105.00</del>
            </div>
          </div>


        
          <div className="description__downRight">
            <h1>Woosir Outdoor Travel Cotton Canvas Backpack</h1>
            <p>
              Backpack Lining Material: Cotton Interior. Interior Compartment, Interior Zipper Pocket, Interior Slot Pocket, Cell Phone Pocket Closure Type: Zipper Exterior.
            </p>
            <button>ADD TO CARD</button>
          </div>
        
      </div>
    </div>
  )
}

export default Description