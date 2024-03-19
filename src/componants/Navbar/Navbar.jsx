import React from 'react';
import './Navbar.css';
import Button from '../button/button';


const Navbar = ({connectWalletClick, walletAddress, tokenBalance}) => {


  const beginningThree = walletAddress.substring(0, 4);
  const endThree = walletAddress.substring(walletAddress.length - 4);

  const shortAdd = `${beginningThree}...${endThree}`;

  return (
    <div className="top-bar">
      <div className="logo">
      {/* <img src={}  width="80" height="auto"/> */}
      </div>
      <nav className="nav-links">
        <a href="/">Home</a>
      </nav>
      <div className="user-info">
      <Button  onClick={connectWalletClick} label={walletAddress!=='Connect Wallet'?shortAdd : walletAddress} />
        </div>
    </div>
  );
};

export default Navbar;