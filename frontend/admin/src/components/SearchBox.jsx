import React from 'react'

const SearchBox = () => {
  return (
    <div>
      <input type="text"
        placeholder='Search'
        className='border-2 border-gray-300 px-2 py-1 text-base shadow shadow-gray-300 w-[12rem]'  />
    </div>
  )
}

export default SearchBox