import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  IconButton,
  Button,
  Stepper,
  Step,
  StepLabel,
  StepContent,
  Paper,
  CircularProgress,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Stack,
  Chip,
  Autocomplete,
  Grid,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  Dialog,
  DialogTitle,
  DialogContent
} from '@mui/material';
import { ArrowBack, Visibility, VisibilityOff, Add, Delete, CloudUpload, Close } from '@mui/icons-material';
import { useNavigate, useParams } from 'react-router-dom';
import { Link } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';

const predefinedGenres = [
  'Pop',
  'Rock',
  'Hip Hop',
  'R&B',
  'Electronic',
  'Jazz',
  'Classical',
  'Metal',
  'Folk',
  'Country',
  'Blues',
  'Reggae',
  'Latin',
  'Alternative'
];

const ProjectForm = () => {
  const navigate = useNavigate();
  const { packageType } = useParams();
  const [activeStep, setActiveStep] = useState(0);
  const [loading, setLoading] = useState(false);
  const [files, setFiles] = useState([]);
  const [formData, setFormData] = useState({
    projectName: '',
    artistName: '',
    genres: [],
    bpm: '',
    reference: '',
    description: '',
    files: [],
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
    genre: '',
    notes: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [passwordError, setPasswordError] = useState('');
  const [termsOpen, setTermsOpen] = useState(false);
  const [privacyOpen, setPrivacyOpen] = useState(false);

  const handleNext = () => {
    setLoading(true);
    setTimeout(() => {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
      setLoading(false);
    }, 300);
  };

  const handleBack = () => {
    setLoading(true);
    setTimeout(() => {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
      setLoading(false);
    }, 300);
  };

  const validatePassword = () => {
    if (formData.password.length < 8) {
      setPasswordError('Şifre en az 8 karakter olmalıdır');
      return false;
    }
    setPasswordError('');
    return true;
  };

  const handleSubmit = () => {
    if (!validatePassword()) {
      return;
    }
    setLoading(true);
    
    setTimeout(() => {
      setLoading(false);
      navigate('/dashboard');
    }, 1500);
  };

  const handleFileUpload = (event) => {
    const newFiles = Array.from(event.target.files);
    setFiles([...files, ...newFiles]);
  };

  const handleRemoveFile = (index) => {
    setFiles(files.filter((_, i) => i !== index));
  };

  const steps = ['Proje Bilgileri', 'Dosya Yükleme', 'İnceleme'];

  const renderStepContent = (step) => {
    const slideVariants = {
      enter: {
        x: 50,
        opacity: 0
      },
      center: {
        x: 0,
        opacity: 1
      },
      exit: {
        x: -50,
        opacity: 0
      }
    };

    return (
      <AnimatePresence mode="wait">
        <motion.div
          key={step}
          initial="enter"
          animate="center"
          exit="exit"
          variants={slideVariants}
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 }
          }}
        >
          {(() => {
            switch (step) {
              case 0:
                return (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    <Grid container spacing={{ xs: 2, sm: 3 }}>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          fullWidth
                          label="Proje Adı"
                          name="projectName"
                          value={formData.projectName}
                          onChange={(e) => setFormData({ ...formData, projectName: e.target.value })}
                          sx={{
                            '& .MuiOutlinedInput-root': {
                              color: 'white',
                              '& fieldset': { borderColor: 'rgba(255,255,255,0.3)' },
                              '&:hover fieldset': { borderColor: '#1DB954' },
                            },
                            '& .MuiInputLabel-root': { color: 'rgba(255,255,255,0.7)' }
                          }}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          fullWidth
                          label="Sanatçı Adı"
                          name="artistName"
                          value={formData.artistName}
                          onChange={(e) => setFormData({ ...formData, artistName: e.target.value })}
                          sx={{
                            '& .MuiOutlinedInput-root': {
                              color: 'white',
                              '& fieldset': { borderColor: 'rgba(255,255,255,0.3)' },
                              '&:hover fieldset': { borderColor: '#1DB954' },
                            },
                            '& .MuiInputLabel-root': { color: 'rgba(255,255,255,0.7)' }
                          }}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          fullWidth
                          label="E-posta"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          sx={{
                            '& .MuiOutlinedInput-root': {
                              color: 'white',
                              '& fieldset': { borderColor: 'rgba(255,255,255,0.3)' },
                              '&:hover fieldset': { borderColor: '#1DB954' },
                            },
                            '& .MuiInputLabel-root': { color: 'rgba(255,255,255,0.7)' }
                          }}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          fullWidth
                          label="Telefon"
                          name="phone"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          sx={{
                            '& .MuiOutlinedInput-root': {
                              color: 'white',
                              '& fieldset': { borderColor: 'rgba(255,255,255,0.3)' },
                              '&:hover fieldset': { borderColor: '#1DB954' },
                            },
                            '& .MuiInputLabel-root': { color: 'rgba(255,255,255,0.7)' }
                          }}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <Autocomplete
                          multiple
                          freeSolo
                          options={predefinedGenres}
                          value={formData.genres}
                          onChange={(event, newValue) => {
                            setFormData({ ...formData, genres: newValue });
                          }}
                          renderTags={(value, getTagProps) =>
                            value.map((option, index) => (
                              <Chip
                                key={index}
                                label={option}
                                {...getTagProps({ index })}
                                sx={{
                                  bgcolor: 'rgba(29, 185, 84, 0.1)',
                                  color: '#1DB954',
                                  '& .MuiChip-deleteIcon': {
                                    color: '#1DB954',
                                    '&:hover': { color: '#ff4444' }
                                  }
                                }}
                              />
                            ))
                          }
                          renderInput={(params) => (
                            <TextField
                              {...params}
                              label="Müzik Türü"
                              placeholder="Tür seçin veya ekleyin"
                              sx={{
                                '& .MuiOutlinedInput-root': {
                                  color: 'white',
                                  '& fieldset': { 
                                    borderColor: '#1DB954',
                                    borderWidth: '1px'
                                  },
                                  '&:hover fieldset': { 
                                    borderColor: '#1DB954',
                                    borderWidth: '2px'
                                  },
                                  '&.Mui-focused fieldset': {
                                    borderColor: '#1DB954',
                                    borderWidth: '2px'
                                  }
                                },
                                '& .MuiInputLabel-root': { 
                                  color: '#1DB954'
                                },
                                '& .MuiInputLabel-root.Mui-focused': {
                                  color: '#1DB954'
                                }
                              }}
                            />
                          )}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          fullWidth
                          multiline
                          rows={4}
                          label="Notlar"
                          name="notes"
                          value={formData.notes}
                          onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                          sx={{
                            '& .MuiOutlinedInput-root': {
                              color: 'white',
                              '& fieldset': { borderColor: 'rgba(255,255,255,0.3)' },
                              '&:hover fieldset': { borderColor: '#1DB954' },
                            },
                            '& .MuiInputLabel-root': { color: 'rgba(255,255,255,0.7)' }
                          }}
                        />
                      </Grid>
                    </Grid>
                  </motion.div>
                );

              case 1:
                return (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    <Paper
                      sx={{
                        bgcolor: 'rgba(255,255,255,0.05)',
                        p: { xs: 2, sm: 3 },
                        mb: 3,
                        border: '2px dashed rgba(255,255,255,0.2)',
                        textAlign: 'center',
                        cursor: 'pointer',
                        minHeight: '200px',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center'
                      }}
                      component="label"
                    >
                      <input
                        type="file"
                        multiple
                        hidden
                        onChange={handleFileUpload}
                        accept="audio/*"
                      />
                      <CloudUpload 
                        sx={{ 
                          fontSize: { xs: 48, sm: 64 }, 
                          color: '#1DB954', 
                          mb: 2,
                          opacity: 0.8,
                          '&:hover': { opacity: 1 }
                        }} 
                      />
                      <Typography 
                        variant="h6" 
                        sx={{ 
                          mb: 1,
                          fontSize: { xs: '1rem', sm: '1.25rem' }
                        }}
                      >
                        Dosyaları Yükle
                      </Typography>
                      <Typography 
                        variant="body2" 
                        sx={{ 
                          color: 'rgba(255,255,255,0.7)',
                          fontSize: { xs: '0.8rem', sm: '0.9rem' }
                        }}
                      >
                        veya sürükle bırak
                      </Typography>
                    </Paper>

                    <List>
                      {files.map((file, index) => (
                        <ListItem
                          key={index}
                          sx={{
                            bgcolor: 'rgba(255,255,255,0.05)',
                            borderRadius: 1,
                            mb: 1
                          }}
                        >
                          <ListItemText
                            primary={file.name}
                            secondary={`${(file.size / (1024 * 1024)).toFixed(2)} MB`}
                            sx={{
                              '& .MuiListItemText-primary': { color: 'white' },
                              '& .MuiListItemText-secondary': { color: 'rgba(255,255,255,0.7)' }
                            }}
                          />
                          <ListItemSecondaryAction>
                            <IconButton
                              edge="end"
                              onClick={() => handleRemoveFile(index)}
                              sx={{ color: '#ff4444' }}
                            >
                              <Delete />
                            </IconButton>
                          </ListItemSecondaryAction>
                        </ListItem>
                      ))}
                    </List>
                  </motion.div>
                );

              case 2:
                return (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    <Grid container spacing={3}>
                      <Grid item xs={12}>
                        <Paper 
                          sx={{ 
                            bgcolor: 'rgba(255,255,255,0.05)', 
                            p: { xs: 3, sm: 4 },
                            borderRadius: 2,
                            boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
                          }}
                        >
                          <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.3 }}
                          >
                            <Typography 
                              variant="h5" 
                              sx={{ 
                                mb: 3, 
                                color: '#1DB954',
                                fontWeight: 600,
                                display: 'flex',
                                alignItems: 'center',
                                gap: 1
                              }}
                            >
                              <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: 0.4 }}
                              >
                                ✓
                              </motion.div>
                              Proje Özeti
                            </Typography>

                            <Grid container spacing={3}>
                              <Grid item xs={12} md={6}>
                                <Box sx={{ mb: 3 }}>
                                  <Typography 
                                    variant="subtitle2" 
                                    sx={{ 
                                      color: 'rgba(255,255,255,0.7)',
                                      mb: 1,
                                      fontSize: '0.9rem'
                                    }}
                                  >
                                    Proje Detayları
                                  </Typography>
                                  <Card sx={{ bgcolor: 'rgba(255,255,255,0.03)', p: 2 }}>
                                    <Stack spacing={2}>
                                      <Box>
                                        <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.5)' }}>
                                          Proje Adı
                                        </Typography>
                                        <Typography variant="body1" sx={{ fontWeight: 500 }}>
                                          {formData.projectName}
                                        </Typography>
                                      </Box>
                                      <Box>
                                        <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.5)' }}>
                                          Sanatçı
                                        </Typography>
                                        <Typography variant="body1" sx={{ fontWeight: 500 }}>
                                          {formData.artistName}
                                        </Typography>
                                      </Box>
                                    </Stack>
                                  </Card>
                                </Box>
                              </Grid>

                              <Grid item xs={12} md={6}>
                                <Box sx={{ mb: 3 }}>
                                  <Typography 
                                    variant="subtitle2" 
                                    sx={{ 
                                      color: 'rgba(255,255,255,0.7)',
                                      mb: 1,
                                      fontSize: '0.9rem'
                                    }}
                                  >
                                    İletişim Bilgileri
                                  </Typography>
                                  <Card sx={{ bgcolor: 'rgba(255,255,255,0.03)', p: 2 }}>
                                    <Stack spacing={2}>
                                      <Box>
                                        <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.5)' }}>
                                          E-posta
                                        </Typography>
                                        <Typography variant="body1" sx={{ fontWeight: 500 }}>
                                          {formData.email}
                                        </Typography>
                                      </Box>
                                      <Box>
                                        <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.5)' }}>
                                          Telefon
                                        </Typography>
                                        <Typography variant="body1" sx={{ fontWeight: 500 }}>
                                          {formData.phone}
                                        </Typography>
                                      </Box>
                                    </Stack>
                                  </Card>
                                </Box>
                              </Grid>

                              <Grid item xs={12}>
                                <Box sx={{ mb: 3 }}>
                                  <Typography 
                                    variant="subtitle2" 
                                    sx={{ 
                                      color: 'rgba(255,255,255,0.7)',
                                      mb: 1,
                                      fontSize: '0.9rem'
                                    }}
                                  >
                                    Müzik Türleri
                                  </Typography>
                                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                                    {formData.genres.map((genre, index) => (
                                      <Chip
                                        key={index}
                                        label={genre}
                                        sx={{
                                          bgcolor: 'rgba(29, 185, 84, 0.1)',
                                          color: '#1DB954',
                                          fontWeight: 500
                                        }}
                                      />
                                    ))}
                                  </Box>
                                </Box>
                              </Grid>

                              <Grid item xs={12}>
                                <Box sx={{ mb: 3 }}>
                                  <Typography 
                                    variant="subtitle2" 
                                    sx={{ 
                                      color: 'rgba(255,255,255,0.7)',
                                      mb: 1,
                                      fontSize: '0.9rem'
                                    }}
                                  >
                                    Yüklenen Dosyalar
                                  </Typography>
                                  <Card 
                                    sx={{ 
                                      bgcolor: 'rgba(255,255,255,0.03)', 
                                      p: 2,
                                      border: '1px solid rgba(29, 185, 84, 0.2)'
                                    }}
                                  >
                                    <Stack direction="row" alignItems="center" spacing={2}>
                                      <Box 
                                        sx={{ 
                                          bgcolor: 'rgba(29, 185, 84, 0.1)', 
                                          p: 1, 
                                          borderRadius: 1,
                                          display: 'flex',
                                          alignItems: 'center'
                                        }}
                                      >
                                        <CloudUpload sx={{ color: '#1DB954' }} />
                                      </Box>
                                      <Typography variant="body1" sx={{ fontWeight: 500 }}>
                                        {files.length} dosya yüklendi
                                      </Typography>
                                    </Stack>
                                  </Card>
                                </Box>
                              </Grid>

                              <Grid item xs={12}>
                                <Box>
                                  <Typography 
                                    variant="subtitle2" 
                                    sx={{ 
                                      color: 'rgba(255,255,255,0.7)',
                                      mb: 2,
                                      fontSize: '0.9rem'
                                    }}
                                  >
                                    Hesap Oluştur
                                  </Typography>
                                  <TextField
                                    fullWidth
                                    type={showPassword ? 'text' : 'password'}
                                    label="Şifre"
                                    value={formData.password}
                                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                    helperText="En az 8 karakter, 1 büyük harf ve 1 rakam içermelidir"
                                    error={!!passwordError}
                                    sx={{
                                      '& .MuiOutlinedInput-root': {
                                        color: 'white',
                                        '& fieldset': { 
                                          borderColor: '#1DB954',
                                          borderWidth: '1px'
                                        },
                                        '&:hover fieldset': { 
                                          borderColor: '#1DB954',
                                          borderWidth: '2px'
                                        }
                                      },
                                      '& .MuiInputLabel-root': { color: '#1DB954' },
                                      '& .MuiFormHelperText-root': {
                                        color: passwordError ? '#ff4444' : 'rgba(255,255,255,0.5)'
                                      }
                                    }}
                                    InputProps={{
                                      endAdornment: (
                                        <IconButton
                                          onClick={() => setShowPassword(!showPassword)}
                                          edge="end"
                                          sx={{ color: '#1DB954' }}
                                        >
                                          {showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                      ),
                                    }}
                                  />
                                  <Typography 
                                    variant="body2" 
                                    sx={{ 
                                      color: 'rgba(255,255,255,0.5)', 
                                      mt: 2,
                                      fontSize: '0.8rem'
                                    }}
                                  >
                                    Devam ederek{' '}
                                    <Button 
                                      onClick={() => setTermsOpen(true)}
                                      sx={{ 
                                        color: '#1DB954', 
                                        p: 0, 
                                        minWidth: 'auto',
                                        textTransform: 'none',
                                        fontWeight: 'normal',
                                        fontSize: 'inherit',
                                        '&:hover': {
                                          bgcolor: 'transparent',
                                          textDecoration: 'underline'
                                        }
                                      }}
                                    >
                                      Kullanım Koşulları
                                    </Button>
                                    {' '}ve{' '}
                                    <Button
                                      onClick={() => setPrivacyOpen(true)}
                                      sx={{ 
                                        color: '#1DB954', 
                                        p: 0, 
                                        minWidth: 'auto',
                                        textTransform: 'none',
                                        fontWeight: 'normal',
                                        fontSize: 'inherit',
                                        '&:hover': {
                                          bgcolor: 'transparent',
                                          textDecoration: 'underline'
                                        }
                                      }}
                                    >
                                      Gizlilik Politikası
                                    </Button>
                                    'nı kabul etmiş olursunuz.
                                  </Typography>
                                </Box>
                              </Grid>
                            </Grid>
                          </motion.div>
                        </Paper>
                      </Grid>
                    </Grid>
                  </motion.div>
                );

              default:
                return null;
            }
          })()}
        </motion.div>
      </AnimatePresence>
    );
  };

  const TermsModal = () => (
    <Dialog 
      open={termsOpen} 
      onClose={() => setTermsOpen(false)}
      maxWidth="md"
      fullWidth
      PaperProps={{
        sx: {
          bgcolor: '#121212',
          color: '#fff',
          borderRadius: 2,
        }
      }}
    >
      <DialogTitle sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography variant="h6">Kullanım Koşulları</Typography>
        <IconButton onClick={() => setTermsOpen(false)} sx={{ color: '#fff' }}>
          <Close />
        </IconButton>
      </DialogTitle>
      <DialogContent dividers sx={{ bgcolor: '#121212', borderColor: 'rgba(255,255,255,0.1)' }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
          <Box>
            <Typography variant="h6" sx={{ color: '#1DB954', mb: 2 }}>
              1. Hizmet Kullanımı
            </Typography>
            <Typography sx={{ color: 'rgba(255,255,255,0.7)', mb: 1 }}>
              MixMaster.service platformunu kullanarak, aşağıdaki koşulları kabul etmiş olursunuz:
            </Typography>
            <ul style={{ color: 'rgba(255,255,255,0.7)', paddingLeft: '20px' }}>
              <li>Yüklenen içeriklerin telif haklarına sahip olduğunuzu</li>
              <li>Hizmetin kötüye kullanılmayacağını</li>
              <li>Projelerin gizliliğine saygı gösterileceğini</li>
            </ul>
          </Box>
          {/* Diğer bölümler... */}
        </Box>
      </DialogContent>
    </Dialog>
  );

  const PrivacyModal = () => (
    <Dialog 
      open={privacyOpen} 
      onClose={() => setPrivacyOpen(false)}
      maxWidth="md"
      fullWidth
      PaperProps={{
        sx: {
          bgcolor: '#121212',
          color: '#fff',
          borderRadius: 2,
        }
      }}
    >
      <DialogTitle sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography variant="h6">Gizlilik Politikası</Typography>
        <IconButton onClick={() => setPrivacyOpen(false)} sx={{ color: '#fff' }}>
          <Close />
        </IconButton>
      </DialogTitle>
      <DialogContent dividers sx={{ bgcolor: '#121212', borderColor: 'rgba(255,255,255,0.1)' }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
          <Box>
            <Typography variant="h6" sx={{ color: '#1DB954', mb: 2 }}>
              1. Veri Toplama ve Kullanımı
            </Typography>
            <Typography sx={{ color: 'rgba(255,255,255,0.7)', mb: 1 }}>
              Topladığımız kişisel veriler:
            </Typography>
            <ul style={{ color: 'rgba(255,255,255,0.7)', paddingLeft: '20px' }}>
              <li>İletişim bilgileri (e-posta, telefon)</li>
              <li>Proje detayları ve dosyaları</li>
              <li>Ödeme bilgileri</li>
            </ul>
          </Box>
          {/* Diğer bölümler... */}
        </Box>
      </DialogContent>
    </Dialog>
  );

  return (
    <Box sx={{ 
      bgcolor: '#121212', 
      color: 'white',
      minHeight: '100vh',
      py: { xs: 4, sm: 6, md: 8 }
    }}>
      <Container maxWidth="lg">
        <Box sx={{ mb: { xs: 3, sm: 4 } }}>
          <IconButton
            onClick={() => navigate(-1)}
            sx={{ 
              color: '#1DB954',
              mb: 2,
              display: { xs: 'inline-flex', sm: 'none' }
            }}
          >
            <ArrowBack />
          </IconButton>
          <Typography 
            variant="h4" 
            sx={{ 
              mb: 1,
              fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' },
              fontWeight: 600
            }}
          >
            {packageType === 'mix' ? 'Mix' : 
             packageType === 'master' ? 'Master' : 
             'Mix & Master'} Projesi Oluştur
          </Typography>
          <Typography 
            sx={{ 
              color: 'rgba(255,255,255,0.7)',
              fontSize: { xs: '0.9rem', sm: '1rem' }
            }}
          >
            Projeniz için gerekli bilgileri doldurun
          </Typography>
        </Box>

        <Stepper 
          activeStep={activeStep} 
          alternativeLabel
          sx={{ 
            mb: { xs: 4, sm: 5 },
            '& .MuiStepLabel-label': {
              color: 'rgba(255,255,255,0.5)',
              fontSize: { xs: '0.8rem', sm: '0.9rem' },
              transition: 'all 0.3s ease'
            },
            '& .MuiStepLabel-label.Mui-active': {
              color: '#1DB954',
              transform: 'scale(1.05)',
              fontWeight: 600
            },
            '& .MuiStepLabel-label.Mui-completed': {
              color: '#1DB954'
            },
            '& .MuiStepIcon-root': {
              transition: 'all 0.3s ease',
              '&.Mui-active': {
                transform: 'scale(1.2)'
              }
            },
            '& .MuiStepConnector-line': {
              transition: 'all 0.3s ease'
            }
          }}
        >
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>

        {renderStepContent(activeStep)}

        <Box sx={{ 
          mt: { xs: 3, sm: 4 },
          display: 'flex',
          justifyContent: 'space-between',
          gap: 2
        }}>
          <Button
            disabled={activeStep === 0}
            onClick={handleBack}
            sx={{
              color: 'white',
              borderColor: 'rgba(255,255,255,0.3)',
              '&:hover': { borderColor: 'white' },
              display: { xs: 'none', sm: 'inline-flex' }
            }}
          >
            Geri
          </Button>
          <Button
            variant="contained"
            onClick={activeStep === steps.length - 1 ? handleSubmit : handleNext}
            disabled={loading}
            sx={{
              bgcolor: '#1DB954',
              '&:hover': { 
                bgcolor: '#1ed760',
                transform: 'translateY(-2px)',
                boxShadow: '0 5px 15px rgba(29, 185, 84, 0.4)'
              },
              flex: { xs: '1', sm: '0 0 auto' },
              py: { xs: 1.5, sm: 2 },
              px: { xs: 3, sm: 4 },
              fontSize: { xs: '0.9rem', sm: '1rem' },
              transition: 'all 0.3s ease'
            }}
          >
            {loading ? (
              <CircularProgress size={24} sx={{ color: 'white' }} />
            ) : (
              activeStep === steps.length - 1 ? 'Tamamla' : 'Devam Et'
            )}
          </Button>
        </Box>
      </Container>
      <TermsModal />
      <PrivacyModal />
    </Box>
  );
};

export default ProjectForm; 