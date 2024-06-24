import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'
import { Box, Container, Stack, Typography, Button, useMediaQuery, IconButton, List, ListItemButton, ListItemText, Drawer, ListItem } from '@mui/material'
import styles from './Navbar.module.css'
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';


const NavBar = () => {

    const onMobile = useMediaQuery('(max-width: 900px)');
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }
    
        setMenuOpen(open);
    };

    const list = () => (
        <Box
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
            className={styles.drawerLinks}
        >
            <List>
                <Link to="/search">
                    <ListItemButton>
                        <ListItemText primary="Find Doctors"/>
                    </ListItemButton>
                </Link>

                <Link to="/search">
                    <ListItemButton>
                        <ListItemText primary="Hospitals"/>
                    </ListItemButton>
                </Link>

                <Link>
                    <ListItemButton>
                        <ListItemText primary="Medicines"/>
                    </ListItemButton>
                </Link>

                <Link>
                    <ListItemButton>
                        <ListItemText primary="Surgeries"/>
                    </ListItemButton>
                </Link>

                <Link>
                    <ListItemButton>
                        <ListItemText primary="Software for Provider"/>
                    </ListItemButton>
                </Link>

                <Link>
                    <ListItemButton>
                        <ListItemText primary="Facilities"/>
                    </ListItemButton>
                </Link>

                <Link to="/bookings" style={{position: "relative", left: "15px", top: "5px"}}> 
                    
                    <Button variant='contained' disableElevation>
                        My Bookings
                    </Button>
                    
                </Link>
            </List>
        </Box>
    )

  return (
    <header>
        <Box p={1} bgcolor="primary.main">
            <Typography color="#FFFFFF" textAlign="center" fontSize={14}>
                The health and well being of our patients and their health care team will always be our first priority, so we follow the best practices for cleanliness.
            </Typography>
        </Box>

        <Container maxWidth='xl'>
            <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-between"
                py={2}
            >
                <Link to='/'>
                    <img src={logo} alt='logo' height={27}/>
                </Link>

                {onMobile ? (
                    <>
                        <IconButton onClick={toggleDrawer(true)}>
                            <MenuRoundedIcon />
                        </IconButton>

                        <Drawer 
                            anchor="right" 
                            open={menuOpen} 
                            onClose={toggleDrawer(false)} 
                            variant="temporary"
                            sx={{
                                '& .MuiDrawer-paper': {
                                    width: "40vw",
                                    backgroundColor: '#102851',
                                    color: '#fff',
                                },
                            }}
                        >
                            {list()}
                        </Drawer>
                    </>

                ) : (
                    <Stack 
                    direction={{xs: "column", md: "row"}}
                    spacing={4}
                    alignItems={{xs: 'flex-start', md: 'center'}}
                    className={styles.navlinks}
                    
                >
                    <Link>Find Doctors</Link>
                    <Link to="/search">Hospitals</Link>
                    <Link>Medicines</Link>
                    <Link>Surgeries</Link>
                    <Link>Software For Provider</Link>
                    <Link>Facilities</Link>
                    <Link to='/bookings'>
                        <Button variant='contained' disableElevation>
                            My Bookings
                        </Button>
                    </Link>
                </Stack>
                )}
            </Stack>
        </Container>
    </header>
  )
}

export default NavBar