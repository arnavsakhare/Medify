import React from 'react'
import banner from '../../assets/faqs-banner.jpg'
import { Box, Container, Grid, Typography } from '@mui/material'
import AccordianCustomized from '../Accordian/Accordian'

const FAQSection = () => {

    const faq = [
        {
            summary: "Why choose our medical for your family ?",
            details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime amet odio recusandae. Magnam culpa provident hic odio. Animi, sapiente vel?"
        },

        {
            summary: "Why are we different from others ?",
            details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime amet odio recusandae. Magnam culpa provident hic odio. Animi, sapiente vel?"
        },

        {
            summary: "Trusted & experienced senior care & love",
            details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime amet odio recusandae. Magnam culpa provident hic odio. Animi, sapiente vel?"
        },

        {
            summary: "How to get appointment for emergency cases ?",
            details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime amet odio recusandae. Magnam culpa provident hic odio. Animi, sapiente vel?"
        },

    ]


  return (
    <Box py={4}>
        <Container maxWidth="xl">
            <Typography color="primary.main" fontWeight={600} textAlign="center">
                Get Your Answer
            </Typography>

            <Typography variant='h2' textAlign="center" mb={2}>
                Frequently Asked Questions
            </Typography>

            <Grid container alignItems="center" spacing={5} >

                <Grid item xs={12} md={6}>
                    <Box
                        component="img"
                        src={banner}
                        width={1}
                        height="auto"
                    />
                </Grid>

                <Grid item xs={12} md={6} >
                    <Box maxWidth={450}>
                        <AccordianCustomized data={faq} />
                    </Box>
                </Grid>
            </Grid>
        </Container>
    </Box>
  )
}

export default FAQSection