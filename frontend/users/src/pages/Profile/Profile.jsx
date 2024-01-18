import React from 'react'
import { sidebars } from '../../constants'
import Sidebar from '../../section/Sidebar'
import Button from '../../components/Button'

const Index = () => {
  return (
    <div className='relative w-full'>
      <div className='relative flex justify-between items-center border-b-2 py-2 '>
        <h2 className='relative text-3xl font-semibold font-palanquin'>Profile</h2>
        <Button
          type={"button"}
          name={"Edit"}
          bd={"2"}
          px={"2"}
          py={"0"}
          cl={"green-500"}
        />
      </div>
      <div>
        <table className='relative w-full'>
          <tbody>
            <tr>
              <th>Name</th>
              <th>Shoes size</th>
              <th>Email</th>
            </tr>
            <tr>
              <td>Dat</td>
              <td>Not yet</td>
              <td>admin@gmail.com</td>
            </tr>
            <tr className='my-8'>
              <th>UserName</th>
              <th>Reset password</th>
            </tr>
            <tr>
              <td>admin@gmail.com</td>
              <td>
                <Button type={"button"}
                  name={"Reset password"}
                  bd={"2"}
                  px={"2"}
                  py={"0"}
                  cl={"red-500"}
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
   </div>
  )
}

export default Index