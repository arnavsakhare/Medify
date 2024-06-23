import React from 'react'
import { Box, Container, Stack } from '@mui/material'
import Offers from '../../components/Offers/Offers'
import FindBySpecialisation from '../../components/FindBySpecialisation/FindBySpecialisation'
import OurSpecialists from '../../components/OurSpecialists/OurSpecialists'
import PatientCaring from '../../components/PatientCaring/PatientCaring'

const HomePage = () => {
  return (
    <Box>
      <Offers />
      <FindBySpecialisation />
      <OurSpecialists />
      <PatientCaring />
    </Box>
  )
}

export default HomePage