import "./Button.scss"

import React, { ReactElement } from "react"

interface props {
  children?: string | ReactElement
  onClick?: (event: React.MouseEvent<HTMLElement>) => void
  className?: string
}

const Button = ({ children, onClick, className }: props): ReactElement => {
  return (
    <button onClick={onClick} className={`button ${className}`}>
      {children}
    </button>
  )
}

export default Button
