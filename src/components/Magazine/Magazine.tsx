import "./Magazine.scss"

import React, { ReactElement } from "react"
import Header from "./Header/Header"

const Magazine = (): ReactElement => {
  return (
    <div className="magazine">
      <section className="magazine__header-section">
        <Header />
      </section>
      <section className="magazine__content-section"></section>
    </div>
  )
}

export default Magazine
