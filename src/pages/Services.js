import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, CardHeader, Button, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { styled } from '@mui/material/styles';

const ServiceCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-10px)',
  },
  borderRadius: '16px',
  boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
}));

const services = [
  {
    title: "Mix & Mastering",
    description: "Profesyonel stüdyo ekipmanlarıyla mix ve mastering hizmeti",
    features: [
      "Yüksek kaliteli mix",
      "Profesyonel mastering",
      "Sınırsız revizyon hakkı",
      "24/7 teknik destek",
      "Hızlı teslimat"
    ],
    price: "₺1000'den başlayan fiyatlarla"
  },
  {
    title: "Prodüksiyon",
    description: "Şarkınızın aranjman ve prodüksiyon hizmeti",
    features: [
      "Orijinal beat prodüksiyon",
      "Profesyonel aranjman",
      "Enstrüman kayıtları",
      "Vokal düzenleme",
      "Demo kayıt"
    ],
    price: "₺2000'den başlayan fiyatlarla"
  },
  {
    title: "Kayıt",
    description: "Profesyonel stüdyo ortamında kayıt hizmeti",
    features: [
      "Akustik düzenlenmiş odalar",
      "Yüksek kaliteli mikrofon ve ekipmanlar",
      "Deneyimli ses mühendisi",
      "Rahat çalışma ortamı",
      "Mix dahil paket seçenekleri"
    ],
    price: "₺500'den başlayan fiyatlarla"
  }
];

const Services = () => {
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
            Hizmetlerimiz
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
            Profesyonel ekibimizle müziğinizi en iyi şekilde sunmanıza yardımcı oluyoruz
          </Typography>
        </Container>
      </Box>

      {/* Services Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid container spacing={4}>
          {services.map((service, index) => (
            <Grid item xs={12} md={4} key={index}>
              <ServiceCard>
                <CardHeader
                  title={service.title}
                  titleTypographyProps={{ 
                    variant: 'h4',
                    align: 'center',
                    sx: { fontWeight: 700 }
                  }}
                  sx={{ 
                    pb: 0,
                    '& .MuiCardHeader-content': { flex: '1 1 auto' }
                  }}
                />
                <CardContent sx={{ flexGrow: 1, pt: 2 }}>
                  <Typography 
                    variant="subtitle1" 
                    color="text.secondary"
                    align="center"
                    sx={{ mb: 3 }}
                  >
                    {service.description}
                  </Typography>
                  <List>
                    {service.features.map((feature, idx) => (
                      <ListItem key={idx} disableGutters>
                        <ListItemIcon sx={{ minWidth: 40 }}>
                          <CheckCircleIcon color="primary" />
                        </ListItemIcon>
                        <ListItemText primary={feature} />
                      </ListItem>
                    ))}
                  </List>
                  <Typography 
                    variant="h6" 
                    color="primary"
                    align="center"
                    sx={{ 
                      mt: 3,
                      fontWeight: 700
                    }}
                  >
                    {service.price}
                  </Typography>
                  <Button
                    variant="contained"
                    fullWidth
                    sx={{ 
                      mt: 3,
                      borderRadius: '8px',
                      py: 1.5
                    }}
                  >
                    Hemen Başla
                  </Button>
                </CardContent>
              </ServiceCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Services; 