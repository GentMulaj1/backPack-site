import React from 'react'
import './Home.css'
import bigBag from './bigBag.png'
import uniqueBag from './uniqueBag.png'
import Header from '../Header/Header'

function Home() {
  return (
    <div className='home' id='home'>
        <div className="wrapper ">
            <div className="home__top">
                <div className="home__topLeft">
                    <h1>This Cute And <span>Trendy Bag</span> Is Big Enough</h1>
                    <button>EXCLUSIVE GALLERY</button>
                </div>

                <div className="home__topRight">
                    <img src={bigBag} alt="" />
                </div>
            </div>

            <div className="home__bottom">
                <div className="home__bottomLeft">
                    <img src={uniqueBag} alt="" />
                </div>
                <div className="home__bottomRight">
                    <h3>Unique Bag</h3>
                    <p>A Student's Perfect Bag Is Essential - It's Everything They Need And Nothing More, So We Created A Collection Of Products That Are Extremely Practical, Both On The Inside And Out.</p>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Home
