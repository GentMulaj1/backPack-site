import React from 'react'
import './Customer.css'

const Customer = () => {
  return (
    <div className='customer'>
      <div className="wrapper customer__first">
        <div className="customer__up">
          <h1>Customer feedback on our product</h1>
          <div>
            <button>&larr;</button>
            <button>&rarr;</button>
          </div>
        </div>

        <div className="customer__down">
          <div className="customer__downLeft">
            <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png" alt="" />
          </div>

          <div className="customer__downRight">
            <p>
              I odered a 3x but i think I would have finde with a xo or 2x. This thing is huge which isn't a bad thing but I wasn't expecting that. The hood wil hand down past my chin if I put in on all the way. I also thought theis had a zipper but it's a button up.
            </p>

            <div className="customer__name">
              <div className='customer__nameLeft'>
                  <h2>Wade Warren</h2>
                  <p>Content Writer</p>
              </div>  

              <div className="customer__nameRight">
                <p>⭐⭐⭐⭐⭐</p>
              </div>
            </div>


          </div>
        </div>
      </div>
    </div>
  )
}

export default Customer