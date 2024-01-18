import React from 'react'

const SearchBox = ({placeholder,w}) => {
  return (
    <div className='relative w-full max-w-2xl'>
      <input type="text"
        placeholder={placeholder}
        className={`border-2 border-gray-300 px-2 py-1 text-base shadow shadow-gray-300 h-full w-full `} />
    </div>
  )
}

export default SearchBox