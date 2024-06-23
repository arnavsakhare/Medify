import logo from '../../assets/logo.png'
import twitter from '../../assets/twitter.png'
import yt from '../../assets/yt.png'
import pinterest from '../../assets/pinterest.png'
import fb from '../../assets/fb.png'
import { Box, Container, Grid, Stack, Typography} from '@mui/material'
import FooterLink from './FooterLink'




const Footer = () => {

    const images = [fb, twitter, yt, pinterest];
    const linkOne = ["About Us", "Our Privacy", "Our Gallery", "Appointment", "Privacy Policy"];
    const linkTwo = ["Orthology", "Neurology", "Dental Care", "Opthamology", "Cardiology"];
    

  return (
    <Box bgcolor="primary.secondary" pb={3} pt={6}>
        <Container maxWidth="xl">
            <Grid container spacing={4}>
                <Grid item xs={12} md={4.5}>
                    <Stack alignItems="flex-start" justifyContent="space-between" height={1}>
                        <Box component="img" src={logo} height={36} alt="Medify" mb={2}/>
                        <Stack direction="row" spacing={1.5}>
                            {images.map((img,idx) => (
                                <Box key={idx} component="img" src={img} height={36} />
                            ))}
                        </Stack>
                    </Stack>
                </Grid>

                <Grid item xs={12} md={2.5}>
                    <Stack spacing={2}>
                        {linkOne.map((item, idx) => (
                            <FooterLink key={idx}>{item}</FooterLink>
                        ))}

                    </Stack>
                </Grid>

                <Grid item xs={12} md={2.5}>
                    <Stack spacing={2}>
                        {linkTwo.map((item, idx) => (
                            <FooterLink key={idx}>{item}</FooterLink>
                        ))}

                    </Stack>
                </Grid>

                <Grid item xs={12} md={2.5}>
                    <Stack spacing={2}>
                        {linkOne.map((item, idx) => (
                            <FooterLink key={idx}>{item}</FooterLink>
                        ))}

                    </Stack>
                </Grid>
            </Grid>

            <Typography
                fontWeight={300}
                color="#FFF"
                pt={3}
                mt={5}
                borderTop="1px solid rgba(255, 255, 255, 0.1)"
            >
                CopyRight ©2023 Surya Nursing Home.com. All Rights Reserved 
            </Typography>
        </Container>
    </Box>
  )
}

export default Footer