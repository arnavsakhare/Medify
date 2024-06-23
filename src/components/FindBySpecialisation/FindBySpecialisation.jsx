import React from 'react'
import Dentistry from '../../assets/Drugstore.png'
import PrimaryCare from '../../assets/primary-care.png'
import Cardiology from '../../assets/cardiology.png'
import MRI from '../../assets/mri.png'
import BloodTest from '../../assets/blood-test.png'
import Piscologist from '../../assets/piscologist.png'
import XRay from '../../assets/X-Ray.png'
import { Box, Button, Container, Typography, Grid } from '@mui/material'
import IconCard from './IconCard'

const FindBySpecialisation = () => {

    const specialisations = [
        {icon: Dentistry, title: "Dentistry"},
        {icon: PrimaryCare, title: "Primary Care"},
        {icon: Cardiology, title: "Cardiology"},
        {icon: MRI, title: "MRI Resonance"},
        {icon: BloodTest, title: "Blood Test"},
        {icon: Piscologist, title: "Piscologist"},
        {icon: Dentistry, title: "Laboratory"},
        {icon: XRay, title: "X-Ray"},
    ]


  return (
    <Box py={6} sx={{ background: "linear-gradient(81deg, #E7F0FF 9.01%, rgba(232, 241, 255, 0.47) 89.11%)"}} >
        <Container sx={{textAlign: "center"}}>
            <Typography variant='h2' mb={4}>
                Find by Specialisation
            </Typography>

            <Grid container mb={5} justifyContent="center" spacing={{xs: 1, md: 3}}>
                {specialisations.map((item, idx) => (
                    <Grid item xs={6} md={3} key={idx} >
                        <IconCard img={item.icon} title={item.title} />
                    </Grid>
                ))}
            </Grid>

            <Button
                variant='contained'
                size='large'
            >
                View All
            </Button>
        </Container>
    </Box>
  )
}

export default FindBySpecialisation