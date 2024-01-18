import classNames from 'classnames'
import React from 'react'

const FormButton = ({ text, type, bg, mt, py, textSize, textColor, bd, handleClick }) => {
  return (
    <div>

      <div className={classNames('relative', mt, 'flex', 'justify-center', 'items-center')}>
        <button type={type}
          onClick={handleClick}
          className={classNames('w-[90%]', py, bg, 'rounded-sm', 'flex', 'justify-center', 'items-center', textSize, textColor, 'font-montserrat font-medium', bd
          )}>
          {text}
        </button>
      </div>
    </div>
  )
}

export default FormButton
