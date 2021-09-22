import "./Welcome.scss"

import React, { ReactElement } from "react"

const Welcome = (): ReactElement => {
  return (
    <div className="welcome">
      <h1 className="welcome__title">
        Hello There!{" "}
        <span role="img" aria-label="cat emoji">
          😸
        </span>
      </h1>
    </div>
  )
}

export default Welcome
