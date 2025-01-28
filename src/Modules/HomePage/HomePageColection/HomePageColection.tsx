import HeroSection from '../HeroSection/HeroSection'
import CourseContent from '../CourseContent/CourseContent'
import FiveResons from '../FiveResons/FiveResons'
import Titles from '../Titles/Titles'
import ClientFeadBack from '../ClientFeadBack/ClientFeadBack'
import Finaly from '../Finaly/Finaly'
import Form from '../Form/form'
import { FaWhatsapp } from 'react-icons/fa'


export default function HomePageColection() {
  return (
    <div className='relative'>
      <HeroSection />
      <CourseContent />
      <FiveResons />
      <Titles />
      <Finaly />
      <ClientFeadBack />
      <Form />
      <button className="fixed bottom-4 right-4 w-16 h-16 rounded-full bg-blue-600 text-white text-2xl shadow-lg hover:bg-blue-700 transition-all duration-300 flex items-center justify-center">
        <FaWhatsapp className="me-4"/>
    </button>
    </div>
  )
}
