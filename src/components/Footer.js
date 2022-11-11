import React from "react";

function Footer() {
  const day = new Date();

  const currentDate = day.getFullYear();

  return (
    <div className="footer">
      <div className="footer-left">
        <p>Copyright © {currentDate} | All rights reserved.</p>
      </div>
      <div className="footer-center">
        <p>Made with ❤️ in California</p>
      </div>
      <div className="footer-right">
        <img src="./images/instagram.png" alt="instagram-icon" />
        <img src="./images/facebook.png" alt="facebook-icon" />
      </div>
    </div>
  );
}

export default Footer;
