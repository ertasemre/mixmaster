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

const TermsOfService = () => {
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
            Kullanım Koşulları
          </Typography>
        </Box>

        <Card sx={{ bgcolor: 'rgba(255,255,255,0.05)', borderRadius: 2 }}>
          <CardContent sx={{ p: { xs: 2, sm: 3 } }}>
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

              <Box>
                <Typography variant="h6" sx={{ color: '#1DB954', mb: 2 }}>
                  2. Ödeme ve İade Politikası
                </Typography>
                <Typography sx={{ color: 'rgba(255,255,255,0.7)', mb: 1 }}>
                  Hizmet paketleri için ödeme koşulları:
                </Typography>
                <ul style={{ color: 'rgba(255,255,255,0.7)', paddingLeft: '20px' }}>
                  <li>Ödemeler güvenli ödeme sistemleri üzerinden yapılır</li>
                  <li>İade talepleri ilk 24 saat içinde değerlendirilir</li>
                  <li>Başlanmış projeler için kısmi iade yapılabilir</li>
                </ul>
              </Box>

              <Box>
                <Typography variant="h6" sx={{ color: '#1DB954', mb: 2 }}>
                  3. Telif Hakları
                </Typography>
                <Typography sx={{ color: 'rgba(255,255,255,0.7)', mb: 1 }}>
                  Proje sahipliği ve haklar konusunda:
                </Typography>
                <ul style={{ color: 'rgba(255,255,255,0.7)', paddingLeft: '20px' }}>
                  <li>Final mix'in telif hakları size aittir</li>
                  <li>Referans olarak kullanım hakkı saklıdır</li>
                  <li>Üçüncü taraf içerikler için sorumluluk size aittir</li>
                </ul>
              </Box>
            </Box>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
};

export default TermsOfService; 