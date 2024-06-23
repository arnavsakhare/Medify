import React from 'react'
import offer1 from '../../assets/offer1.png'
import offer2 from '../../assets/offer2.png'
import { Box, Container } from '@mui/material'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'
import 'swiper/css'

const Offers = () => {

    const offers = [offer1, offer2, offer1, offer2, offer1, offer2];

  return (
    <Box py={6}>
        <Container maxWidth='xl'>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                modules={[Pagination]}
                pagination={{
                    clickable: true
                }}
                breakpoints={{
                    767: {
                        slidesPerView: 3
                    }
                }}
            >

                {offers.map((offer, idx) => (
                    <SwiperSlide key={idx}>
                        <Box component="img" src={offer}/>
                    </SwiperSlide>
                ))}
                
            </Swiper>
        </Container>
    </Box>
  )
}

export default Offers