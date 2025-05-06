import React from 'react';
import './ByDress.scss';
import { BiSolidStar } from 'react-icons/bi';
import { GoArrowLeft, GoArrowRight } from 'react-icons/go';

function ByDress() {
  return (
    <div className='container'>
      <div className='dress-wrapper'>
        <h3>BROWSE BY DRESS STYLE</h3>
        <div className='img-wrapper'>
          <div className='img-row'>
            <img style={{width: "408px", height: "289px"}} src="/src/assets/bd1_item.png" alt="bd1" />
            <img style={{width: "684px", height: "289px"}} src="/src/assets/bd2_item.png" alt="bd2" />
          </div>
          <div className='img-row'>
            <img style={{width: "684px", height: "289px"}} src="/src/assets/bd3_item.png" alt="bd3" />
            <img style={{width: "408px", height: "289px"}} src="/src/assets/bd4_item.png" alt="bd4" />
          </div>
        </div>
      </div>
      <div className='coments'>
        <div className='customers'>
            <h3>OUR HAPPY CUSTOMERS</h3>
            <div className='icons'>
                <GoArrowLeft />
                <GoArrowRight />
            </div>
        </div>
        <div className='coment-wrapper'>
            <div className='stars'>
                <BiSolidStar className='star-icon'/>
                <BiSolidStar className='star-icon'/>
                <BiSolidStar className='star-icon'/>
                <BiSolidStar className='star-icon'/>
                <BiSolidStar className='star-icon'/>
                <p className='raiting'>Sarah M.</p>
                <p></p>
            </div>
        </div>
      </div>
    </div>
  );
}

export default ByDress;