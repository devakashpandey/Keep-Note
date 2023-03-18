import React from "react";
import "./Footer.css";

function Footer() {
  let year = new Date().getFullYear();

  return (
    <>
      <footer>
        <p>All Right Reserved By Akash Pandey Copyright © {year}</p>
      </footer>
    </>
  );
}

export default Footer;
