import "./PillTag.scss"

import React, { ReactElement } from "react"

interface props {
  tagName: string
}

const PillTag = ({ tagName }: props): ReactElement => {
  return <span className="pill-tag">{tagName}</span>
}

export default PillTag
