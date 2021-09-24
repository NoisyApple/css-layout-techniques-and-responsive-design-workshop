import "./Magazine.scss"

import React, { ReactElement } from "react"

import Header from "./Header/Header"
import Article from "./Article/Article"

const ARTICLE_AMOUNT = 30

const Magazine = (): ReactElement => {
  return (
    <div className="magazine">
      <section className="magazine__header-section">
        <Header />
      </section>
      <div className="magazine__spacer"></div>
      <section className="magazine__content-section">
        {[...Array(ARTICLE_AMOUNT).keys()].map((e) => {
          return <Article key={e} />
        })}
      </section>
    </div>
  )
}

export default Magazine
