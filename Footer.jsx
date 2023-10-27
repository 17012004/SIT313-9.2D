import React from "react";
import "./footer.css";

const style = {
  fontWeight: "normal",
};

const pic = {
  width: "35px",
  height: "35px",
};

function Footer() {
  return (
    <div className="footer">
      <div className="footer-section">
        <h2>Explore</h2>
        <ul>
          <li>Home</li>
          <li>Questions</li>
          <li>Articles</li>
          <li>Tutorials</li>
        </ul>
      </div>
      <div className="footer-section">
        <h2>Support</h2>
        <ul>
          <li>FAQs</li>
          <li>Help</li>
          <li>Contact Us</li>
        </ul>
      </div>
      <div className="footer-section">
        <h2>Stay Connected</h2>
        <div className="SocialIcons">
          <a href="https://www.facebook.com/">
            <img
              style={pic}
              src="https://freepngimg.com/thumb/facebook/62487-bluetie-icons-computer-facebook-login-icon-email.png"
              alt="Facebook"
            />
          </a>
          <a href="https://twitter.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJsYW5nIjoiZW4ifQ%3D%3D%22%7D">
            <img
              style={pic}
              src="https://freepngimg.com/thumb/twitter/2-2-twitter-png-file.png"
              alt="Twitter"
            />
          </a>
          <a href="https://www.instagram.com/">
            <img
              style={pic}
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/900px-Instagram_icon.png?20200512141346"
              alt="Instagram"
            />
          </a>
        </div>
      </div>
      
    </div>
  );
}

export default Footer;
