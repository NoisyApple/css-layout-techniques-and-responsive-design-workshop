import "./HelpButton.scss"

import React, { ReactElement } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faQuestion } from "@fortawesome/free-solid-svg-icons"

import Button from "../../Core-UI/Button/Button"

const HelpButton = (): ReactElement => {
  return (
    <Button className="help-button">
      <>
        <span>Need Help</span> <FontAwesomeIcon icon={faQuestion} />
      </>
    </Button>
  )
}

export default HelpButton
