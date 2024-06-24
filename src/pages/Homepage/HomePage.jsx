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
import HeroSection from '../../components/HeroSection/HeroSection'
import SearchBar from '../../components/SearchBar/SearchBar'
import Services from '../../components/Services/Services'

const HomePage = () => {
  return (
    <Box>
      <Box mb={4} sx={{background: "linear-gradient(#E7F0FF, rgba(232, 241, 255, 0.47) 85%, #fff 15%)"}}>
        <NavBar />
        <Container maxWidth='xl'>
          <HeroSection />

          <Stack
            p={{xs: 2, md: 6}}
            gap={7}
            bgcolor='#fff'
            borderRadius='15px'
            boxShadow='0 0 12px rgba(0,0,0,0.1)'
          >
            <SearchBar/>
            <Services />
          </Stack>
        </Container>
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


