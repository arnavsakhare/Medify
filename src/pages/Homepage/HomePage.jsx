import React from 'react'
import { Box, Container, Stack } from '@mui/material'
import Offers from '../../components/Offers/Offers'
import FindBySpecialisation from '../../components/FindBySpecialisation/FindBySpecialisation'

const HomePage = () => {
  return (
    <Box>
      <Offers />
      <FindBySpecialisation />
    </Box>
  )
}

export default HomePage