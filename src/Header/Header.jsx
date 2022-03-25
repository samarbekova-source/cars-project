import React from "react";
import "./Header.css";
import Account from "../Header/account.svg";

const Header = () => {
  return (
    <>
      <header>
        <div className="header-main">
          <img
            width="60px"
            src="https://dynamictint.com/wp-content/uploads/2019/10/mercedes-benz-9-logo-png-transparent.png"
            alt=""
          />
          <h3>Mercedes-Benz</h3>
        </div>
        <div className="header-2">
          <span>Login</span>
          <img width="40px" src={Account} alt="" />
          <img
            width="50px"
            src="https://www.vhv.rs/dpng/d/428-4287684_background-shopping-cart-transparent-transparent-background-shopping-cart.png"
            alt=""
          />
        </div>
      </header>
    </>
  );
};

export default Header;
