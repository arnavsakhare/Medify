import React from 'react'
import { useSwiper } from 'swiper/react'
import next from '../../../assets/next.png'
import prev from '../../../assets/prev.png'
import { Box } from '@mui/material'


function PrevButton() {
  const swiper = useSwiper()

  return (
    <Box
      component='img'
      src={prev}
      onClick={() => swiper.slidePrev()}
      height={48}
      width={48}
      position='absolute'
      left={0}
      top={0}
      sx={{cursor: 'pointer'}}
      zIndex={999}
      bgcolor='#fff'
    />
  )
}


function NextButton() {
  const swiper = useSwiper()

  return (
    <Box
      component='img'
      src={next}
      onClick={() => swiper.slideNext()}
      height={48}
      width={48}
      position='absolute'
      right={0}
      top={0}
      sx={{cursor: 'pointer'}}
      zIndex={999}
      bgcolor='#fff'
    />
  )
}


export { PrevButton, NextButton }