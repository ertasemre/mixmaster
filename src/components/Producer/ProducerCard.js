import React from 'react';
import { 
  Card, 
  CardContent, 
  CardMedia, 
  Typography, 
  Box, 
  Chip, 
  Rating, 
  Button 
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

const ProducerCard = ({ producer }) => {
  const navigate = useNavigate();

  return (
    <Card sx={{ 
      height: '100%', 
      display: 'flex', 
      flexDirection: 'column',
      transition: '0.3s',
      '&:hover': {
        transform: 'translateY(-5px)',
        boxShadow: 3
      }
    }}>
      <CardMedia
        component="img"
        height="200"
        image={producer.image}
        alt={producer.name}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h5" component="h2">
          {producer.name}
        </Typography>
        <Box sx={{ mb: 2 }}>
          {producer.genre.map((genre, index) => (
            <Chip 
              key={index} 
              label={genre} 
              size="small" 
              sx={{ mr: 1, mb: 1 }} 
            />
          ))}
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <Rating value={producer.rating} readOnly precision={0.1} />
          <Typography variant="body2" sx={{ ml: 1 }}>
            ({producer.rating})
          </Typography>
        </Box>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          {producer.description}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          Tamamlanan Proje: {producer.completedProjects}
        </Typography>
        <Button 
          variant="contained" 
          fullWidth
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
      </CardContent>
    </Card>
  );
};

export default ProducerCard; 