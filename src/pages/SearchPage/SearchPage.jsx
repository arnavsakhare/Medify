import React, { useEffect, useState } from 'react'
import NavBar from '../../components/NavBar/NavBar'
import { Box, Container, Stack, Typography } from '@mui/material'
import SearchBar from '../../components/SearchBar/SearchBar'
import { useSearchParams } from 'react-router-dom'
import icon from '../../assets/tick.png'
import cta from '../../assets/cta.png'
import axios from 'axios'
import HospitalCard from '../../components/HospitalCard/HospitalCard'



const SearchPage = () => {

    const [searchParams, setSearchParams] = useSearchParams()
    const [state, setState] = useState(searchParams.get("state"))
    const [city, setCity] = useState(searchParams.get("city"))
    const [hospitals, setHospitals] = useState([])
    const [loading, setLoading] = useState(false)
    const [bookingDetails, setBookingDetails] = useState({})
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [BookingSuccess, setBookingSuccess] = useState(false)

    const availableSlots = {
        morning: ["11:30 AM"],
        afternoon: ["12:00 PM", "12:30 PM", "01:30 PM", "02:00 PM", "02:30 PM"],
        evening: ["06:00 PM", "06:30 PM", "07:00 PM", "07:30 PM"],
    }

    const handleBookingModal = () => {

    }

    useEffect(() => {
        const getHospitals = async () => {
            setHospitals([])
            setLoading(true)

            try {
                const res = await axios.get(`https://meddata-backend.onrender.com/data?state=${state}&city=${city}`)
                setHospitals(res.data)
                setLoading(false)

            } catch (error) {
                console.log("Error::", error)
            }
        }

        if(state && city) {
            getHospitals()
        }

    }, [state, city])


    useEffect(() => {
        setState(searchParams.get("state"))
        setCity(searchParams.get("city"))
    }, [searchParams])

  return (
    <>
      <NavBar />
      <Box
        sx={{background: "linear-gradient(#EFF5FE , rgba(241, 247, 255, 0.5))"}}
      >
        <Box
            sx={{
                background: "linear-gradient(90deg, #2AA7FF, #0C8CE5)",
                position: "relative",
                borderRadius: "0 0 10px 10px"
            }}
        >
            <Container
                maxWidth='xl'
                sx={{
                    background: "#fff",
                    p: 3,
                    borderRadius: 2,
                    boxShadow: "0 0 10px rgba(0,0,0,0.1)",
                    transform: "translatey(50px)",
                    mb: 5,
                }}
            >
                <SearchBar />
            </Container>
        </Box>

        <Container maxWidth='xl' sx={{py: 10, px: {xs: 0, md: 4}}}>
            {hospitals.length > 0 && (
                <Box mb={3}>
                    <Typography fontSize={25} mb={2} fontWeight={500}>
                        {`${hospitals.length} medical centers available in `}
                        <span style={{textTransform: "capitalize"}}>{city.toLocaleLowerCase()}</span>
                    </Typography>

                    <Stack direction='row' spacing={1}>
                        <img src={icon} alt="icon" height={24} width={24}/>
                        <Typography color="#787887">
                            Book appointments with minimun wait-time and verified doctor details
                        </Typography>
                    </Stack>
                </Box>
            )}

            <Stack direction={{xs: "column", md: "row"}} spacing={{xs: 4, md: 4}}>
                <Stack
                    spacing={3}
                    width={{xs: 1, md: 1}}
                >
                    {hospitals.length > 0 && (

                        hospitals.map((hospital) => (
                            <HospitalCard
                                key={hospital["Hospital Name"]}
                                details={hospital}
                                availableSlots={availableSlots}
                                handleBooking={handleBookingModal}
                            />
                        ))
                    )}

                    {loading && (
                        <Typography variant='h3' bgcolor='#fff' p={3} borderRadius={2}>
                            Loading...
                        </Typography>
                    )}

                    {!state && (
                        <Typography variant='h3' bgcolor='#fff' p={3} borderRadius={2}>
                            Please select a state and a city
                        </Typography>
                    )}
                </Stack>

                <img src={cta} alt="banner" width={350} height='auto'/>
            </Stack>
        </Container>
      </Box>
    </>
  )
}

export default SearchPage