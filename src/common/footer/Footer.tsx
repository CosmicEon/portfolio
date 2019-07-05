import React from "react";
import "./Footer.css";

const Footer: React.FC = () => {
  return (
    <footer className="section last-section">
      <div className="container">
        <div className="copyright-text">
          <p>Copyright &copy;{new Date().getFullYear()} Krasen Ilkov</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
