import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Button,
  Card,
  CardContent,
  LinearProgress,
} from '@mui/material';
import {
  Message,
  Description,
  Timeline,
  CheckCircle,
  Person,
  Build,
  Done,
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ 
      bgcolor: '#121212', 
      minHeight: '100vh',
      py: { xs: 3, sm: 4 },
      px: { xs: 2, sm: 3 }
    }}>
      <Container maxWidth="lg">
        <Typography 
          sx={{ 
            color: '#1DB954',
            mb: 3,
            fontSize: '1rem',
            fontWeight: 500
          }}
        >
          MixMaster.service
        </Typography>

        <Typography 
          variant="h4" 
          sx={{ 
            mb: 1,
            fontSize: { xs: '1.75rem', sm: '2rem' },
            fontWeight: 600
          }}
        >
          Hoş Geldiniz!
        </Typography>

        <Typography 
          sx={{ 
            color: 'rgba(255,255,255,0.7)',
            mb: 4
          }}
        >
          Projenizin durumunu buradan takip edebilirsiniz.
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} md={8}>
            {/* Proje Durumu Card */}
            <Card sx={{ bgcolor: 'rgba(255,255,255,0.05)', mb: 3, borderRadius: 2 }}>
              <CardContent sx={{ p: { xs: 2, sm: 3 } }}>
                <Typography variant="h6" sx={{ mb: 2 }}>
                  Proje Durumu
                </Typography>
                
                <Typography sx={{ color: 'rgba(255,255,255,0.7)', mb: 1, fontSize: '0.9rem' }}>
                  Summer Vibes - Gönderilme Tarihi: 15 Mart 2024
                </Typography>

                <Box sx={{ mb: 3 }}>
                  <LinearProgress 
                    variant="determinate" 
                    value={25} 
                    sx={{
                      bgcolor: 'rgba(255,255,255,0.1)',
                      '& .MuiLinearProgress-bar': {
                        bgcolor: '#1DB954'
                      },
                      height: 4,
                      borderRadius: 2
                    }}
                  />
                </Box>

                <Grid container spacing={2} sx={{ mb: 3 }}>
                  {[
                    { step: 1, label: 'Proje İncelemede', active: true },
                    { step: 2, label: 'Prodüktör Atandı', active: false },
                    { step: 3, label: 'Çalışma Başladı', active: false },
                    { step: 4, label: 'Tamamlandı', active: false },
                  ].map((step) => (
                    <Grid item xs={3} key={step.step}>
                      <Box sx={{ textAlign: 'center' }}>
                        <Typography 
                          sx={{ 
                            display: 'inline-flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: 24,
                            height: 24,
                            borderRadius: '50%',
                            bgcolor: step.active ? '#1DB954' : 'rgba(255,255,255,0.1)',
                            color: step.active ? '#fff' : 'rgba(255,255,255,0.5)',
                            fontSize: '0.875rem',
                            mb: 1
                          }}
                        >
                          {step.step}
                        </Typography>
                        <Typography 
                          sx={{ 
                            fontSize: '0.75rem',
                            color: step.active ? '#fff' : 'rgba(255,255,255,0.5)'
                          }}
                        >
                          {step.label}
                        </Typography>
                      </Box>
                    </Grid>
                  ))}
                </Grid>

                <Box sx={{ 
                  bgcolor: 'rgba(29, 185, 84, 0.1)', 
                  p: 2, 
                  borderRadius: 1,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1
                }}>
                  <span role="img" aria-label="pencil">✏️</span>
                  <Typography sx={{ color: '#1DB954', fontSize: '0.9rem' }}>
                    Proje bilgileriniz prodüktör ekibimize iletildi. Kısa süre içerisinde sizinle site içerisindeki mesaj alanından iletişime geçeceklerdir.
                  </Typography>
                </Box>
              </CardContent>
            </Card>

            {/* Süreç Nasıl İşler Card */}
            <Card sx={{ bgcolor: 'rgba(255,255,255,0.05)', borderRadius: 2 }}>
              <CardContent sx={{ p: { xs: 2, sm: 3 } }}>
                <Typography variant="h6" sx={{ mb: 3 }}>
                  Süreç Nasıl İşler?
                </Typography>

                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                  {[
                    {
                      icon: <Build sx={{ color: '#1DB954' }} />,
                      title: '1. Proje İnceleme',
                      desc: 'Ekibimiz projenizi inceleyerek en uygun prodüktörü belirler'
                    },
                    {
                      icon: <Person sx={{ color: '#1DB954' }} />,
                      title: '2. Prodüktör Ataması',
                      desc: 'Size atanan prodüktör sizinle iletişime geçer ve detayları konuşursunuz'
                    },
                    {
                      icon: <Timeline sx={{ color: '#1DB954' }} />,
                      title: '3. Üretim Süreci',
                      desc: 'Prodüktörünüz projeniz üzerinde çalışmaya başlar ve size düzenli güncellemeler verir'
                    },
                    {
                      icon: <Done sx={{ color: '#1DB954' }} />,
                      title: '4. Teslim ve Onay',
                      desc: 'Final mix\'i onayınıza sunulur ve gerekirse revizyonlar yapılır'
                    }
                  ].map((step, index) => (
                    <Box key={index} sx={{ display: 'flex', gap: 2 }}>
                      {step.icon}
                      <Box>
                        <Typography sx={{ fontWeight: 500, mb: 0.5 }}>
                          {step.title}
                        </Typography>
                        <Typography sx={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem' }}>
                          {step.desc}
                        </Typography>
                      </Box>
                    </Box>
                  ))}
                </Box>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            {/* Hızlı Erişim Card */}
            <Card sx={{ bgcolor: 'rgba(255,255,255,0.05)', mb: 3, borderRadius: 2 }}>
              <CardContent sx={{ p: { xs: 2, sm: 3 } }}>
                <Typography variant="h6" sx={{ mb: 2 }}>
                  Hızlı Erişim
                </Typography>
                
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                  {[
                    { 
                      icon: <Message sx={{ color: '#1DB954' }} />, 
                      text: 'Mesajlar',
                      path: '/messages' 
                    },
                    { 
                      icon: <Description sx={{ color: '#1DB954' }} />, 
                      text: 'Proje Detayları',
                      path: '/project-details' 
                    },
                    { 
                      icon: <Timeline sx={{ color: '#1DB954' }} />, 
                      text: 'Zaman Çizelgesi',
                      path: '/timeline' 
                    }
                  ].map((item, index) => (
                    <Button
                      key={index}
                      fullWidth
                      onClick={() => navigate(item.path)}
                      sx={{
                        bgcolor: 'rgba(255,255,255,0.05)',
                        color: '#fff',
                        p: 1.5,
                        borderRadius: 1,
                        display: 'flex',
                        alignItems: 'center',
                        gap: 2,
                        justifyContent: 'flex-start',
                        '&:hover': {
                          bgcolor: 'rgba(255,255,255,0.1)'
                        }
                      }}
                    >
                      {item.icon}
                      <Typography sx={{ fontWeight: 500 }}>
                        {item.text}
                      </Typography>
                    </Button>
                  ))}
                </Box>
              </CardContent>
            </Card>

            {/* İpuçları Card */}
            <Card sx={{ bgcolor: 'rgba(29, 185, 84, 0.1)', borderRadius: 2 }}>
              <CardContent sx={{ p: { xs: 2, sm: 3 } }}>
                <Typography variant="h6" sx={{ mb: 2 }}>
                  İpuçları
                </Typography>
                
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                  {[
                    'Prodüktörünüzle düzenli iletişimde kalın',
                    'Geri bildirimlerinizi net ve detaylı yapın',
                    'Revizyon taleplerinizi tek seferde iletin'
                  ].map((tip, index) => (
                    <Typography 
                      key={index}
                      sx={{ 
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1,
                        color: '#1DB954',
                        fontSize: '0.9rem'
                      }}
                    >
                      • {tip}
                    </Typography>
                  ))}
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Dashboard; 