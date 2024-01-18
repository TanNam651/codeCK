import React from 'react'
import classNames from 'classnames'
const Input = ({ label, type, placeholder, name, mb, value, onChange }) => {
  
  

  return (
    <div className={`w-full px-10 flex flex-col-reverse`}>
      {type === 'text' ? <input className={`w-full h-12 rounded-lg border-1 shadow-2xl border-black placeholder:ml-2 px-2 text-xl `}
        type={type}
        placeholder={placeholder}
        name={name}
        id={name}
        value={value}
        onChange={onChange}
      /> : (
          type === "date" ? <input className={`w-full h-12 rounded-lg border-1 shadow-2xl border-black placeholder:ml-2 px-2 text-xl `}
            type={'date'}
            placeholder={placeholder}
            name={name}
            id={name}
            value={value}
            onChange={onChange} />:<textarea className='w-full rounded-lg border-2 border-black placeholder:ml-2 px-2 text-xl py-2' rows={3} />
      )
      }
      
      <label className={classNames('min-w-[90%]', 'text-[20px] mb-2', mb,)} htmlFor={name}>{label}</label>
    </div>
  )
}

export default Input