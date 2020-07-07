import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = (props) => {
  const [signIn, setSignIn] = useState(false);

  return (
    <div id="header">
      <h1><Link to="/">JPlate</Link></h1>
      <div className="headerLinks">
        <div className="linkItem" >
          <img
            id="headerCart" src="https://image.flaticon.com/icons/svg/25/25619.svg" onClick={props.toggleCart} />
          {props.numCartItems}
        </div>
        <div className="linkItem">
          <h2><Link to="/about">About</Link></h2>
        </div>
        {!signIn ?
          (<div className="linkItem">
            <h2><Link to="/signin">Sign In</Link></h2>
           </div> ) :
          (<div className="linkItem">
            <h2><Link to="/profile" >Profile</Link></h2>
           </div>)
          }
      </div>
    </div>
  );
};

export default Header;