import React from 'react'

const Table = ({data}) => {
  return (
    <table>
      <thead className='bg-blue-300'>
        <tr>
          <th></th>
          <th>Id</th>
          <th>Category</th>
          <th>Name</th>
          <th>Price</th>
          <th>Number</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {data.map(d => (
          <tr>
            <td>
              <input type="checkbox" />
            </td>
            <td>{d._id}</td>
            <td>{ d.category}</td>
            <td>{ d.name}</td>
            <td>{d.retail_price}</td>
            <td>{d.quantity}</td>
            <td>Regular</td>
          </tr>
        ))}
      </tbody>
      <tbody>
        
      </tbody>
    </table>
    
  )
}

export default Table