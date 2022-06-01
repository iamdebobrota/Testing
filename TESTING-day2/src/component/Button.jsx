import React from 'react'
import './button.css'

const Button = ({varient, colorScheme, children, onClick}) => {
  return (
    <button data-testid="cButton" 
    onClick={onClick}
     className={`btn ${colorScheme || "red"} ${varient || "ghost"}`}>
        {children}
        </button>
  )
}

export default Button