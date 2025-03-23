import React from 'react';
import {
  Box,
  Container,
  Typography,
  IconButton,
  Card,
  CardContent,
} from '@mui/material';
import { ArrowBack } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const PrivacyPolicy = () => {
  const navigate = useNavigate();

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
            onClick={() => navigate(-1)}
            sx={{ color: '#fff' }}
          >
            <ArrowBack />
          </IconButton>
          <Typography variant="h5" sx={{ fontWeight: 600 }}>
            Gizlilik Politikası
          </Typography>
        </Box>

        <Card sx={{ bgcolor: 'rgba(255,255,255,0.05)', borderRadius: 2 }}>
          <CardContent sx={{ p: { xs: 2, sm: 3 } }}>
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

              <Box>
                <Typography variant="h6" sx={{ color: '#1DB954', mb: 2 }}>
                  2. Veri Güvenliği
                </Typography>
                <Typography sx={{ color: 'rgba(255,255,255,0.7)', mb: 1 }}>
                  Verilerinizin korunması için aldığımız önlemler:
                </Typography>
                <ul style={{ color: 'rgba(255,255,255,0.7)', paddingLeft: '20px' }}>
                  <li>SSL şifreleme ile güvenli veri transferi</li>
                  <li>Düzenli güvenlik güncellemeleri</li>
                  <li>Sınırlı personel erişimi</li>
                </ul>
              </Box>

              <Box>
                <Typography variant="h6" sx={{ color: '#1DB954', mb: 2 }}>
                  3. Proje Gizliliği
                </Typography>
                <Typography sx={{ color: 'rgba(255,255,255,0.7)', mb: 1 }}>
                  Projelerinizin gizliliği konusunda:
                </Typography>
                <ul style={{ color: 'rgba(255,255,255,0.7)', paddingLeft: '20px' }}>
                  <li>Tüm dosyalar şifreli depolanır</li>
                  <li>NDA anlaşması yapılabilir</li>
                  <li>Proje içerikleri üçüncü taraflarla paylaşılmaz</li>
                </ul>
              </Box>
            </Box>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
};

export default PrivacyPolicy; 