import React from 'react'
import Doctor from '../../assets/Doctor.png'
import Drugstore from '../../assets/Drugstore.png'
import Hospital from '../../assets/Hospital.png'
import Capsule from '../../assets/Capsule.png'
import Ambulance from '../../assets/Ambulance.png'
import { Box, Grid, Typography } from '@mui/material'
import ServiceCard from './ServiceCard'



const Services = () => {

    const services = [
        {img: Doctor, title: "Doctors"},
        {img: Drugstore, title: "Labs"},
        {img: Hospital, title: "Hospitals"},
        {img: Capsule, title: "Medical Store"},
        {img: Ambulance, title: "Ambulance"},
    ]
  return (
    <Box>
        <Typography
            textAlign='center'
            fontSize={20}
            color='#102550'
            fontWeight={500}
            mb={2}
        >
            You may be looking for
        </Typography>

        <Grid container rowSpacing={{xs: 1}} columnSpacing={{xs: 1, md: 3}} justifyContent='center' >
            {services.map((service, idx) => (
                <Grid item key={idx} xs={6} md={2.4} >
                    <ServiceCard img={service.img} title={service.title}/>
                </Grid>
            ))}
        </Grid>
    </Box>
  )
}

export default Services