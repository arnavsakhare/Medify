import React, { useState, useMemo } from 'react'
import SearchIcon from '@mui/icons-material/Search'
import { Button, Stack, TextField } from '@mui/material'

const BookingsSearchBar = ({bookings, setFilteredBookings}) => {

    const [inputText, setInputText] = useState("")

    const filteredList = useMemo(() => {
        if(!inputText.trim()) return bookings;

        return bookings.filter((item) => item["Hospital Name"].toLowerCase().includes(inputText.trim().toLowerCase()))

    }, [inputText, bookings])

    const handleSubmit = (e) => {
        e.preventDefault()
        setFilteredBookings(filteredList)
    }
  return (
    <form onSubmit={handleSubmit}>
        <Stack direction='row' spacing={2}>
            <TextField
                type='text'
                label='Search By Hospital'
                variant='outlined'
                fullWidth
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                inputProps={{maxLength: 100}}
            />

            <Button
                type='submit'
                variant='contained'
                size='large'
                startIcon={<SearchIcon />}
                sx={{py: 1, px: 8, flexShrink: 0}}
                disableElevation
            >
                Search
            </Button>
        </Stack>
    </form>
  )
}

export default BookingsSearchBar