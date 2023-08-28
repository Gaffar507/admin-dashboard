import React from 'react'

export default function Button({bgColor,color, size, borderRadius,text}) {
  return (
    <button type='button'
    className={`text-${size} p-2 hover:drop-shadow-xl` }
    style={{ backgroundColor:bgColor, color, borderRadius}}>
      {text}
    </button>
  )
}
