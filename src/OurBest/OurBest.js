import React from 'react'
import './OurBest.css'
import uniqueBag from '../Home/uniqueBag.png'
import firstImg from './firstImg.png'
import secondImg from './secondImg.png'

const OurBest = () => {


  return (
    <div className='ourBest' id='product'>
        <div className="wrapper ourBest__all">
            <div className='ourBest__1'>
                <div className="ourBest__1Left">
                    <h1>Try Our Best Selling Product</h1>
                </div>
                <div className="ourBest__1Right">
                    <p>A Student's Perfect Bag Is Essential - It's Everything They Need And Nothing More, So We Created A Collection Of Products That Are Extremely Practical, Both On The Inside And Out.</p>
                </div>
            </div>

            <div className='ourBest__2'>
                <div className="ourBest_cards">
                    <div className="ourBest__card">
                        <div className="ourBest__image">
                            <img src={secondImg} alt="" />
                            <div className="ourBest__bg"></div>

                            <div className="ourBest__text">
                                <h3>VASCHY Outdoor Hiking</h3>
                                <strong>$70.00 <del>$75.00</del></strong>
                            </div>
                        </div>
                    </div>

                    <div className="ourBest__card">
                        <div className="ourBest__image">
                            <img src={firstImg} alt="" />
                            <div className="ourBest__bg"></div>
                        </div>

                        <div className="ourBest__text">
                            <h3>Travel Cotton Backpack</h3>
                            <strong>$80.00 <del>$90.00</del></strong>
                        </div>
                    </div>
                    

                    <div className="ourBest__card">
                        <div className="ourBest__image">
                            <img src={uniqueBag} alt="" />
                            <div className="ourBest__bg"></div>
                        </div>

                        <div className="ourBest__text">
                            <h3>Classic Aesthetic</h3>
                            <strong>$65.00 <del>$80.00</del></strong>
                        </div>
                    </div>

                    <div className="ourBest__card">
                        <div className="ourBest__image">
                            <img src={secondImg} alt="" />
                            <div className="ourBest__bg"></div>
                        </div>

                        <div className="ourBest__text">
                            <h3>Vintage Canvas Bookbag</h3>
                            <strong>$70.00 <del>$95.00</del></strong>
                        </div>
                    </div>
                    


                </div>
            </div>

            <div className='ourBest__3'>
                <button>VIEW MORE</button>
            </div>
        </div>
    </div>
  )
}

export default OurBest