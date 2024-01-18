import React from 'react'

const Button = ({ type, name, bd, bg, px, py, bColor, tColor, tSize, handleOnClick, disableStatus }) => {
  return (
    <div>
      <button type={type} className={`${bColor} ${bd} ${tColor} ${px} ${py} font-palanquin font-semibold ${tColor} whitespace-nowrap ${bg} ${tSize} rounded-md`}
        onClick={() => handleOnClick()}
        disabled={disableStatus?true:false}
      >
        {name}
      </button>
    </div>

  )
}

export default Button