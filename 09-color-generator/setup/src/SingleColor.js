import React, { useState, useEffect } from 'react'
import rgbToHex from './utils'

const SingleColor = ({ type, weight, hexColor }) => {
  const [alert, setAlert] = useState(false)

  hexColor = '#' + hexColor

  useEffect(() => {
    let timeout = setTimeout(() => {
      setAlert(false)
    }, 2000)
    return () => clearTimeout(timeout)
  }, [alert])

  return (
    <article className={`'color' ${type === 'shade' && 'color-light'}`}
      style={{ backgroundColor: hexColor }}
      onClick={() => {
        setAlert(true)
        navigator.clipboard.writeText(hexColor)
      }}
    >
      <p className='percent-value'>{weight}%</p>
      <p className='color-value'>{hexColor}</p>
      {alert && <p className='alert'>copied to clipboard</p>}
    </article>
  )
}

export default SingleColor
