import React from 'react'

const Button = ({ children, whatColor, setColor }) => {
  console.log("ButtonがRenderingされました")
  return (
    <button
      style={{ color: "white", backgroundColor: whatColor }}
      onClick={() => setColor(whatColor)}
    >
      {children}
    </button>
  )
}

export default Button
