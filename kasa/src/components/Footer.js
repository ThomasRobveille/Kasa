import React from "react";

import logo from "../assets/logo_white.png";
import marque from "../assets/marque_deposee.png";

import "../styles/Footer.css";

export default function Footer() {
  return (
    <footer>
      <img alt="logo" src={logo}/>
      <p><img src={marque} alt="marque déposée" className="img_marque"/>Kasa 2023. All right reserved</p>
    </footer>
  )
}