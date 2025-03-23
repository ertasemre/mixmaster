import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  IconButton,
  TextField,
} from '@mui/material';
import {
  ArrowBack,
  CloudUpload,
  Message,
  Edit,
  MusicNote,
  AccessTime,
  Category,
  Speed,
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const ProjectDetails = () => {
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = React.useState(false);
  const [notes, setNotes] = React.useState("Nakaratın daha enerjik olmasını istiyorum. Vokallerin biraz daha öne çıkması gerekiyor.");

  const handleSaveNotes = () => {
    setIsEditing(false);
    // Burada API çağrısı yapılabilir
  };

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
            Proje Detayları
          </Typography>
        </Box>

        <Grid container spacing={3}>
          <Grid item xs={12} md={8}>
            {/* Temel Bilgiler */}
            <Card sx={{ bgcolor: 'rgba(255,255,255,0.05)', mb: 3, borderRadius: 2 }}>
              <CardContent>
                <Typography variant="h6" sx={{ mb: 3 }}>
                  Summer Vibes
                </Typography>
                
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
                      <Category sx={{ color: '#1DB954' }} />
                      <Box>
                        <Typography sx={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.7)' }}>
                          Tür
                        </Typography>
                        <Typography>Pop</Typography>
                      </Box>
                    </Box>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
                      <Speed sx={{ color: '#1DB954' }} />
                      <Box>
                        <Typography sx={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.7)' }}>
                          BPM
                        </Typography>
                        <Typography>128</Typography>
                      </Box>
                    </Box>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
                      <AccessTime sx={{ color: '#1DB954' }} />
                      <Box>
                        <Typography sx={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.7)' }}>
                          Gönderilme Tarihi
                        </Typography>
                        <Typography>15 Mart 2024</Typography>
                      </Box>
                    </Box>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
                      <MusicNote sx={{ color: '#1DB954' }} />
                      <Box>
                        <Typography sx={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.7)' }}>
                          Referanslar
                        </Typography>
                        <Typography>The Weeknd, Dua Lipa</Typography>
                      </Box>
                    </Box>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>

            {/* Yüklenen Dosyalar */}
            <Card sx={{ bgcolor: 'rgba(255,255,255,0.05)', mb: 3, borderRadius: 2 }}>
              <CardContent>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                  <Typography variant="h6">Yüklenen Dosyalar</Typography>
                  <Button
                    startIcon={<CloudUpload />}
                    sx={{ 
                      color: '#1DB954',
                      '&:hover': { bgcolor: 'rgba(29, 185, 84, 0.1)' }
                    }}
                  >
                    Yeni Dosya Yükle
                  </Button>
                </Box>

                {['vocals.wav', 'beat.wav', 'reference.mp3'].map((file, index) => (
                  <Box
                    key={index}
                    sx={{
                      p: 2,
                      mb: 1,
                      borderRadius: 1,
                      bgcolor: 'rgba(255,255,255,0.03)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between'
                    }}
                  >
                    <Typography>{file}</Typography>
                    <Button
                      size="small"
                      sx={{ color: '#1DB954' }}
                    >
                      İndir
                    </Button>
                  </Box>
                ))}
              </CardContent>
            </Card>

            {/* Notlar */}
            <Card sx={{ bgcolor: 'rgba(255,255,255,0.05)', borderRadius: 2 }}>
              <CardContent>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                  <Typography variant="h6">Notlar</Typography>
                  <IconButton 
                    onClick={() => isEditing ? handleSaveNotes() : setIsEditing(true)}
                    sx={{ color: '#1DB954' }}
                  >
                    <Edit />
                  </IconButton>
                </Box>
                
                {isEditing ? (
                  <TextField
                    fullWidth
                    multiline
                    rows={4}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        color: '#fff',
                        '& fieldset': {
                          borderColor: 'rgba(255,255,255,0.2)',
                        },
                        '&:hover fieldset': {
                          borderColor: '#1DB954',
                        },
                        '&.Mui-focused fieldset': {
                          borderColor: '#1DB954',
                        },
                      },
                      '& .MuiOutlinedInput-input': {
                        color: '#fff',
                      },
                    }}
                  />
                ) : (
                  <Typography sx={{ color: 'rgba(255,255,255,0.7)' }}>
                    {notes}
                  </Typography>
                )}

                {isEditing && (
                  <Box sx={{ display: 'flex', gap: 1, mt: 2, justifyContent: 'flex-end' }}>
                    <Button 
                      onClick={() => setIsEditing(false)}
                      sx={{ 
                        color: '#fff',
                        '&:hover': { bgcolor: 'rgba(255,255,255,0.1)' }
                      }}
                    >
                      İptal
                    </Button>
                    <Button 
                      onClick={handleSaveNotes}
                      sx={{ 
                        bgcolor: '#1DB954',
                        color: '#fff',
                        '&:hover': { bgcolor: '#1ed760' }
                      }}
                    >
                      Kaydet
                    </Button>
                  </Box>
                )}
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            {/* Hızlı İşlemler */}
            <Card sx={{ bgcolor: 'rgba(255,255,255,0.05)', mb: 3, borderRadius: 2 }}>
              <CardContent>
                <Typography variant="h6" sx={{ mb: 3 }}>
                  Hızlı İşlemler
                </Typography>
                <Button
                  fullWidth
                  startIcon={<Message />}
                  onClick={() => navigate('/messages')}
                  sx={{
                    bgcolor: '#1DB954',
                    color: '#fff',
                    p: 1.5,
                    '&:hover': { bgcolor: '#1ed760' }
                  }}
                >
                  Prodüktöre Mesaj Gönder
                </Button>
              </CardContent>
            </Card>

            {/* Revizyon Talebi */}
            <Card sx={{ bgcolor: 'rgba(29, 185, 84, 0.1)', borderRadius: 2 }}>
              <CardContent>
                <Typography variant="h6" sx={{ mb: 2 }}>
                  Revizyon Talebi
                </Typography>
                <Typography sx={{ color: '#1DB954', fontSize: '0.9rem', mb: 2 }}>
                  Revizyon talebiniz için lütfen:
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                  {[
                    'Değişiklik istediğiniz noktaları net belirtin',
                    'Referans parçalar ekleyin',
                    'Zaman kodlarını paylaşın'
                  ].map((item, index) => (
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
                      • {item}
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

export default ProjectDetails;