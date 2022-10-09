import React from "react";

function Footer() {
  

  const day = new Date();

  const currentDate = day.getFullYear();

  return (
    
    <div className="footer">
      <p>Made with ❤️ in California</p>
      <p>Copyright © {currentDate} | All rights reserved.</p>
    </div>
  );
}

export default Footer;
