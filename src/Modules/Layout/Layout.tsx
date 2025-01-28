
import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'

export default function Layout() {
  return (
    <div className='bg-[#f2f2f2]'>
      <Navbar />
      
      <Outlet />
    </div>
  )
}
