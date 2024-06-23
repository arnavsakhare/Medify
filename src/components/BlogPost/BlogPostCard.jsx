import React from 'react'
import { Box, Stack, Typography } from '@mui/material'


const BlogPostCard = ({image, person}) => {
  return (
    <Box sx={{border: "1px solid rgba(0,0,0,0.1)", borderRadius: 2}}>
        <Box
            component="img"
            src={image}
            width={1}
        />

        <Box p={2}>
            <Typography color="#77829D" fontWeight={500} mb={1} fontSize={{xs: 12, md: 16}}>
                Medical | June 20, 2024
            </Typography>

            <Typography color="#1B3C74" fontSize={{xs: 14, md: 18}} mb={2}>
                6 Tips To protect Your Mental Health When You Are Sick
            </Typography>

            <Stack direction="row" spacing={1} alignItems="center">
                <Box
                    component="img"
                    src={person}
                    height={32}
                    width={32}
                />

                <Typography color="#1B3C74" fontSize={{xs: 12, md: 16}}>
                    Rebecca Lee
                </Typography>
            </Stack>
        </Box>
    </Box>
  )
}

export default BlogPostCard