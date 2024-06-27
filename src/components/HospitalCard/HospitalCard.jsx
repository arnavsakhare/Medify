import React, {useState} from 'react'
import hospitalicon from '../../assets/hospitalicon.png'
import thumbup from '../../assets/thumbsup.png'
import { format } from 'date-fns'
import { Box, Button, Chip, Divider, Stack, Typography } from '@mui/material'
import Schedular from '../Schedular/Schedular'

const HospitalCard = ({ details, availableSlots, handleBooking, booking = false}) => {

  const [showCalendar, setShowCalendar] = useState(false)


  return (
    <Box
        sx={{bgcolor: '#fff', borderRadius: 2, p: {xs: 2, md: 4}}}
    >
        <Stack direction={{xs: 'column', md: 'row'}} spacing={{xs: 2, md: 4}} flexWrap="wrap">
            <Box
                component='img'
                src={hospitalicon}
                sx={{flexShrink: 0, alignSelf: 'start'}}
                width={{xs: 60, md: 120}}
                height='auto'
            />

            <Box flex={1}>
                <Typography color='primary.main' fontSize={{xs: 17, md: 19}} fontWeight={600} textTransform='capitalize' md={1} >
                    {details["Hospital Name"].toLowerCase()}
                </Typography>

                <Typography textTransform={"capitalize"} color='#414141' fontWeight={600} fontSize={14}>
                    {`${details["City"].toLowerCase()}, ${details["State"]}`}
                </Typography>

                <Typography mb={1} fontSize={14}>
                    {details["Hospital Type"]}
                </Typography>

                <Stack direction='row' flexWrap='wrap' mb={2} spacing={2}>
                    <Typography color='#2dd91a' fontWeight={600}>
                        Free
                    </Typography>

                    <Typography sx={{textDecoration: "line-through", color: "#787887"}}>
                        $500
                    </Typography>

                    <Typography>
                        Consultation fee at clinic
                    </Typography>
                </Stack>

                <Divider sx={{borderStyle: 'dashed', mb: 2}} />

                <Stack
                    direction='row'
                    alignItems='center'
                    bgcolor='#2dd91a'
                    py='4px'
                    px={1}
                    borderRadius={1}
                    spacing={1}
                    width='fit-content'
                >
                    <Box
                        component='img'
                        src={thumbup}
                        width={{xs: 16, md: 20}}
                        height={{xs: 16, md: 20}}
                    />

                    <Typography fontWeight={500} color='#fff' sx={{opacity: 0.5}} fontSize={{xs: 14, md: 16}}>
                        {details["Hospital overall rating"] == "Not Available" ? 0 : details["Hospital overall rating"]}
                    </Typography>
                </Stack>
            </Box>

            <Stack justifyContent={booking ? "flex-start" : "flex-end"}>
                {!booking && (
                    <>
                        <Typography 
                            textAlign='center' 
                            color='#2dd91a'
                            fontWeight={500}
                            fontSize={14}
                            mb={2}
                        >
                            Available Today
                        </Typography>

                        <Button variant='contained' disableElevation onClick={() => setShowCalendar((prev) => !prev)}>
                            {!showCalendar ? "Book FREE Center Visit" : "Hide Booking Calendar"}
                        </Button>
                    </>
                )}

                {booking && (
                    <Stack direction='row' spacing={1} mt={{xs: 2, md: 0}}> 
                        <Chip
                            label={details.bookingTime}
                            variant='outlined'
                            color='primary'
                            sx={{borderRadius: 1, fontSize: 14}}
                        />

                        <Chip
                            label={format(new Date(details.bookingDate), "dd MMMM yyyy")}
                            variant='outlined'
                            color='primary'
                            sx={{borderRadius: 1, fontSize: 14}}
                        />
                    </Stack>
                )}
            </Stack>
        </Stack>

        {showCalendar && (
            <Schedular
                details={details}
                availableSlots={availableSlots}
                handleBooking={handleBooking}
            />
        )}
    </Box>  
  )
}

export default HospitalCard