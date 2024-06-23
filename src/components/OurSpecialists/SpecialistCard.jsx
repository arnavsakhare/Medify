import React from 'react'
import { Box, Typography } from '@mui/material'

const SpecialistCard = ({image, title, designation}) => {
  return (
    <Box textAlign="center">
        <Box
            component="img"
            src={image}
            width={1}
            mb={2}
            
        />
        
        <Typography fontSize={{xs: 16, md: 24}} color="#1B3C74">
            {title}
        </Typography>

        <Typography color="primary.main" fontWeight={500} fontSize={{xs: 14, md: 16}}>
            {designation}
        </Typography>
    </Box>
  )
}

export default SpecialistCard