import React from 'react'
import mobile from '../../assets/mobile.jpg';
import playstore from '../../assets/playstore.png';
import apple from '../../assets/apple-logo.png';
import arrow from '../../assets/down-arr.png';
import { Box, Container, Grid, InputAdornment, TextField, Typography, Button, Stack } from '@mui/material';



const Download = () => {
  return (
    <Box sx={{background: "linear-gradient(81deg, #E7F0FF 9.01%, rgba(232, 241, 255, 0.47) 89.11%)", pt: 5}}>
        <Container>
            <Grid container spacing={3} alignItems="center">
                <Grid item xs={12} md={6}>
                    <Box src={mobile} component="img" width={1} height="auto"/>
                </Grid>

                <Grid item xs={12} md={6}>
                    <Box
                        position='relative'
                        pl={{xs: "36px", md: "50px"}}
                        mb={{xs: 4, md: 0}}
                    >
                        <Typography variant="h2" mb={2}>
                            Download the
                            <br />
                            <Box component="span" color="primary.main">
                                Medify{ }
                            </Box>
                            App
                        </Typography>

                        <Box
                            src={arrow}
                            component="img"
                            width={{xs: 24, md: 40}}
                            position="absolute"
                            left={0}
                            top={50}
                        />

                        <Box mb={5}>
                            <Typography fontWeight={600} mb={1}>
                                Get the link to download the app
                            </Typography>

                            <Box component="form" sx={{display: "flex", gap: 2, flexDirection: {xs: "column", md: "row"} }}>
                                <TextField
                                    sx={{border: "1px solid #F0F0F0", flex: 1}}
                                    placeholder='Enter Phone Number'
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position='start'>
                                                +91
                                            </InputAdornment>
                                        )
                                    }}
                                    required
                                />

                                <Button type='submit' size='large' variant='contained'>Send SMS</Button>
                            </Box>
                        </Box>

                        <Stack direction={{xs: 'column', md: 'row'}} spacing={{xs: 1, md: 2}}>
                            <Button
                                sx={{bgcolor: "#333", color: "#FFF", py: 1.5, borderRadius: 1.5}}
                                size='large'
                                variant='contained'
                                startIcon={<img src={playstore} height={24} />}
                            >
                                Google Play
                            </Button>

                            <Button
                                sx={{bgcolor: "#333", color: "#FFF", py: 1.5, borderRadius: 1.5}}
                                size='large'
                                variant='contained'
                                startIcon={<img src={apple} height={24} />}
                            >
                                App Store
                            </Button>
                        </Stack>

                    </Box>
                </Grid>
            </Grid>
        </Container>
    </Box>
  )
}

export default Download

