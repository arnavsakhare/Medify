import React from 'react'
import { Box, Container, Stack } from '@mui/material'
import Offers from '../../components/Offers/Offers'
import FindBySpecialisation from '../../components/FindBySpecialisation/FindBySpecialisation'
import OurSpecialists from '../../components/OurSpecialists/OurSpecialists'
import PatientCaring from '../../components/PatientCaring/PatientCaring'
import BlogPost from '../../components/BlogPost/BlogPost'
import OurFamilies from '../../components/OurFamilies/OurFamilies'
import FAQSection from '../../components/FAQSection/FAQSection'
import NavBar from '../../components/NavBar/NavBar'

const HomePage = () => {
  return (
    <Box>
      <Box mb={4}>
        <NavBar />
      </Box>

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