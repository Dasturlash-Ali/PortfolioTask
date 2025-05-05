import React from 'react';
import './NewArrivals.scss'
import { BiSolidStar } from 'react-icons/bi';

function NewArrivals() {
  return (
    <div className='container'>
        <div className='new-arrivals-item'>
            <h2>NEW ARRIVALS</h2>
        </div>
        <div className='item-cards'>
            <div className='card'>
              <img src="/src/assets/na1_item.png" alt="The item one png" />
              <p>T-SHIRT WITH TAPE DETAILS</p>
              <div className='stars'>
                <BiSolidStar className='star-icon'/>
                <BiSolidStar className='star-icon'/>
                <BiSolidStar className='star-icon'/>
                <BiSolidStar className='star-icon'/>
                <BiSolidStar className='star-icon'/>
                <p className='raiting'>4.5/5</p>
              </div>
              <p className='price'>$120</p>
            </div>
            <div className='card'>
              <img src="/src/assets/na2_item.png" alt="The item two png" />
              <p>SKINNY FIT JEANS</p>
              <div className='stars'>
                <BiSolidStar className='star-icon'/>
                <BiSolidStar className='star-icon'/>
                <BiSolidStar className='star-icon'/>
                <BiSolidStar className='star-icon'/>
                <BiSolidStar className='star-icon'/>
                <p className='raiting'>3.5/5</p>
              </div>
              <p className='price'>$240 <span>$260</span> <span className='disc'>-20%</span></p>
            </div>
            <div className='card'>
              <img style={{width: "295px"}} src="/src/assets/na3_item.png" alt="The item two png" />
              <p>CHECKERED SHIRT</p>
              <div className='stars'>
                <BiSolidStar className='star-icon'/>
                <BiSolidStar className='star-icon'/>
                <BiSolidStar className='star-icon'/>
                <BiSolidStar className='star-icon'/>
                <BiSolidStar className='star-icon'/>
                <p className='raiting'>4.5/5</p>
              </div>
              <p className='price'>$180</p>
            </div>
            <div className='card'>
              <img style={{width: "295px"}} src="/src/assets/na4_item.png" alt="The item two png" />
              <p>SLEEVE STRIPED T-SHIRT</p>
              <div className='stars'>
                <BiSolidStar className='star-icon'/>
                <BiSolidStar className='star-icon'/>
                <BiSolidStar className='star-icon'/>
                <BiSolidStar className='star-icon'/>
                <BiSolidStar className='star-icon'/>
                <p className='raiting'>4.5/5</p>
              </div>
              <p className='price'>$130 <span>$160</span> <span className='disc'>-30%</span></p>
            </div> <br />
            <button>View All</button>
        </div>
        <hr />
    </div>
  )
}

export default NewArrivals;