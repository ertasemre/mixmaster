import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, CardActions, Button, List, ListItem, ListItemIcon, ListItemText, Chip } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import { styled } from '@mui/material/styles';

const PriceCard = styled(Card)(({ theme, featured }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-10px)',
  },
  borderRadius: '16px',
  boxShadow: featured ? '0 8px 32px rgba(33, 150, 243, 0.2)' : '0 4px 20px rgba(0,0,0,0.1)',
  border: featured ? '2px solid #2196F3' : 'none',
}));

const plans = [
  {
    name: "Başlangıç",
    price: "₺999",
    description: "Yeni başlayanlar için ideal paket",
    features: [
      "2 şarkı mix & mastering",
      "3 revizyon hakkı",
      "Online destek",
      "14 gün içinde teslim",
      "Temel mix raporu"
    ]
  },
  {
    name: "Profesyonel",
    price: "₺1999",
    description: "En popüler seçim",
    features: [
      "5 şarkı mix & mastering",
      "Sınırsız revizyon",
      "7/24 öncelikli destek",
      "7 gün içinde teslim",
      "Detaylı mix raporu",
      "Stem dosyaları",
      "1 saat online konsültasyon"
    ],
    featured: true
  },
  {
    name: "Premium",
    price: "₺3999",
    description: "Tam kapsamlı hizmet paketi",
    features: [
      "10 şarkı mix & mastering",
      "Sınırsız revizyon",
      "7/24 VIP destek",
      "3 gün içinde teslim",
      "Detaylı mix raporu",
      "Stem dosyaları",
      "3 saat online konsültasyon",
      "Özel prodüktör desteği"
    ]
  }
];

const Pricing = () => {
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
            Fiyatlandırma
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
            İhtiyacınıza en uygun paketi seçin
          </Typography>
        </Container>
      </Box>

      {/* Pricing Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid container spacing={4}>
          {plans.map((plan, index) => (
            <Grid item xs={12} md={4} key={index}>
              <PriceCard featured={plan.featured}>
                <CardContent sx={{ flexGrow: 1 }}>
                  {plan.featured && (
                    <Chip 
                      label="En Popüler"
                      color="primary"
                      sx={{ 
                        mb: 2,
                        fontWeight: 600
                      }}
                    />
                  )}
                  <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 700 }}>
                    {plan.name}
                  </Typography>
                  <Typography 
                    variant="h3" 
                    component="div" 
                    sx={{ 
                      fontWeight: 700,
                      color: plan.featured ? 'primary.main' : 'inherit',
                      mb: 2
                    }}
                  >
                    {plan.price}
                  </Typography>
                  <Typography color="text.secondary" paragraph>
                    {plan.description}
                  </Typography>
                  <List>
                    {plan.features.map((feature, idx) => (
                      <ListItem key={idx} disableGutters>
                        <ListItemIcon sx={{ minWidth: 40 }}>
                          <CheckIcon color={plan.featured ? 'primary' : 'inherit'} />
                        </ListItemIcon>
                        <ListItemText primary={feature} />
                      </ListItem>
                    ))}
                  </List>
                </CardContent>
                <CardActions sx={{ p: 3, pt: 0 }}>
                  <Button 
                    variant={plan.featured ? 'contained' : 'outlined'}
                    fullWidth
                    size="large"
                    sx={{ 
                      borderRadius: '8px',
                      py: 1.5
                    }}
                  >
                    Paketi Seç
                  </Button>
                </CardActions>
              </PriceCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Pricing; 