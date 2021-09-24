import "./Article.scss"

import React, { ReactElement, useRef } from "react"
import faker from "faker"

import { cssRandomColor, randomArticleTags } from "../../../utils"
import PillTag from "./PillTag/PillTag"

const Article = (): ReactElement => {
  const articleTags = useRef(randomArticleTags())

  const generatePublicationDate = () => {
    const recentDate = faker.date.recent()

    const day = recentDate.getDate().toString()
    const month = (recentDate.getMonth() + 1).toString()
    const year = recentDate.getFullYear()

    const toTwoDigitFormat = (text: string): string => {
      return text.length === 1 ? `0${text}` : text
    }

    return `${year}-${toTwoDigitFormat(month)}-${toTwoDigitFormat(day)}`
  }

  return (
    <div className="article">
      <div
        className="article__container"
        style={{
          backgroundColor: cssRandomColor(100, 93),
        }}
      >
        <div className="article__top-section">
          <h1 className="article__title">{faker.lorem.words(2)}</h1>
          <p className="article__publication-date">
            {generatePublicationDate()}
          </p>
        </div>
        <div className="article__content">
          <p className="article__description">{faker.lorem.paragraph(10)}</p>
        </div>
        <div className="article__tags-container">
          {articleTags.current.map((tagName) => {
            return <PillTag key={tagName} tagName={tagName} />
          })}
        </div>
      </div>
    </div>
  )
}

export default Article
