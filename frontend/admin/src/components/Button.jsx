import React from 'react'

const Button = ({type, name, bd, bg, px, py, tColor, bColor, h, textSize, onHandleClick}) => {
  return (
    <div>
      <button type={type} className={`${bd} ${tColor} ${px} ${py} font-palanquin font-semibold ${bColor} ${h} ${bg} ${textSize} `}
      onClick={onHandleClick}>
       {name}
      </button>
    </div>
  
  )
}

export default Button