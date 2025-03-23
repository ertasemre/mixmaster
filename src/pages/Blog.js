import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, CardMedia, CardActionArea, Chip, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';

const BlogCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-10px)',
  },
  borderRadius: '16px',
  overflow: 'hidden',
}));

const posts = [
  {
    title: "Mix ve Mastering Arasındaki Fark Nedir?",
    excerpt: "Profesyonel müzik üretiminin iki önemli aşaması olan mix ve mastering işlemlerini detaylıca inceliyoruz...",
    image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04",
    category: "Teknik",
    date: "15 Mart 2024"
  },
  {
    title: "Ev Stüdyonuzu Nasıl Kurarsınız?",
    excerpt: "Ev stüdyosu kurmak için ihtiyacınız olan temel ekipmanlar ve akustik düzenlemeler hakkında kapsamlı rehber...",
    image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04",
    category: "Rehber",
    date: "12 Mart 2024"
  },
  {
    title: "2024'ün En İyi Mix Yazılımları",
    excerpt: "Bu yılın en popüler ve etkili mix yazılımlarını karşılaştırmalı olarak inceliyoruz...",
    image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04",
    category: "İnceleme",
    date: "10 Mart 2024"
  }
];

const Blog = () => {
  return (
    <Box sx={{ pt: '64px' }}>
      {/* Hero Section */}
      <Box 
        sx={{ 
          py: 8,
          background: 'linear-gradient(135deg, #2196F3 0%, #1976D2 100%)',
          color: 'white'
        }}
      >
        <Container maxWidth="lg">
          <Typography 
            variant="h2" 
            align="center"
            sx={{ 
              fontWeight: 700,
              mb: 2
            }}
          >
            Blog
          </Typography>
          <Typography 
            variant="h5" 
            align="center"
            sx={{ 
              opacity: 0.9,
              maxWidth: '800px',
              mx: 'auto'
            }}
          >
            Müzik prodüksiyonu hakkında en güncel bilgiler ve ipuçları
          </Typography>
        </Container>
      </Box>

      {/* Blog Posts */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid container spacing={4}>
          {posts.map((post, index) => (
            <Grid item xs={12} md={4} key={index}>
              <BlogCard>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="200"
                    image={post.image}
                    alt={post.title}
                  />
                  <CardContent>
                    <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
                      <Chip 
                        label={post.category}
                        size="small"
                        color="primary"
                      />
                      <Typography variant="body2" color="text.secondary">
                        {post.date}
                      </Typography>
                    </Stack>
                    <Typography 
                      gutterBottom 
                      variant="h5" 
                      component="h2"
                      sx={{ fontWeight: 600 }}
                    >
                      {post.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {post.excerpt}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </BlogCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Blog; 