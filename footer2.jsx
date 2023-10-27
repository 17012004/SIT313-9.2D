import React from "react";
import "./footer.css";

const style = {
  fontWeight: "normal",
};

function Footer2() {
  return (
    <div className="footer-bottom">
      <h1>DEV@DEAKIN by Vansh</h1>
      <div className="footer-links">
        <h3 style={style}>Privacy Policy</h3>
        <h3 style={style}>Terms</h3>
        <h3 style={style}>Code of Conduct</h3>
      </div>
    </div>
  );
}

export default Footer2;
