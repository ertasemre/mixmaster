import React from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Grid, 
  Card, 
  CardMedia, 
  CardContent, 
  CardActions,
  Button,
  Chip,
  Rating,
  Stack
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import CountUp from 'react-countup';

const producers = [
  {
    id: 1,
    name: "John Doe",
    image: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    genres: ["Hip Hop", "Trap", "R&B"],
    rating: 4.8,
    projects: 156,
    description: "10+ yıllık deneyimle profesyonel mix ve mastering hizmeti",
    price: "₺1000'den başlayan fiyatlarla"
  },
  {
    id: 2,
    name: "Jane Smith",
    image: "https://images.unsplash.com/photo-1559732277-7da32b2b5a00?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    genres: ["Pop", "Electronic", "House"],
    rating: 4.9,
    projects: 203,
    description: "Grammy ödüllü prodüktör. Profesyonel stüdyo ekipmanları",
    price: "₺1500'den başlayan fiyatlarla"
  },
  // Daha fazla producer eklenebilir
];

const Producers = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ 
      py: 6, 
      minHeight: '100vh',
      background: 'linear-gradient(to bottom, #2196F3 0%, #1976D2 100%)'
    }}>
      <Container>
        <Typography 
          variant="h3" 
          component="h1" 
          sx={{ 
            mb: 4, 
            color: 'white',
            textAlign: 'center',
            fontWeight: 'bold'
          }}
        >
          Profesyonel Productor'lar
        </Typography>
        <Typography 
          variant="h6" 
          sx={{ 
            mb: 6, 
            color: 'white',
            textAlign: 'center',
            opacity: 0.9
          }}
        >
          Projeleriniz için en uygun productor'ı seçin
        </Typography>

        <Grid container spacing={4}>
          {producers.map((producer) => (
            <Grid item xs={12} sm={6} md={4} key={producer.id}>
              <Card 
                sx={{ 
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'transform 0.2s',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: 8
                  }
                }}
              >
                <CardMedia
                  component="img"
                  height="240"
                  image={producer.image}
                  alt={producer.name}
                  sx={{ objectFit: 'cover' }}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h2">
                    {producer.name}
                  </Typography>
                  <Stack direction="row" spacing={1} sx={{ mb: 2, flexWrap: 'wrap', gap: 1 }}>
                    {producer.genres.map((genre) => (
                      <Chip 
                        key={genre} 
                        label={genre} 
                        size="small"
                        sx={{ 
                          backgroundColor: '#2196F3',
                          color: 'white'
                        }}
                      />
                    ))}
                  </Stack>
                  <Box sx={{ mb: 2, display: 'flex', alignItems: 'center' }}>
                    <Rating value={producer.rating} precision={0.1} readOnly />
                    <Typography variant="body2" sx={{ ml: 1 }}>
                      ({producer.rating})
                    </Typography>
                  </Box>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                    {producer.description}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                    Tamamlanan Proje: {producer.projects}
                  </Typography>
                  <Typography variant="subtitle1" color="primary" fontWeight="bold">
                    {producer.price}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button 
                    size="large" 
                    fullWidth
                    variant="contained"
                    onClick={() => navigate(`/producer/${producer.id}`)}
                    sx={{
                      backgroundColor: '#2196F3',
                      '&:hover': {
                        backgroundColor: '#1976D2'
                      }
                    }}
                  >
                    Profili İncele
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Producers; 