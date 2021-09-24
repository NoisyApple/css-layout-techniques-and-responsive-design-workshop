import "./Magazine.scss"

import React, { ReactElement } from "react"

import Header from "./Header/Header"
import Article from "./Article/Article"
import HelpButton from "./HelpButton/HelpButton"
import useFeatureFlag from "../../hooks/useFeatureFlag"

const ARTICLE_AMOUNT = 30

const Magazine = (): ReactElement => {
  const isHelpButtonFFOn = useFeatureFlag("show-help-button")

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
      {isHelpButtonFFOn && <HelpButton />}
    </div>
  )
}

export default Magazine
