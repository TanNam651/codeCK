import React from 'react'
import CardHeader from '../../../components/CardHeader'

const TopCustomers = () => {
  return (
    <div className='relative w-1/3 border border-gray-300 px-8 py-4 max-lg:w-full max-lg:justify-center items-center rounded-lg'>
      {/* <div className='relative flex justify-between py-0'>
        <p className='font-semibold font-palanquin text-gray-500'>Top Customers</p>
        <span className='text-sm underline text-blue-500 font-palanquin font-medium'>View All</span>
      </div> */}
      <CardHeader
        title={'Top Customers'}
        py={'0'}
        tSize={'lg'}
        tColor={'gray-500'}
      />
      <div className='relative flex justify-center py-6'>
        <table>
          <thead>
            <tr>
              <th>User</th>
              <th>Total Orders</th>
              <th>Total Spending(5)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Cara Delevingne</td>
              <td>192</td>
              <td>69504</td>
            </tr>
            <tr>
              <td>Cara Delevingne</td>
              <td>192</td>
              <td>69504</td>
            </tr>
            <tr>
              <td>Cara Delevingne</td>
              <td>192</td>
              <td>69504</td>
            </tr>
            <tr>
              <td>Cara Delevingne</td>
              <td>192</td>
              <td>69504</td>
            </tr>
            <tr>
              <td>Cara Delevingne</td>
              <td>192</td>
              <td>69504</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default TopCustomers