import React from 'react';
import "./TopSelling.scss";
import { BiSolidStar } from 'react-icons/bi';

function TopSelling() {
  return (
    <div className='container'>
        <div className='top-selling-h2'>
          <h2>Top Selling</h2>
        </div>
        <div className='item-cards'>
            <div className='card'>
              <img style={{width: "295px"}} src="/src/assets/ts1_item.png" alt="The item one png" />
              <p>VERTICAL STRIPED SHIRT</p>
              <div className='stars'>
                <BiSolidStar className='star-icon'/>
                <BiSolidStar className='star-icon'/>
                <BiSolidStar className='star-icon'/>
                <BiSolidStar className='star-icon'/>
                <BiSolidStar className='star-icon'/>
                <p className='raiting'>5.0/5</p>
              </div>
              <p className='price'>$212 <span>$232</span> <span className='disc'>-20%</span></p>
            </div>
            <div className='card'>
              <img style={{width: "295px"}} src="/src/assets/ts2_item.png" alt="The item two png" />
              <p>COURAGE GRAPHIC T-SHIRT</p>
              <div className='stars'>
                <BiSolidStar className='star-icon'/>
                <BiSolidStar className='star-icon'/>
                <BiSolidStar className='star-icon'/>
                <BiSolidStar className='star-icon'/>
                <BiSolidStar className='star-icon'/>
                <p className='raiting'>4.0/5</p>
              </div>
              <p className='price'>$145</p>
            </div>
            <div className='card'>
              <img style={{width: "295px"}} src="/src/assets/ts3_item.png" alt="The item two png" />
              <p>LOOSE FIT BERMUDA SHORTS</p>
              <div className='stars'>
                <BiSolidStar className='star-icon'/>
                <BiSolidStar className='star-icon'/>
                <BiSolidStar className='star-icon'/>
                <BiSolidStar className='star-icon'/>
                <BiSolidStar className='star-icon'/>
                <p className='raiting'>3.0/5</p>
              </div>
              <p className='price'>$80</p>
            </div>
            <div className='card'>
              <img style={{width: "295px"}} src="/src/assets/ts4_item.png" alt="The item two png" />
              <p>FADED SKINNY JEANS</p>
              <div className='stars'>
                <BiSolidStar className='star-icon'/>
                <BiSolidStar className='star-icon'/>
                <BiSolidStar className='star-icon'/>
                <BiSolidStar className='star-icon'/>
                <BiSolidStar className='star-icon'/>
                <p className='raiting'>4.5/5</p>
              </div>
              <p className='price'>$210</p>
            </div> <br />
            <button>View All</button>
        </div>
    </div>
  )
}

export default TopSelling;