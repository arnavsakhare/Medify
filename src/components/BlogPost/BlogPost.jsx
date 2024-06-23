import React from 'react'
import blogImage from '../../assets/blog.png'
import person from '../../assets/person.png'
import { Box, Container, Grid, Typography } from '@mui/material'
import BlogPostCard from './BlogPostCard'

const BlogPost = () => {
  return (
    <Box py={6}>
        <Container>
            <Typography color="primary.main" fontWeight={600} textAlign="center">
                Blogs & News
            </Typography>

            <Typography variant='h2' textAlign="center" mb={2}>
                Read Our Latest News
            </Typography>

            <Grid container spacing={5}>
                <Grid item xs={12} md={4}>
                    <BlogPostCard image={blogImage} person={person} />
                </Grid>

                <Grid item xs={12} md={4}>
                    <BlogPostCard image={blogImage} person={person} />
                </Grid>

                <Grid item xs={12} md={4}>
                    <BlogPostCard image={blogImage} person={person} />
                </Grid>
            </Grid>
        </Container>
    </Box>
  )
}

export default BlogPost