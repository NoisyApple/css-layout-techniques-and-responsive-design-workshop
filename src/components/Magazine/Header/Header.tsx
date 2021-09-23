import "./Header.scss"

import React, { ReactElement } from "react"

import Button from "../../Core-UI/Button/Button"
import SearchBar from "../../Core-UI/SearchBar/SearchBar"

const Header = (): ReactElement => {
  return (
    <nav className="header">
      <div className="header__container">
        <h1 className="header__page-title">BRAND NAME</h1>
        <SearchBar />
        <div className="header__nav-anchors-container">
          <a className="header__anchor" href="/">
            Pricing
          </a>
          <a className="header__anchor" href="/">
            About Us
          </a>
          <a className="header__anchor" href="/">
            Contact
          </a>
          <Button className="header__sign-in-button">Sign In</Button>
        </div>
      </div>
    </nav>
  )
}

export default Header
