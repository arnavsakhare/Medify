import { Chip, Divider, Stack, Typography } from '@mui/material'
import React from 'react'

const TimeSelector = ({availableSlots, selectedDate, details, handleBooking}) => {

    const CustomChip = ({label, handleClick}) => (
        <Chip
            label={label}
            color='primary'
            variant='outlined'
            onClick={handleClick}
            sx={{
                borderRadius: "5px",
                fontSize: {xs: 10, md: 14},
                cursor: 'pointer',
                mr: {xs: 1, md: 3},
                mt: {xs: 1, md: 1},
            }}
            
        />
    )    

    const handleClick = (slot) => {
        handleBooking({...details, bookingDate: selectedDate, bookingTime: slot})
    }

  return (
    <Stack
        pt={3}
        spacing={{xs: 2, md: 3}}
        divider={<Divider orientation='horizontal' flexItem/>}
    >
        {availableSlots.morning.length > 0 && (
            <Stack direction='row' alignItems='center' flexWrap='wrap' px={{xs: 0, md: 6}}>

                <Typography width={{xs: 1, md: "15%"}} fontSize={{xs: 14, md: 16}}>
                    Morning
                </Typography>

                {availableSlots.morning.map((slot) => (
                    <CustomChip
                        key={slot}
                        label={slot}
                        handleClick={() => handleClick(slot)}
                    />
                ))}
            </Stack>
        )}


        {availableSlots.afternoon.length > 0 && (
            <Stack direction='row' alignItems='center' flexWrap='wrap' px={{xs: 0, md: 6}}>

                <Typography width={{xs: 1, md: "15%"}} fontSize={{xs: 14, md: 16}}>
                    Afternoon
                </Typography>

                {availableSlots.afternoon.map((slot) => (
                    <CustomChip
                        key={slot}
                        label={slot}
                        handleClick={() => handleClick(slot)}
                    />
                ))}
            </Stack>
        )}


        {availableSlots.evening.length > 0 && (
            <Stack direction='row' alignItems='center' flexWrap='wrap' px={{xs: 0, md: 6}}>

                <Typography width={{xs: 1, md: "15%"}} fontSize={{xs: 14, md: 16}}>
                    Evening
                </Typography>

                {availableSlots.evening.map((slot) => (
                    <CustomChip
                        key={slot}
                        label={slot}
                        handleClick={() => handleClick(slot)}
                    />
                ))}
            </Stack>
        )}
    </Stack>
  )
}

export default TimeSelector