import React from 'react'
import  Ahmad from '../../assets/ahmad.png'
import  Heena from '../../assets/heena.png'
import  Ankur from '../../assets/ankur.png'
import { Box, Typography } from '@mui/material'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import SpecialistCard from './SpecialistCard'


const OurSpecialists = () => {

    const specialists = [
        {image: Heena, title: "Dr. Heena Sachdeva", designation: "Orthopadics"},
        {image: Ankur, title: "Dr. Ankur Sharma", designation: "Medicine"},
        {image: Ahmad, title: "Dr. Ahmad Khan", designation: "Neurologist"},
        {image: Heena, title: "Dr. Heena Sachdeva", designation: "Orthopadics"},
        {image: Ankur, title: "Dr. Ankur Sharma", designation: "Medicine"},
        {image: Ahmad, title: "Dr. Ahmad Khan", designation: "Neurologist"},
    ]
  return (
    <Box py={4}>
        <Typography variant='h2' textAlign="center" mb={3}>
            Our Medical Specialists
        </Typography>

        <Swiper
            slidesPerView="2"
            spaceBetween={20}
            loop={true}
            modules={[Autoplay, Pagination]}
            pagination={{
                clickable: true
            }}
            autoplay={{
                delay: 3000,
                disableOnInteraction: false
            }}
            breakpoints={{
                767: {
                    slidesPerView: 4
                }
            }}
        >
            {specialists.map((item, idx) => (
                <SwiperSlide key={idx}>
                    <SpecialistCard image={item.image} title={item.title} designation={item.designation}/>
                </SwiperSlide>
            ))}
            
        </Swiper>
        
    </Box>
  )
}

export default OurSpecialists