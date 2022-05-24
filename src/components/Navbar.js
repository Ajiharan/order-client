import React from "react";
import CollapseContainer from "../core/components/CollapseContainer";
import "./styles/navbar.scss";

const Navbar = () => {
  return (
    <div className='navbar-container-layout'>
      <div className='navbar-container-wrapper'>
        <nav className='navbar-container'>
          <CollapseContainer>
            <p>BUY</p>
            <p>SELL</p>
            <p>INVEST</p>
            <p className='icon-wrapper-container'>
              <span>
                <img
                  className='image-icon'
                  src='images/search.png'
                  alt='search'
                />
              </span>
              SEARCH
            </p>
          </CollapseContainer>

          <div className='navbar-container-center'>
            <img src='images/nav_logo.png' alt='logo' />
          </div>
          <div className='navbar-container-right'>
            <p>How it's work</p>
            <p>The limited Journal</p>
            <p>Register</p>
            <p className='icon-wrapper-container'>
              <span>
                <img className='image-icon' src='images/user.png' alt='user' />
              </span>
            </p>
            <p className='icon-wrapper-container'>
              <span>
                <img
                  className='image-icon'
                  src='images/basket.png'
                  alt='cart'
                />
              </span>
            </p>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
