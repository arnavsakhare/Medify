import React, {useState, useEffect} from 'react'
import SearchIcon from '@mui/icons-material/Search'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { Box, Button, InputAdornment, MenuItem, Select } from '@mui/material'




const SearchBar = () => {

    const [states, setStates] = useState([])
    const [cities, setCities] = useState([])
    const [formDetails, setFormDetails] = useState({state: "" , city: "" })
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();

        if(formDetails.state && formDetails.city) {
            navigate(`/search?state=${formDetails.state}&city=${formDetails.city}`)
        }
    }

    const handleChange = (e) => {
        const {name, value} = e.target
        setFormDetails((prev) => ({...prev, [name]: value}))
    }

    useEffect(() => {
        const fetchStates = async () => {
            try {
                const res = await axios.get("https://meddata-backend.onrender.com/states")
                setStates(res.data)

            } catch (error) {
                console.log("Error::", error)
            }
        }

        fetchStates()
    }, [])


    useEffect(() => {
        const fetchCities = async () => {

            setCities([])
            setFormDetails((prev) => ({...prev, city: "" }))

            try {
              const  res = await axios.get(`https://meddata-backend.onrender.com/cities/${formDetails.state}`)
              setCities(res.data)

            } catch (error) {
                console.log("Error::", error)
            }
        }

        if(formDetails.state !== ""){
            fetchCities()
        }
        
    }, [formDetails.state])

  return (
    <Box
        component='form'
        onSubmit={handleSubmit}
        sx={{display: 'flex', justifyContent: 'space-between', gap: {xs: 2, md: 5}, flexDirection: {xs: 'column', md: 'row'}}}
    >
        <Select
            displayEmpty
            id='state'
            name='state'
            value={formDetails.state}
            sx={{minWidth: 200, width: "100%"}}
            onChange={handleChange}
            startAdornment={
                <InputAdornment position='start'>
                    <SearchIcon />
                </InputAdornment>
            }
            required
        >
            <MenuItem selected value="" disabled>
                State
            </MenuItem>

            {states.map((state) => (
                <MenuItem key={state} value={state}>
                    {state}
                </MenuItem>
            ))}

        </Select>


        <Select
            displayEmpty
            id='city'
            name='city'
            value={formDetails.city}
            sx={{minWidth: 200, width: "100%"}}
            onChange={handleChange}
            startAdornment={
                <InputAdornment position='start'>
                    <SearchIcon />
                </InputAdornment>
            }
            required
        >
            <MenuItem selected value="" disabled>
                City
            </MenuItem>

            {cities.map((city) => (
                <MenuItem key={city} value={city}>
                    {city}
                </MenuItem>
            ))}

        </Select>


        <Button 
            type='submit'
            variant='contained'
            size='large'
            startIcon={<SearchIcon />}
            disableElevation
            sx={{px: 6, flexShrink: 0}}
        >
            Search
        </Button>
    </Box>
  )
}

export default SearchBar