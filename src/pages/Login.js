import React, { useState } from 'react';
import {
  Box,
  Container,
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  Stack,
  Divider,
  IconButton,
  InputAdornment,
  Alert,
  Link
} from '@mui/material';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Visibility, VisibilityOff, Google, Facebook } from '@mui/icons-material';

const Login = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Backend entegrasyonu yapılacak
    console.log(formData);
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        bgcolor: '#121212',
        display: 'flex',
        alignItems: 'center',
        py: 8
      }}
    >
      <Container maxWidth="sm">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card
            sx={{
              bgcolor: 'rgba(255,255,255,0.05)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: 4
            }}
          >
            <CardContent sx={{ p: 4 }}>
              <Stack spacing={3}>
                <Box textAlign="center">
                  <Typography
                    variant="h4"
                    gutterBottom
                    sx={{
                      color: 'white',
                      fontWeight: 600,
                      letterSpacing: '-0.02em'
                    }}
                  >
                    Hoş Geldiniz
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{ color: 'gray', mb: 3 }}
                  >
                    Hesabınıza giriş yapın
                  </Typography>
                </Box>

                {error && (
                  <Alert severity="error" sx={{ bgcolor: 'rgba(211, 47, 47, 0.1)' }}>
                    {error}
                  </Alert>
                )}

                <form onSubmit={handleSubmit}>
                  <Stack spacing={3}>
                    <TextField
                      fullWidth
                      label="E-posta"
                      variant="outlined"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          color: 'white',
                          '& fieldset': {
                            borderColor: 'rgba(255,255,255,0.2)',
                          },
                          '&:hover fieldset': {
                            borderColor: 'rgba(255,255,255,0.3)',
                          },
                        },
                        '& .MuiInputLabel-root': {
                          color: 'gray',
                        },
                      }}
                    />

                    <TextField
                      fullWidth
                      label="Şifre"
                      type={showPassword ? 'text' : 'password'}
                      value={formData.password}
                      onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton
                              onClick={() => setShowPassword(!showPassword)}
                              edge="end"
                              sx={{ color: 'gray' }}
                            >
                              {showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          color: 'white',
                          '& fieldset': {
                            borderColor: 'rgba(255,255,255,0.2)',
                          },
                          '&:hover fieldset': {
                            borderColor: 'rgba(255,255,255,0.3)',
                          },
                        },
                        '& .MuiInputLabel-root': {
                          color: 'gray',
                        },
                      }}
                    />

                    <Button
                      type="submit"
                      variant="contained"
                      size="large"
                      sx={{
                        bgcolor: '#1DB954',
                        '&:hover': { bgcolor: '#1ed760' },
                        py: 1.5,
                        fontSize: '1.1rem',
                        fontWeight: 600
                      }}
                    >
                      Giriş Yap
                    </Button>
                  </Stack>
                </form>

                <Box sx={{ mt: 2, textAlign: 'center' }}>
                  <Typography color="gray" display="inline">
                    Hesabınız yok mu?{' '}
                  </Typography>
                  <Link
                    component="button"
                    onClick={() => navigate('/packages')}
                    sx={{
                      color: '#1DB954',
                      textDecoration: 'none',
                      '&:hover': { color: '#1ed760' }
                    }}
                  >
                    Paketleri İncele
                  </Link>
                </Box>
              </Stack>
            </CardContent>
          </Card>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Login; 