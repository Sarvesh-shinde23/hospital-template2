import BookAppointment from '@/components/Bookappointment'
import Contact from '@/components/Contact'
import Doctors from '@/components/Doctors'
import Hero from '@/components/Hero'
import News from '@/components/News'
import Services from '@/components/Service'
import Specialties from '@/components/Specialities'
import Welcome from '@/components/Welcome'

import React from 'react'

const page = () => {
  return (
    <>
    <Hero />
      <Welcome />
      <Services />
      <Specialties />
      <BookAppointment />
      <Doctors />
      <News />
      <Contact />
    </>

  )
}

export default page