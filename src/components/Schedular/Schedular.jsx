import React, {useState} from 'react'
import { startOfDay } from 'date-fns'
import { Box } from '@mui/material'
import DaySelector from './DaySelector/DaySelector'
import TimeSelector from './TimeSelector/TimeSelector'

const Schedular = ({ availableSlots, details, handleBooking }) => {

  const [selectedDate, setSelectedDate] = useState(startOfDay(new Date()))

  const totalSlots = 
    availableSlots.morning.length +
    availableSlots.afternoon.length +
    availableSlots.evening.length
                      

  return (
    <Box>
      <DaySelector
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
        totalSlots={totalSlots}

      />

      <TimeSelector
        availableSlots={availableSlots}
        selectedDate={selectedDate}
        details={details}
        handleBooking={handleBooking}
      />
    </Box>
  )
}

export default Schedular