import React from 'react'
import { TfiEmail } from 'react-icons/tfi'
import './Footer.scss'
import { BsFacebook, BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs'

function Footer() {
  return (
    <footer>
      <div className="top-footer">
        <h3>
          STAY UPTO DATE ABOUT <br className="hide-on-mobile" />
          OUR LATEST OFFERS
        </h3>
        <div className="top-footer-items">
          <div className="input-wrapper">
            <input type="email" placeholder="Enter your email address" />
            <TfiEmail className="input-icon" />
          </div>
          <button>Subscribe to Newsletter</button>
        </div>
      </div>

      <div className="hero-footer">
        <div className="container">
          <div className="paragrif-wrapper">
            <div className='footer-paragrif'>
              <span>SHOP.CO</span>
              <p>We have clothes that suits your style and <br /> which you're proud to wear. From <br /> women to men.</p>
              <div className='footer-icons'>
                <BsTwitter style={{width: '28px', height: '28px'}}/>
                <BsFacebook style={{width: '28px', height: '28px'}}/> 
                <BsInstagram style={{width: '28px', height: '28px'}}/>
                <BsGithub style={{width: '28px', height: '28px'}}/>
              </div>
            </div>
            <div className='footer-paragrif'>
              <p style={{color: 'black', fontSize: '20px', fontWeight: '400'}}>COMPANY</p>
              <p>About</p>
              <p>Features</p>
              <p>Works</p>
              <p>Career</p>
            </div>
            <div className='footer-paragrif'>
              <p style={{color: 'black', fontSize: '20px', fontWeight: '400'}}>HELP</p>
              <p>Customer Support</p>
              <p>Delivery Details</p>
              <p>Terms & Conditions</p>
              <p>Privacy Policy</p>
            </div>
            <div className='footer-paragrif'>
              <p style={{color: 'black', fontSize: '20px', fontWeight: '400'}}>FAQ</p>
              <p>Account</p>
              <p>Manage Deliveries</p>
              <p>Orders</p>
              <p>Payments</p>
            </div>
            <div className='footer-paragrif'>
              <p style={{color: 'black', fontSize: '20px', fontWeight: '400'}}>RESOURCES</p>
              <p>Free eBooks</p>
              <p>Development Tutorial</p>
              <p>How to - Blog</p>
              <p>Youtube Playlist</p>
            </div>
          </div>
          <hr />
          <div className='footer-finish'>
            <p>Shop.co © 2000-2023, All Rights Reserved</p>
            <div className='payment-cards'>
              <img src="/src/assets/visa.png" alt="the visa" />
              <img src="/src/assets/mastercard.png" alt="the mastercard" />
              <img src="/src/assets/paypal.png" alt="the paypal" />
              <img src="/src/assets/pay.png" alt="the pay" />
              <img src="/src/assets/googlePay.png" alt="the googlePay" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;