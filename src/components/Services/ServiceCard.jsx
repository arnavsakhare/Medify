import { Box, Stack, Typography } from '@mui/material'
import React from 'react'

const ServiceCard = ({img, title}) => {
  return (
    <Stack
        alignItems='center'
        spacing={2}
        p={3}
        bgcolor='#FAFBFC'
        borderRadius={2}
        sx={{height: "100%"}}
        
    >
        <Box
            component='img'
            src={img}
            height={60}
            width={60}
        />

        <Typography
            color='#ABB6C7'
            fontWeight={400}
            fontSize={16}
            textAlign='center'
        >
            {title}
        </Typography>
    </Stack>
  )
}

export default ServiceCard