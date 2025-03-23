import React from 'react';
import {
  Box,
  Container,
  Typography,
  IconButton,
  Card,
  CardContent,
} from '@mui/material';
import {
  ArrowBack,
  RadioButtonChecked,
  Description,
  Person,
  Schedule,
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const Timeline = () => {
  const navigate = useNavigate();

  const timelineData = [
    {
      date: '15 Mart 2024 - 14:30',
      title: 'Proje Gönderildi',
      description: 'Proje dosyaları başarıyla yüklendi ve inceleme sürecine alındı.',
      icon: <RadioButtonChecked sx={{ 
        fontSize: { xs: '12px', sm: '14px' },
        color: '#1DB954'
      }} />,
      status: 'completed'
    },
    {
      date: '15 Mart 2024 - 15:45',
      title: 'İnceleme Başladı',
      description: 'Ekibimiz projenizi incelemeye başladı.',
      icon: <RadioButtonChecked sx={{ 
        fontSize: { xs: '12px', sm: '14px' },
        color: '#1DB954'
      }} />,
      status: 'completed'
    },
    {
      date: '16 Mart 2024 - 10:00',
      title: 'Prodüktör Ataması',
      description: 'Ahmet Yılmaz projenize atandı.',
      icon: <RadioButtonChecked sx={{ 
        fontSize: { xs: '12px', sm: '14px' },
        color: '#1DB954'
      }} />,
      status: 'completed'
    },
    {
      date: 'Bekleniyor',
      title: 'Üretim Süreci',
      description: 'Mix ve mastering çalışmaları başlayacak.',
      icon: <RadioButtonChecked sx={{ 
        fontSize: { xs: '12px', sm: '14px' },
        color: 'rgba(255,255,255,0.5)'
      }} />,
      status: 'pending'
    }
  ];

  return (
    <Box sx={{ 
      bgcolor: '#121212', 
      minHeight: '100vh',
      py: { xs: 2, sm: 3 },
      px: { xs: 2, sm: 3 }
    }}>
      <Container maxWidth="lg">
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 4, gap: 2 }}>
          <IconButton 
            onClick={() => navigate('/dashboard')}
            sx={{ color: '#fff' }}
          >
            <ArrowBack />
          </IconButton>
          <Typography variant="h5" sx={{ fontWeight: 600 }}>
            Zaman Çizelgesi
          </Typography>
        </Box>

        <Card sx={{ bgcolor: 'rgba(255,255,255,0.05)', borderRadius: 2 }}>
          <CardContent sx={{ p: { xs: 2, sm: 3 } }}>
            {timelineData.map((item, index) => (
              <Box
                key={index}
                sx={{
                  position: 'relative',
                  pl: { xs: 4, sm: 5 },
                  pb: index !== timelineData.length - 1 ? 4 : 0,
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    left: { xs: '13px', sm: '17px' },
                    top: '30px',
                    bottom: index !== timelineData.length - 1 ? 0 : 'auto',
                    width: '2px',
                    bgcolor: item.status === 'completed' ? '#1DB954' : 'rgba(255,255,255,0.1)',
                    display: index !== timelineData.length - 1 ? 'block' : 'none'
                  }
                }}
              >
                <Box
                  sx={{
                    position: 'absolute',
                    left: { xs: '8px', sm: '12px' },
                    top: '8px',
                    width: { xs: '12px', sm: '14px' },
                    height: { xs: '12px', sm: '14px' },
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: '50%',
                  }}
                >
                  {item.icon}
                </Box>

                <Box>
                  <Typography 
                    sx={{ 
                      fontSize: { xs: '0.75rem', sm: '0.875rem' },
                      color: 'rgba(255,255,255,0.5)',
                      mb: 0.5
                    }}
                  >
                    {item.date}
                  </Typography>
                  <Typography 
                    sx={{ 
                      fontSize: { xs: '1rem', sm: '1.125rem' },
                      fontWeight: 600,
                      mb: 1
                    }}
                  >
                    {item.title}
                  </Typography>
                  <Typography 
                    sx={{ 
                      fontSize: { xs: '0.875rem', sm: '1rem' },
                      color: 'rgba(255,255,255,0.7)'
                    }}
                  >
                    {item.description}
                  </Typography>
                </Box>
              </Box>
            ))}
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
};

export default Timeline; 