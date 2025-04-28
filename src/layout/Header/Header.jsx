import React, { useState } from 'react';
import './Header.scss';
import { MdClear } from 'react-icons/md';
import { BiCart, BiSearch } from 'react-icons/bi';
import { CgProfile } from 'react-icons/cg';

function Header() {
  const [isFragmentVisible, setIsFragmentVisible] = useState(true);

  const handleClearClick = () => {
    setIsFragmentVisible(false);
  };

  return (
    <header>
      {isFragmentVisible && (
        <div className='header-top'>
          <p>Sign up and get 20% off to your first order. <a href="#">Sign Up Now</a></p>
          <MdClear className='clear-btn' onClick={handleClearClick}/>
        </div>
      )}
      <div className='container'>
        <div className='navbar-wrapper'>
          <h3>SHOP.CO</h3>
          <div className='content-ul'>
            <ul>Shop
              <li>On Sale</li>
              <li>New Arrivals</li>
              <li>Brands</li>
            </ul>
          </div>
          <div className='search-input'>
            <BiSearch />
            <input type="text" placeholder='Search for products...'/>
          </div>
          <div className='card-and-profile-icons'>
            <BiCart/>
            <CgProfile />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;