import { BsBag, BsBoxes, BsCart2, BsPersonBoundingBox, BsShop } from 'react-icons/bs'
import { HiOutlineViewGrid } from 'react-icons/hi'
import { SlChart } from 'react-icons/sl'
import { FaFacebookF } from 'react-icons/fa'
import { PiCurrencyCircleDollar } from 'react-icons/pi'

export const sidebars = [
  {
    icon: <HiOutlineViewGrid className='icon'/>,
    name: 'Dashboard',
    to: '/',
    seleted: true
  },
  {
    icon: <BsPersonBoundingBox className=''/>,
    name: 'Customers',
    to: '/customers',
    seleted: false
  },
  {
    icon: <BsBoxes />,
    name: 'Products',
    to: '/products',
    seleted: false
  },
  {
    icon: <BsCart2 />,
    name: 'Orders',
    to: '/order',
    seleted: false
  },
  {
    icon: <SlChart />,
    name: 'Analytics',
    to: '/analytics',
    seleted: false
  },
]

export const overviews = [
  {
    icon: <BsBag />,
    name: 'Total Sales',
    statistics: '1,995'
  },
  {
    icon: <BsShop />,
    name: 'Revenue',
    statistics: '3,252'
  },
  {
    icon: <FaFacebookF />,
    name: 'Followers',
    statistics: '9,999'
  },
  {
    icon: <PiCurrencyCircleDollar />,
    name: "Today's Money",
    statistics: '17,540'
  }
]