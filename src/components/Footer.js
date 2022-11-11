import React from "react";

function Footer() {
  

  const day = new Date();

  const currentDate = day.getFullYear();

  return (
      <div>
      
    <footer className="footer mt-5 py-3 ">
  <div className="container">
  
      <p>Made with ❤️ in California</p>
      <p>Copyright © {currentDate} | All rights reserved.</p>
    
  </div>
</footer>
</div>
    
    
  );
}

export default Footer;
