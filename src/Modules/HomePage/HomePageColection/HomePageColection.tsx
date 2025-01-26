import React from 'react'
import HeroSection from '../HeroSection/HeroSection'
import CourseContent from '../CourseContent/CourseContent'
import FiveResons from '../FiveResons/FiveResons'
import Titles from '../Titles/Titles'
import ClientFeadBack from '../ClientFeadBack/ClientFeadBack'

export default function HomePageColection() {
  return (
    <div>
      <HeroSection />
      <CourseContent />
      <FiveResons />
      <Titles />

      <ClientFeadBack />
    </div>
  )
}
