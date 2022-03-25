import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          {/* column-1 */}
          <h3>Cookies</h3>
          <h3>Legal Notice</h3>
          <h3>Privacy Statement</h3>
        </div>
        <div className="row">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} Mercedes-Benz Cars UK Limited | All
            right reserved | Terms of Services | Privacy
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
