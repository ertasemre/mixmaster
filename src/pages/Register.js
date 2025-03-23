import React from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  TextField, 
  Button, 
  Paper,
  Grid 
} from '@mui/material';

const Register = () => {
  return (
    <Box sx={{ 
      minHeight: '100vh',
      py: 8,
      background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)'
    }}>
      <Container maxWidth="sm">
        <Paper sx={{ p: 4 }}>
          <Typography variant="h4" component="h1" align="center" gutterBottom>
            Hesap Oluştur
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Ad Soyad"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Email"
                type="email"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Şifre"
                type="password"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                fullWidth
                variant="contained"
                size="large"
                sx={{
                  backgroundColor: '#2196F3',
                  '&:hover': {
                    backgroundColor: '#1976D2'
                  }
                }}
              >
                Kayıt Ol
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </Box>
  );
};

export default Register; 