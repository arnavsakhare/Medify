import React from 'react'
import { Box, Container, Stack } from '@mui/material'
import Offers from '../../components/Offers/Offers'
import FindBySpecialisation from '../../components/FindBySpecialisation/FindBySpecialisation'
import OurSpecialists from '../../components/OurSpecialists/OurSpecialists'
import PatientCaring from '../../components/PatientCaring/PatientCaring'
import BlogPost from '../../components/BlogPost/BlogPost'
import OurFamilies from '../../components/OurFamilies/OurFamilies'
import FAQSection from '../../components/FAQSection/FAQSection'

const HomePage = () => {
  return (
    <Box>

      <Offers />
      <FindBySpecialisation />
      <OurSpecialists />
      <PatientCaring />
      <BlogPost />
      <OurFamilies />
      <FAQSection />
    </Box>
  )
}

export default HomePage