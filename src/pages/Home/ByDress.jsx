import React from 'react';
import './ByDress.scss';
import { BiSolidStar } from 'react-icons/bi';
import { GoArrowLeft, GoArrowRight } from 'react-icons/go';
import { FcApproval } from 'react-icons/fc';

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

      {/*------------------------------- OUR HAPPY CUSTOMERS--------------------------------------- */}
      
      <div className='coments'>
        <div className='customers'>
            <h3>OUR HAPPY CUSTOMERS</h3>
            <div className='icons'>
                <GoArrowLeft />
                <GoArrowRight />
            </div>
        </div>
        <div className='our-happy'>
            <div className='coment-wrapper'>
                <div className='stars'>
                    <BiSolidStar className='star-icon'/>
                    <BiSolidStar className='star-icon'/>
                    <BiSolidStar className='star-icon'/>
                    <BiSolidStar className='star-icon'/>
                    <BiSolidStar className='star-icon'/>
                    <p>Sarah M.<FcApproval /></p>
                    <span>
                        "I'm blown away by the quality and style of the clothes I received from Shop.co. 
                        From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”
                    </span>
                </div>
            </div>
            <div className='coment-wrapper'>
                <div className='stars'>
                    <BiSolidStar className='star-icon'/>
                    <BiSolidStar className='star-icon'/>
                    <BiSolidStar className='star-icon'/>
                    <BiSolidStar className='star-icon'/>
                    <BiSolidStar className='star-icon'/>
                    <p className='raiting'>Alex K.<FcApproval /></p>
                    <span>
                        "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. 
                        The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.”
                    </span>
                </div>
            </div>
            <div className='coment-wrapper'>
                <div className='stars'>
                    <BiSolidStar className='star-icon'/>
                    <BiSolidStar className='star-icon'/>
                    <BiSolidStar className='star-icon'/>
                    <BiSolidStar className='star-icon'/>
                    <BiSolidStar className='star-icon'/>
                    <p className='raiting'>James L.<FcApproval /></p>
                    <span>
                        "As someone who's always on the lookout for unique fashion pieces, 
                        I'm thrilled to have stumbled upon Shop.co. 
                        The selection of clothes is not only diverse but also on-point with the latest trends.”
                    </span>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default ByDress;