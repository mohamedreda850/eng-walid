import HeroSection from '../HeroSection/HeroSection'
import CourseContent from '../CourseContent/CourseContent'
import FiveResons from '../FiveResons/FiveResons'
import Titles from '../Titles/Titles'
import ClientFeadBack from '../ClientFeadBack/ClientFeadBack'
import Finaly from '../Finaly/Finaly'
import Form from '../Form/Form'
import { FaWhatsapp } from 'react-icons/fa'


export default function HomePageColection() {
  return (
    <div className='relative'>
      <HeroSection />
      <FiveResons />
      <CourseContent />
      <Titles />
      <Finaly />
      <ClientFeadBack />
      <Form />
      <button aria-label='whats-app' className="fixed bottom-4 right-4 w-16 h-16 rounded-full bg-[#0380C0] text-white text-2xl shadow-lg hover:bg-[#276381] hover:shadow-lg transition-all duration-300 text-center flex items-center justify-center">
        <a href='https://wa.me/201111137851?text=Hello%20I%20have%20a%20question' target='_blank' aria-label='got to whats app'><FaWhatsapp className="text-4xl"/></a>
    </button>
    </div>
  )
}
