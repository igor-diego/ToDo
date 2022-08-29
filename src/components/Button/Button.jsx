import React from 'react'

export const Button = ({texto, style, onClick}) => {
  return (
    <button className={style} onClick={onClick}>{texto}</button>
  )
}
