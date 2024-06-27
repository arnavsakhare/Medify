import { Alert, Snackbar } from '@mui/material'
import React from 'react'

const CustomSnackBar = ({open, setOpen, message}) => {

  const handleClose = (reason) => {
    if(reason === 'clickaway') {
      return
    }

    setOpen(false)
  }


  return (
    <Snackbar
      open={open}
      autoHideDuration={3000}
      onClose={handleClose}
      anchorOrigin={{vertical: 'bottom', horizontal: 'left'}}
    >
      <Alert
        onClose={handleClose}
        icon={false}
        sx={{
          bgcolor: "#2dd91a",
          color: "#fff"
        }}
      >
        {message}
      </Alert>
    </Snackbar>
  )
}

export default CustomSnackBar