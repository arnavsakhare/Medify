import React, {useState} from 'react'
import { format } from 'date-fns'
import { Box, Button, Modal, Stack, TextField, Typography } from '@mui/material'


const BookingModal = ({open, setOpen, bookingDetails, showSuccessMessage}) => {

  const [email, setEmail] = useState("")

  const formatDate = (day) => {
    if (day) {
      const date = new Date(day)
      return format(date, "E, d LLL");
    } else {
      return null;
    }
  }

  const handleBooking = (e) => {
    e.preventDefault()

    const bookings = localStorage.getItem("bookings") || "[]"
    const oldBookings = JSON.parse(bookings)

    localStorage.setItem("bookings", JSON.stringify([...oldBookings, {...bookingDetails, bookingEmail: email}]))
    showSuccessMessage(true)
    setEmail("")
    setOpen(false)

  }


  return (
    <Modal open={open} onClose={() => setOpen(false)}>
      <Box
        sx={{
          width: "95%",
          maxWidth: 600,
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          boxShadow: 24,
          p: {xs: 3, md: 4},
          outline: 0,
          bgcolor: "#fff",
          borderRadius: 2,
        }}
      >
        <Typography variant='h3'>
          Confirm Booking
        </Typography>

        <Typography fontSize={14} mb={3}>
          <Box component='span'>
            Please enter your email to confirm booking for{" "}
          </Box>
          <Box component='span' fontWeight={600}>
            {`${bookingDetails.bookingTime} on ${formatDate(bookingDetails.bookingDate)}`}
          </Box>
        </Typography>

        <form onSubmit={handleBooking}>
          <Stack alignItems='flex-start' spacing={2}>
            <TextField
              type='email'
              label='Enter your email'
              variant='outlined'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              fullWidth
              required
            />

            <Stack direction='row' spacing={2} >
              <Button type='submit' variant='contained' size='large' disableElevation>
                Confirm
              </Button>

              <Button variant='outlined' size='large' onClick={() => setOpen(false)} disableElevation>
                Cancel
              </Button>
            </Stack>
          </Stack>
        </form>
      </Box>
    </Modal>
  )
}

export default BookingModal