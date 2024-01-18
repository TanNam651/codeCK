import React from 'react'
import classNames from 'classnames'

const FormCheckBox = ({ label, type, name, ml, mt, mr }) => {
  return (

    <div className={classNames('relative', ml, mt)}>
      <input type={type}
        name={name}
        id={name}
        className={classNames(mr)}
      />
      <label htmlFor="remember">{label}</label>

    </div>
  )
}

export default FormCheckBox;
