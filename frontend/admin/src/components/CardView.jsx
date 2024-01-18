import React from 'react'

const CardView = ({ icon, statiscs, name, bColor, shadow,  py, my, iSize, tSize, sSize, tColor }) => {
  return (
    <div className={`relative flex border justify-around items-center w-full ${my} max-w-[300px] shadow rounded-lg gap-2 ${bColor} ${py} ${shadow} ${my}`}>
      <div>

        <i className={`${iSize}`}>{icon}</i>
      </div>
      <div>
        <p className={`font-semibold ${tSize} py-4`}>{statiscs}</p>
        <span className={`${sSize} ${tColor}` }>{name}</span>
      </div>
    </div>
  )
}

export default CardView