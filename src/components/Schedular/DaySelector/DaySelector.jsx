import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import styles from './DaySelector.module.css'
import { format, add, isEqual, startOfDay } from 'date-fns'
import { Box, Divider, Stack, Typography } from '@mui/material'
import { NextButton, PrevButton } from './Sliders'

const DaySelector = ({selectedDate, setSelectedDate, totalSlots}) => {

    const date = startOfDay(new Date())
    const dateItems = []
    
    for(let i = 0; i < 7; i++){
        dateItems.push(add(date, {days: i}))
    }

    const customDateFormat = (day) => {
        if (isEqual(date, day)){
            return "Today"
        }
        else if (isEqual(date, add(day, {days: -1}))) {
            return "Tomorrow"
        } 
        else {
            return format(day, 'E, d LLL')
        }
    }

    const handleClick = (day) => {
        setSelectedDate(day)
    }


  return (
    <Stack pt={3} position='relative'>
        <Divider sx={{mb: 3}}/>

        <Swiper
            slidesPerView={4}
            loop={false}
            spaceBetween={11}
            className={styles.swiperStyles}
            breakpoints={{
                767: {
                    spaceBetween: 30,
                    slidesPerView: 3
                }
            }}
        >
            {dateItems.map((day, idx) => (
                <SwiperSlide key={idx} className={styles.swiperslide}>
                    <Stack 
                        textAlign='center'
                        sx={{cursor: 'pointer'}}
                        onClick={() => handleClick(day)}
                    >
                        <Typography
                            fontWeight={isEqual(day, selectedDate) ? 600 : 400}
                            fontSize={{xs: 11, md: 16}}
                        >
                            {customDateFormat(day)}
                        </Typography>

                        <Typography fontSize={{xs: 8, md: 12}} color="#2dd91a">
                            {`${totalSlots} Slots Available`}
                        </Typography>

                        <Box
                            height={{xs: "4px", md: "5px" }}
                            width={{xs: 1, md: '80%'}}
                            position='relative'
                            bottom='0'
                            bgcolor={isEqual(day, selectedDate) ? 'primary.main' : 'rgba(0,0,0,0)'}
                            left={0}
                            mt='5px'
                            mx='auto'
                            zIndex={999}
                        />
                    </Stack>
                </SwiperSlide>
            ))}

            <span slot='container-start'>
                <Box display={{xs: 'none', md: 'block'}}>
                    <PrevButton />
                </Box>
            </span>

            <span slot='container-end'>
                <Box display={{xs: 'none', md: 'block'}}>
                    <NextButton />
                </Box>
            </span>

        </Swiper>

        <Box
            height={{xs: '4px', md: '5px'}}
            width={{xs: 1, md: '80%'}}
            bgcolor='#f0f0f5'
            mt='5px'
            position='absolute'
            bottom={0}
            left='50%'
            sx={{translate: '-50% 0'}}

        />

    </Stack>
  )
}

export default DaySelector