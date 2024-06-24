import React from 'react'
import HeroBanner from '../../assets/home.webp'
import { Link } from 'react-router-dom'
import { Box, Button, Stack, Typography } from '@mui/material'

const HeroSection = () => {
  return (
    <Stack direction={{xs: 'column', md: 'row'}} alignItems='center' pt={2} spacing={6}>
        <Box>
            <Typography variant='h3'>
                Skip the travel! Find Online
            </Typography>

            <Typography variant='h1'>
                Medical <span style={{color: '#2AA7FF'}}>Centers</span>
            </Typography>

            <Typography color='#5C6169' fontSize={{md: 20}} mb={3}>
                Connect instantly with a 27x7 specialist or choose to video visit a particular doctor.
            </Typography>

            <Link>
                <Button variant='contained' size='large' disableElevation>
                    Find Centers
                </Button>
            </Link>
        </Box>

        <Box
            component='img'
            src={HeroBanner}
            width={{xs: 1, md: "50%"}}
        />
    </Stack>
  )
}

export default HeroSection