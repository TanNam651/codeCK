import React from 'react'
import CardHeader from '../../../components/CardHeader'
import RecentCharts from '../../../components/Charts/RecentCharts'

const ProductsAndTranscation = () => {
  return (
    <section className='relative flex max-lg:flex-col max-lg:space-x-0 max-lg:space-y-4 justify-between py-4 space-x-4'>
      <div className='relative w-1/2 border max-lg:w-full border-gray-300 px-8 py-4 rounded-lg'>
        <CardHeader title={'TOP PRODUCTS'}
          py={'0'}
          tSize={'xl'}
          tColor={'gray-500'}
        />
        <div className='relative flex justify-center py-6'>
          <table>
            <thead>
              <tr>
                <th>S.No</th>
                <th>Product Category</th>
                <th>Product Name</th>
                <th>Sale Value</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Chuck Taylor</td>
                <td>Anom</td>
                <td>19</td>
                <td><span className='bg-red-100 px-2 py-[2px] rounded-lg text-center font-semibold text-red-400'>Hot</span></td>
              </tr>
              <tr>
                <td>1</td>
                <td>Chuck Taylor</td>
                <td>Anom</td>
                <td>19</td>
                <td><span className='bg-red-100 px-2 py-[2px] rounded-lg text-center font-semibold text-red-400'>Hot</span></td>
              </tr>
              <tr>
                <td>1</td>
                <td>Chuck Taylor</td>
                <td>Anom</td>
                <td>19</td>
                <td><span className='bg-red-100 px-2 py-[2px] rounded-lg text-center font-semibold text-red-400'>Hot</span></td>
              </tr>
              <tr>
                <td>1</td>
                <td>Chuck Taylor</td>
                <td>Anom</td>
                <td>19</td>
                <td><span className='bg-red-100 px-2 py-[2px] rounded-lg text-center font-semibold text-red-400'>Hot</span></td>
              </tr>
              <tr>
                <td>1</td>
                <td>Chuck Taylor</td>
                <td>Anom</td>
                <td>19</td>
                <td><span className='bg-red-100 px-2 py-[2px] rounded-lg text-center font-semibold text-red-400'>Hot</span></td>
              </tr>
              <tr>
                <td>1</td>
                <td>Chuck Taylor</td>
                <td>Anom</td>
                <td>19</td>
                <td><span className='bg-red-100 px-2 py-[2px] rounded-lg text-center font-semibold text-red-400'>Hot</span></td>
              </tr>
              <tr>
                <td>1</td>
                <td>Chuck Taylor</td>
                <td>Anom</td>
                <td>19</td>
                <td><span className='bg-red-100 px-2 py-[2px] rounded-lg text-center font-semibold text-red-400'>Hot</span></td>
              </tr>
              <tr>
                <td>1</td>
                <td>Chuck Taylor</td>
                <td>Anom</td>
                <td>19</td>
                <td><span className='bg-red-100 px-2 py-[2px] rounded-lg text-center font-semibold text-red-400'>Hot</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      
        <RecentCharts/>
     
    </section>
  )
}

export default ProductsAndTranscation