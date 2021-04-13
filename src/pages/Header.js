import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header>
      <div className='header-container'>
        <div className='row space-between'>
          <div className='logo'>
            <Link to='/'>Incsub</Link>
          </div>
          <div className='menu'>MENU</div>
        </div>
      </div>
    </header>
  );
};

export default Header;