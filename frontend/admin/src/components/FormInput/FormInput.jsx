import React from 'react'
import classNames from 'classnames'

const FormInput = ({ label, type, placeholder, name, bg, mt, mb, py, value, onChange }) => {
  return (
    <div className={classNames('w-full', 'flex', 'flex-col-reverse', 'justify-center', 'items-center', mt, py)}>

      <input className={classNames('min-w-[90%]', 'py-2', 'border-b', 'border-black', 'outline-none', 'focus:outline-none', 'px-1', 'placeholder:ml-2', bg)}
        type={type}
        placeholder={placeholder}
        name={name}
        id={name}
        value={value}
        onChange={onChange}
      />
      <label className={classNames('min-w-[90%]', 'text-[16px]', mb,)} htmlFor={name}>{label}</label>
    </div>
  )
}




export default FormInput
