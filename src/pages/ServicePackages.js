import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider
} from '@mui/material';
import { motion } from 'framer-motion';
import { Check, GraphicEq, Equalizer, AutoFixHigh } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const ServicePackages = () => {
  const navigate = useNavigate();

  const packages = [
    {
      title: "Mix",
      features: [
        "Profesyonel Mix İşlemi",
        "3 Revizyon Hakkı",
        "5 Gün Teslimat",
        "Stem Mix Dosyaları",
        "Mix Raporu",
        "Dijital Dağıtım Hazırlığı"
      ],
      icon: <GraphicEq sx={{ fontSize: 40, color: '#1DB954' }} />,
      type: "mix"
    },
    {
      title: "Master",
      features: [
        "Profesyonel Mastering",
        "3 Revizyon Hakkı",
        "3 Gün Teslimat",
        "Farklı Format Seçenekleri",
        "Mastering Raporu",
        "Streaming Uyumluluğu"
      ],
      icon: <Equalizer sx={{ fontSize: 40, color: '#1DB954' }} />,
      type: "master"
    },
    {
      title: "Mix & Master",
      features: [
        "Profesyonel Mix ve Master",
        "4 Revizyon Hakkı",
        "7 Gün Teslimat",
        "Stem Mix Dosyaları",
        "Detaylı Raporlar",
        "Tüm Formatlar Dahil"
      ],
      icon: <AutoFixHigh sx={{ fontSize: 40, color: '#1DB954' }} />,
      type: "mixmaster",
      popular: true
    }
  ];

  return (
    <Box sx={{ 
      bgcolor: '#121212', 
      color: 'white',
      minHeight: '100vh',
      py: { xs: 4, sm: 6, md: 8 }
    }}>
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Typography 
            variant="h2" 
            align="center" 
            sx={{ 
              mb: { xs: 2, sm: 3 },
              fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
              fontWeight: 700
            }}
          >
            Mix Paketleri
          </Typography>
          <Typography 
            align="center" 
            sx={{ 
              mb: { xs: 4, sm: 6 },
              fontSize: { xs: '1rem', sm: '1.1rem', md: '1.25rem' },
              opacity: 0.8,
              maxWidth: '800px',
              mx: 'auto'
            }}
          >
            İhtiyacınıza en uygun paketi seçin ve müziğinizi profesyonel ellerle şekillendirin
          </Typography>
        </motion.div>

        <Grid container spacing={{ xs: 2, sm: 3, md: 4 }} alignItems="stretch">
          {packages.map((pkg, index) => (
            <Grid item xs={12} md={4} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                style={{ height: '100%' }}
              >
                <Card 
                  sx={{
                    bgcolor: 'rgba(255,255,255,0.05)',
                    height: '100%',
                    position: 'relative',
                    overflow: 'visible',
                    border: pkg.popular ? '2px solid #1DB954' : 'none',
                    transition: 'transform 0.2s ease-in-out',
                    '&:hover': {
                      transform: 'translateY(-8px)'
                    }
                  }}
                >
                  {pkg.popular && (
                    <Box
                      sx={{
                        position: 'absolute',
                        top: -15,
                        right: 20,
                        bgcolor: '#1DB954',
                        color: 'white',
                        px: 2,
                        py: 0.5,
                        borderRadius: '15px',
                        fontSize: { xs: '0.8rem', sm: '0.9rem' },
                        fontWeight: 600
                      }}
                    >
                      Popular
                    </Box>
                  )}
                  <CardContent sx={{ p: { xs: 2, sm: 3, md: 4 } }}>
                    <Box sx={{ textAlign: 'center', mb: 3 }}>
                      {pkg.icon}
                      <Typography 
                        variant="h4" 
                        sx={{ 
                          my: 2,
                          fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2rem' },
                          fontWeight: 600
                        }}
                      >
                        {pkg.title}
                      </Typography>
                    </Box>

                    <Divider sx={{ bgcolor: 'rgba(255,255,255,0.1)', my: 2 }} />

                    <List sx={{ mb: 3 }}>
                      {pkg.features.map((feature, i) => (
                        <ListItem 
                          key={i} 
                          sx={{ 
                            px: 0,
                            py: { xs: 0.5, sm: 1 }
                          }}
                        >
                          <ListItemIcon>
                            <Check sx={{ color: '#1DB954' }} />
                          </ListItemIcon>
                          <ListItemText 
                            primary={feature} 
                            sx={{ 
                              '& .MuiListItemText-primary': {
                                fontSize: { xs: '0.9rem', sm: '1rem' }
                              }
                            }}
                          />
                        </ListItem>
                      ))}
                    </List>

                    <Button
                      variant="contained"
                      fullWidth
                      onClick={() => navigate(`/project-form/${pkg.type}`)}
                      sx={{
                        bgcolor: '#1DB954',
                        '&:hover': { 
                          bgcolor: '#1ed760',
                          transform: 'translateY(-2px)',
                          boxShadow: '0 5px 15px rgba(29, 185, 84, 0.4)'
                        },
                        py: { xs: 1.5, sm: 2 },
                        fontSize: { xs: '0.9rem', sm: '1rem' },
                        textTransform: 'none',
                        borderRadius: '50px',
                        transition: 'all 0.2s ease-in-out'
                      }}
                    >
                      Fiyat Al
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default ServicePackages; 