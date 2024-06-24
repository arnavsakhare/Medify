import React from 'react'
import { Box, Stack, Typography } from '@mui/material'

const IconCard = ({img, title}) => {
  return (
    <Stack
        spacing={2}
        p={3}
        alignItems="center"
        bgcolor="#FFFFFF"
        borderRadius={2}
        border={0}
        boxShadow="0 0 24px rgba(0,0,0,0.1)"
        sx={{height: '100%'}}
    >
        <Box component="img" src={img} height={50} width={50}/>
        <Typography
            color="#ABB6C7"
            fontSize={18}
            fontWeight={400}
        >
            {title}
        </Typography>
    </Stack>
  )
}

export default IconCard