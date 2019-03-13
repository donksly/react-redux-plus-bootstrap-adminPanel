import React from "react";
import ninja_icon from "../components/assets/icon.png";

const Footer = () => {
  return (
    <div>
      <footer>
        <div className="pull-left">
          <div className="footer-powered-by-div">
            <a
              href="https://github.com/donksly"
              className="img-responsive"
              target="_blank"
            >
              <img src={ninja_icon} alt="DonKsly" />
            </a>
            &nbsp; Powered by &nbsp;
            <a href="https://github.com/donksly" target="_blank">
              DonKsly
            </a>
          </div>
        </div>
        <div className="pull-right">
          <div className="footer-right-content">React Portal. &copy; 2018</div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
