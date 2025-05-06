import React, { Fragment } from 'react';
import './Home.scss';
import VectorImg from '../../assets/Vector.svg'
import BrandsAd from './BrandsAd';
import NewArrivals from './NewArrivals';
import TopSelling from './TopSelling';
import ByDress from './ByDress';

function Home() {
  return (
    <Fragment>

    <div className='hero'>
      <div className='container'>
        <h2>
          <span>FIND CLOTHES</span>
          <span>THAT MATCHES</span>
          <span>YOUR STYLE</span>
        </h2>

        <div className='home-p-img'>
          <p>Browse through our diverse range of meticulously crafted garments, designed <br /> to bring out your individuality and cater to your sense of style.</p>
          <img src={VectorImg}alt="This home icon StarIcon" />
        </div>

        <img className='bigStarIcon' src={VectorImg} alt="This home icon StarIcon" />
        
        <button className='shop-btn'>Shop Now</button>

        <div className='nomeric-wrapper'>
          <div className='nomeric'>
            <h3>200+</h3>
            <p>International Brands</p>
          </div>
          <div className='nomeric'>
            <h3>2,000+</h3>
            <p>High-Quality Products</p>
          </div>
          <div className='nomeric'>
            <h3>30,000+</h3>
            <p>Happy Customers</p>
          </div>
        </div>
      </div>
      <div>
        <BrandsAd />
      </div>
    </div>
        <NewArrivals />
        <TopSelling />
        <ByDress />
    </Fragment>
  )
}

export default Home;