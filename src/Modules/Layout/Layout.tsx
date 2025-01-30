
import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'

export default function Layout() {
  return (
    <div className='bg-[#f2f2f2]'>
      <Navbar />
      
      <Outlet />
      <Footer />
    </div>
  )
}
