import React from 'react'
import PatientCaringBanner from '../../assets/patientcaring.png'
import tickblue from '../../assets/tick-blue.png'
import { Box, Container, Grid, Typography, List, ListItem, ListItemIcon, ListItemText } from '@mui/material' 

const PatientCaring = () => {

    const list = ["Stay Updated About Your Health", "Check your Results Online", "Manage Your Appointments"]

  return (
    <Box sx={{background: "linear-gradient(81deg, #E7F0FF 9.01%, rgba(232, 241, 255, 0.47) 89.11%)"}} py={5}>
        <Container>
            <Grid container spacing={5} alignItems="center">

                <Grid item xs={12} md={6}>
                    <Box
                        component="img"
                        src={PatientCaringBanner}
                        width={1}
                    />
                </Grid>

                <Grid item xs={12} md={6}>
                    <Typography color="primary.main" fontWeight={600}>
                        HELPING PATIENTS AROUND THE GLOBE
                    </Typography>

                    <Typography variant='h2' mb={1}>
                        Patient <Box color="primary.main" component="span" >Caring</Box>
                    </Typography>

                    <Typography color="#77829D">
                        Our goal is to deliver quality of care in a courteous, respectful and compassionate manner. We hope you will allow us to care for you and we strive to be the first and best choice for healthcare. 
                    </Typography>

                    <List sx={{fontSize: {xs: 12, md: 20} }}>

                        {list.map((item, idx) => (
                            <ListItem disableGutters key={idx}>
                            <ListItemIcon sx={{minWidth: 35}}>
                                <Box component="img" src={tickblue} height={22} width={22} />
                            </ListItemIcon>

                            <ListItemText sx={{color: "#1B3C74"}}>
                                {item}
                            </ListItemText>
                               
                        </ListItem>
                        ))}
                    </List>
                </Grid>
            </Grid>
        </Container>
    </Box>
  )
}

export default PatientCaring
