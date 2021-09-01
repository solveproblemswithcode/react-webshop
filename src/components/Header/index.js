import React from "react"
import "./styles.scss"

import Logo from "./../../assets/chelsea-logo.webp"

const Header = (props) => {
  return (
    <header className="header">
      <div className="wrap">
        <div className="logo">
          <img src={Logo} alt="Chelsea LOGO" />
        </div>
        <div className="logotext">The Unofficial Online Store</div>
      </div>
    </header>
  )
}

export default Header
