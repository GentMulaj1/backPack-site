import React from 'react'
import './Choose.css'
import '../OurBest/OurBest.css'
import uniqueBag from '../Home/uniqueBag.png'
import firstImg from '../OurBest/firstImg.png'
import secondImg from '../OurBest/secondImg.png'
import backpack from './backpack.png'
import canoe from './canoe.png'
import zip from './zip.png'

const Choose = () => {
  return (
    <div>
    <div className='choose'>
        <div className="wrapper choose__all">
            <div className='choose__1'>
                <div className="choose__1Left">
                    <h1>Choose Your Best Category Product</h1>
                </div>
                <div className="choose__1Right">
                    <p>A Student's Perfect Bag Is Essential - It's Everything They Need And Nothing More, So We Created A Collection Of Products That Are Extremely Practical, Both On The Inside And Out.</p>
                </div>
            </div>

            <div className='choose__2'>
                <div className="choose_cards">
                    
                    <div className='choose__buttons'>
                        <button className='active__btn'>Camping</button>
                        <button>Hiking</button>
                        <button>Skiing</button>
                        <button>Handbag</button>
                        <button>Suitcase</button>
                    </div>

                    <div className="choose__card">
                        <div className="choose__image">
                            <img src={backpack} alt="" />
                            <div className="choose__bg"></div>
                        </div>

                        <div className="choose__text">
                            <h3>Travel Cotton Backpack</h3>
                            <strong>$80.00 <del>$90.00</del></strong>
                            <button className='choose__btn'>ADD TO CARD</button>
                        </div>
                    </div>
                    

                    <div className="choose__card">
                        <div className="choose__image">
                            <img src={canoe} alt="" />
                            <div className="choose__bg"></div>
                        </div>

                        <div className="choose__text">
                            <h3>Classic Aesthetic</h3>
                            <strong>$65.00 <del>$80.00</del></strong>
                            <button className='choose__btn'>ADD TO CARD</button>
                        </div>
                    </div>

                    <div className="choose__card">
                        <div className="choose__image">
                            <img src={backpack} alt="" />
                            <div className="choose__bg"></div>
                        </div>

                        <div className="choose__text">
                            <h3>Vintage Canvas Bookbag</h3>
                            <strong>$70.00 <del>$95.00</del></strong>
                            <button className='choose__btn'>ADD TO CARD</button>
                        </div>
                    </div>
                    


                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Choose