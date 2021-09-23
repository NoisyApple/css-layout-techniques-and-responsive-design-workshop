import "./SearchBar.scss"

import React, { ReactElement } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch } from "@fortawesome/free-solid-svg-icons"

import Button from "../Button/Button"

const SearchBar = (): ReactElement => {
  return (
    <div className="search-bar">
      <input className="search-bar__input" type="search" size={40} />
      <Button className="search-bar__button">
        <FontAwesomeIcon icon={faSearch} size="lg" />
      </Button>
    </div>
  )
}

export default SearchBar
