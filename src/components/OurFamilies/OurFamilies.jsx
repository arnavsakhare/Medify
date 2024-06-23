import React from 'react'
import banner from '../../assets/our-families-banner.png'
import { Box, Container, Grid, Typography } from '@mui/material'


const OurFamilies = () => {
  return (
    <Box pt={4} sx={{background: "linear-gradient(81deg, #E7F0FF 9.01%, rgba(232, 241, 255, 0.47) 89.11%)" }} >
        <Container>
            <Grid container alignItems="center" spacing={{xs: 2, md: 10}}>

                <Grid item xs={12} md={6}>
                    <Typography color="primary.main" fontWeight={600}>
                        CARING FOR THE HEALTH OF YOU AND YOUR FAMILY
                    </Typography>

                    <Typography variant='h2'>
                        Our Families
                    </Typography>

                    <Typography color="#77829D" lineHeight={1.5}>
                        We will work with you to develop idividualised plans, including management of chronic diseases. If we cannot assist, we can provide referrals or advice about the type of practitioner you require. We treat all enquiries sensitively and in the strictest confidence. 
                    </Typography>
                </Grid>

                <Grid item xs={12} md={6}>
                    <Box
                        component="img"
                        src={banner}
                        width={1}
                        height="auto"
                    />
                </Grid>
            </Grid>
        </Container>
    </Box>  
  )
}

export default OurFamilies