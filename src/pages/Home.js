import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import {
  Box,
  Container,
  Grid,
  Typography,
  Button,
  Card,
  CardContent,
  Stack,
  Avatar,
  Divider,
  Accordion,
  AccordionSummary,
  AccordionDetails
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { 
  Timeline,
  AudioFile,
  Speed,
  Headphones,
  Star,
  MusicNote,
  AccessTime,
  Refresh,
  CloudUpload,
  Autorenew,
  Person,
  ExpandMore
} from '@mui/icons-material';
import CountUp from 'react-countup';
import { Helmet } from 'react-helmet-async';

const AnimatedSection = ({ children }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8 }}
    >
      {children}
    </motion.div>
  );
};

const Home = () => {
  const navigate = useNavigate();
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"]
  });

  // Paralaks efekti için transform değerleri
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const features = [
    {
      icon: <AudioFile sx={{ fontSize: 32, color: 'white' }} />,
      title: 'Profesyonel Kalite',
      description: 'Deneyimli mühendisler tarafından endüstri standardında mix ve mastering'
    },
    {
      icon: <AccessTime sx={{ 
        fontSize: 32, 
        color: 'white'
      }} />,
      title: 'Hızlı Teslimat',
      description: 'Mix için 3-5 gün, Master için 2-3 gün içinde profesyonel teslimat'
    },
    {
      icon: <Autorenew sx={{ 
        fontSize: 32, 
        color: 'white'
      }} />,
      title: 'Sınırsız Revizyon',
      description: 'Her paket için 2 ücretsiz revizyon hakkı ve detaylı geri bildirim'
    }
  ];

  const testimonials = [
    {
      name: 'Ahmet Yılmaz',
      role: 'Kayıt Sanatçısı',
      avatar: '/images/avatar1.jpg',
      quote: 'İş kalitesi beklentilerimi aştı. Kesinlikle tavsiye ederim!',
      rating: 5
    },
    {
      name: 'Mehmet Kaya',
      role: 'Prodüktör',
      avatar: '/images/avatar2.jpg',
      quote: 'Detaylara gösterilen özen ile profesyonel bir hizmet.',
      rating: 5
    }
  ];

  const steps = [
    { 
      icon: <MusicNote sx={{ fontSize: 32, color: '#fff' }} />,
      title: 'Paket Seçin',
      desc: 'İhtiyacınıza uygun hizmeti seçin'
    },
    {
      icon: <CloudUpload sx={{ fontSize: 32, color: '#fff' }} />,
      title: 'Dosyaları Yükleyin',
      desc: 'Parçalarınızı ve gereksinimlerinizi gönderin'
    },
    {
      icon: <Headphones sx={{ fontSize: 32, color: '#fff' }} />,
      title: 'İnceleyin ve Onaylayın',
      desc: 'Onay sürecinde geri bildirim ve alt detayla dökümante ediyoruz'
    }
  ];

  const stats = [
    { value: '500+', label: 'Tamamlanan Proje' },
    { value: '100%', label: 'Müşteri Memnuniyeti' },
    { value: '48h', label: 'Ortalama Teslimat' }
  ];

  const faqData = [
    {
      question: "Mix ve mastering arasındaki fark nedir?",
      answer: "Mix, şarkınızdaki her bir enstrümanın ve vokalin seviyelerini, yerleşimlerini ve efektlerini düzenleyen süreçtir. Mastering ise mix'i yapılmış şarkının son halinin profesyonel standartlara getirilmesi, tüm platformlarda tutarlı bir ses vermesi için yapılan son işlemdir."
    },
    {
      question: "Projemi nasıl gönderebilirim?",
      answer: "Paketlerden size uygun olanı seçtikten sonra, proje formunu doldurarak ses dosyalarınızı yükleyebilirsiniz. WAV formatında, minimum 44.1kHz/24bit kalitesinde dosyalar öneriyoruz."
    },
    {
      question: "Revizyon hakkım var mı?",
      answer: "Evet, tüm paketlerimizde revizyon hakkı bulunmaktadır. Basic pakette 1, Premium pakette 3, Pro pakette ise sınırsız revizyon hakkı sunuyoruz."
    },
    {
      question: "Teslimat süresi ne kadar?",
      answer: "Ortalama teslimat süremiz 3-5 iş günüdür. Yoğunluğa göre bu süre değişebilir, ancak size her zaman net bir tarih bilgisi veririz."
    },
    {
      question: "Hangi ödeme yöntemlerini kabul ediyorsunuz?",
      answer: "Kredi kartı, banka havalesi ve online ödeme sistemleri üzerinden ödeme kabul ediyoruz. Ödemeleriniz SSL ile güvence altındadır."
    },
    {
      question: "Dosyalarımın gizliliği nasıl korunuyor?",
      answer: "Tüm projeleriniz şifreli sunucularda saklanır ve sadece sizin ve atanan prodüktörünüzün erişimine açıktır. İsteğe bağlı olarak NDA imzalayabiliriz."
    }
  ];

  return (
    <>
      <Helmet>
        <title>MixMaster | Profesyonel Mix ve Mastering Hizmetleri</title>
        <meta name="description" content="Müziğinizi profesyonel mix ve mastering hizmetleriyle bir üst seviyeye taşıyın. Deneyimli ses mühendislerimizle çalışın." />
        <meta name="keywords" content="mix, mastering, müzik prodüksiyon, ses mühendisliği, stüdyo" />
        <meta property="og:title" content="MixMaster - Profesyonel Mix ve Mastering Hizmetleri" />
        <meta property="og:description" content="Müziğinizi profesyonel mix ve mastering hizmetleriyle bir üst seviyeye taşıyın." />
        <meta property="og:image" content="/images/studio.jpg" />
        <link rel="canonical" href="https://mixmaster.com" />
      </Helmet>

      <Box ref={targetRef} sx={{ bgcolor: '#121212', color: 'white' }}>
        {/* Hero Section - Paralaks Efekti */}
        <Box
          sx={{
            background: 'linear-gradient(45deg, #121212 30%, #1DB954 90%)',
            pt: { xs: 8, sm: 12, md: 16 },
            pb: { xs: 12, sm: 16, md: 20 },
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          <motion.div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundImage: 'url(/images/wave-pattern.svg)',
              backgroundSize: 'cover',
              opacity: 0.1,
              y,
              opacity
            }}
          />
          <Container maxWidth="lg">
            <Grid container spacing={4} alignItems="center">
              <Grid item xs={12} md={6}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <Typography 
                    variant="h1" 
                    sx={{ 
                      fontWeight: 700,
                      mb: { xs: 2, sm: 3 },
                      fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4rem' },
                      lineHeight: { xs: 1.2, md: 1.1 }
                    }}
                  >
                    Müziğinizi Dönüştürün
                  </Typography>
                  <Typography 
                    variant="h5" 
                    sx={{ 
                      mb: { xs: 3, sm: 4 },
                      fontSize: { xs: '1rem', sm: '1.25rem', md: '1.5rem' },
                      opacity: 0.9,
                      maxWidth: '600px'
                    }}
                  >
                    Müziğinizi hayata geçiren profesyonel mix ve mastering hizmetleri
                  </Typography>
                  <Button
                    variant="contained"
                    onClick={() => navigate('/packages')}
                    sx={{ 
                      bgcolor: '#1DB954',
                      '&:hover': { 
                        bgcolor: '#1ed760',
                        transform: 'translateY(-2px)',
                        boxShadow: '0 5px 15px rgba(29, 185, 84, 0.4)'
                      },
                      textTransform: 'none',
                      borderRadius: '50px',
                      px: { xs: 4, sm: 5, md: 6 },
                      py: { xs: 1.5, sm: 1.75, md: 2 },
                      fontSize: { xs: '1rem', sm: '1.1rem', md: '1.2rem' },
                      fontWeight: 600,
                      transition: 'all 0.2s ease-in-out'
                    }}
                  >
                    Başla
                  </Button>
                </motion.div>
              </Grid>
            </Grid>
          </Container>
        </Box>

        {/* Stats Section - Sayaç Animasyonu */}
        <Container 
          sx={{ 
            mt: { xs: -8, sm: -10, md: -12 },
            mb: { xs: 6, sm: 8, md: 10 }
          }}
        >
          <Grid container spacing={{ xs: 2, sm: 3, md: 4 }}>
            {stats.map((stat, index) => (
              <Grid item xs={12} sm={4} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  <Card
                    sx={{
                      bgcolor: 'rgba(255,255,255,0.05)',
                      p: { xs: 3, sm: 4 },
                      textAlign: 'center',
                      borderRadius: 2,
                      backdropFilter: 'blur(10px)',
                      transition: 'transform 0.2s ease-in-out',
                      '&:hover': {
                        transform: 'translateY(-5px)'
                      }
                    }}
                  >
                    <Typography 
                      variant="h3" 
                      sx={{ 
                        color: '#1DB954',
                        mb: 1,
                        fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
                        fontWeight: 700
                      }}
                    >
                      {stat.value}
                    </Typography>
                    <Typography 
                      sx={{ 
                        fontSize: { xs: '0.9rem', sm: '1rem', md: '1.1rem' },
                        opacity: 0.9
                      }}
                    >
                      {stat.label}
                    </Typography>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>

        {/* Features Section */}
        <Container sx={{ py: { xs: 4, sm: 5, md: 6 } }}>
          <AnimatedSection>
            <Typography 
              variant="h2" 
              sx={{ 
                fontSize: { xs: '1.75rem', sm: '2rem', md: '3rem' },
                textAlign: 'center',
                mb: { xs: 1, sm: 2 }
              }}
            >
              Neden Bizi Seçmelisiniz?
            </Typography>
            <Typography 
              variant="h6" 
              sx={{ 
                fontSize: { xs: '0.875rem', sm: '1rem', md: '1.25rem' },
                textAlign: 'center',
                mb: { xs: 3, sm: 4 },
                px: { xs: 2, sm: 0 }
              }}
            >
              Profesyonel hizmetlerimizle farkı deneyimleyin
            </Typography>

            <Grid container spacing={{ xs: 2, sm: 3, md: 4 }} justifyContent="center">
              {features.map((feature, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <Card sx={{ 
                    bgcolor: 'rgba(255,255,255,0.05)', 
                    p: { xs: 2, sm: 3, md: 4 }, 
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    transition: 'all 0.3s ease-in-out',
                    '&:hover': {
                      transform: { xs: 'none', md: 'translateY(-8px)' },
                      boxShadow: '0 10px 30px rgba(0,0,0,0.3)'
                    },
                    cursor: 'pointer',
                    position: 'relative',
                    overflow: 'hidden',
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      height: '2px',
                      bgcolor: '#1DB954',
                      transform: 'scaleX(0)',
                      transition: 'transform 0.3s ease-in-out',
                    },
                    '&:hover::after': {
                      transform: 'scaleX(1)'
                    }
                  }}>
                    <Box sx={{ 
                      bgcolor: '#1DB954', 
                      width: { xs: 36, sm: 40, md: 48 },
                      height: { xs: 36, sm: 40, md: 48 },
                      borderRadius: 2,
                      mb: { xs: 1, sm: 1.5, md: 2 }
                    }}>
                      {feature.icon}
                    </Box>
                    <Typography 
                      variant="h5" 
                      sx={{
                        fontSize: { xs: '1.1rem', sm: '1.25rem', md: '1.5rem' },
                        mt: { xs: 1, sm: 1.5, md: 2 },
                        textAlign: 'center'
                      }}
                    >
                      {feature.title}
                    </Typography>
                    <Typography 
                      sx={{
                        fontSize: { xs: '0.8rem', sm: '0.875rem', md: '1rem' },
                        lineHeight: { xs: 1.4, md: 1.6 },
                        textAlign: 'center',
                        mt: { xs: 0.5, sm: 1 }
                      }}
                    >
                      {feature.description}
                    </Typography>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </AnimatedSection>
        </Container>

        {/* Process Section - Sıralı Animasyon */}
        <Container sx={{ py: 8 }}>
          <AnimatedSection>
            <Typography variant="h3" align="center" gutterBottom>
              Nasıl Çalışıyoruz?
            </Typography>
            <Typography variant="h6" align="center" sx={{ mb: 8, color: 'gray' }}>
              Müziğinizi profesyonel olarak mixletmek için basit adımlar
            </Typography>
          </AnimatedSection>
          <Grid container spacing={4}>
            {steps.map((step, index) => (
              <Grid item xs={12} md={4} key={index}>
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.3 }}
                  viewport={{ once: true }}
                >
                  <Stack 
                    spacing={2} 
                    alignItems="center"
                    sx={{ 
                      position: 'relative',
                      '&::after': {
                        content: index < 2 ? '""' : 'none',
                        position: 'absolute',
                        right: { xs: 'auto', md: '-50%' },
                        top: '20%',
                        width: { xs: 0, md: '100%' },
                        height: '2px',
                        bgcolor: '#1DB954',
                        opacity: 0.3
                      }
                    }}
                  >
                    <Avatar 
                      sx={{ 
                        width: 80, 
                        height: 80, 
                        bgcolor: '#1DB954',
                        mb: 2
                      }}
                    >
                      {step.icon}
                    </Avatar>
                    <Typography variant="h5" align="center">
                      {step.title}
                    </Typography>
                    <Typography color="gray" align="center">
                      {step.desc}
                    </Typography>
                  </Stack>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>

        {/* Testimonials Section - Fade In Animasyonu */}
        <Box sx={{ bgcolor: 'rgba(29, 185, 84, 0.05)', py: 8 }}>
          <Container>
            <AnimatedSection>
              <Typography variant="h3" align="center" gutterBottom>
                Müşterilerimiz Ne Diyor?
              </Typography>
            </AnimatedSection>
            <Grid container spacing={4} sx={{ mt: 4 }}>
              {testimonials.map((testimonial, index) => (
                <Grid item xs={12} md={6} key={testimonial.name}>
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    viewport={{ once: true }}
                  >
                    <Card sx={{ bgcolor: 'rgba(255,255,255,0.05)', height: '100%' }}>
                      <CardContent>
                        <Stack direction="row" spacing={2} alignItems="center" mb={2}>
                          <Avatar src={testimonial.avatar} sx={{ width: 60, height: 60 }} />
                          <Box>
                            <Typography variant="h6">{testimonial.name}</Typography>
                            <Typography color="gray">{testimonial.role}</Typography>
                          </Box>
                        </Stack>
                        <Typography sx={{ mb: 2, fontStyle: 'italic' }}>
                          "{testimonial.quote}"
                        </Typography>
                        <Stack direction="row" spacing={1}>
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} sx={{ color: '#1DB954' }} />
                          ))}
                        </Stack>
                      </CardContent>
                    </Card>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>

        {/* CTA Section - Scale Animasyonu */}
        <Container sx={{ py: 8 }}>
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Card 
              sx={{ 
                bgcolor: 'rgba(29, 185, 84, 0.1)',
                border: '2px solid #1DB954',
                borderRadius: 4
              }}
            >
              <CardContent sx={{ textAlign: 'center', py: 8 }}>
                <Typography variant="h3" gutterBottom>
                  Başlamaya Hazır mısınız?
                </Typography>
                <Typography variant="h6" sx={{ mb: 4, color: 'gray' }}>
                  Profesyonel mix ve mastering ile müziğinizi dönüştürün
                </Typography>
                <Button
                  variant="contained"
                  size="large"
                  onClick={() => navigate('/packages')}
                  sx={{
                    bgcolor: '#1DB954',
                    '&:hover': { bgcolor: '#1ed760' },
                    py: 2,
                    px: 6,
                    borderRadius: '50px'
                  }}
                >
                  Teklif Al
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </Container>

        {/* FAQ Section */}
        <Box sx={{ py: { xs: 6, md: 8 }, bgcolor: 'rgba(255,255,255,0.02)' }}>
          <Container maxWidth="lg">
            <Box sx={{ textAlign: 'center', mb: { xs: 4, md: 6 } }}>
              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: '1.75rem', md: '2.5rem' },
                  fontWeight: 600,
                  mb: 2
                }}
              >
                Sıkça Sorulan Sorular
              </Typography>
              <Typography
                sx={{
                  color: 'rgba(255,255,255,0.7)',
                  maxWidth: '600px',
                  mx: 'auto'
                }}
              >
                Aklınıza takılan soruların cevaplarını burada bulabilirsiniz
              </Typography>
            </Box>

            <Box sx={{ maxWidth: '800px', mx: 'auto' }}>
              {faqData.map((faq, index) => (
                <Accordion
                  key={index}
                  sx={{
                    bgcolor: 'rgba(255,255,255,0.03)',
                    color: '#fff',
                    mb: 1,
                    '&:before': { display: 'none' },
                    '&.Mui-expanded': {
                      bgcolor: 'rgba(29, 185, 84, 0.1)',
                      mb: 1
                    },
                    transition: 'all 0.3s ease',
                    border: '1px solid rgba(255,255,255,0.05)',
                  }}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMore sx={{ color: '#1DB954' }} />}
                    sx={{
                      '&.Mui-expanded': {
                        minHeight: '48px',
                        '& .MuiAccordionSummary-content': {
                          color: '#1DB954'
                        }
                      }
                    }}
                  >
                    <Typography sx={{ fontWeight: 500 }}>
                      {faq.question}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography
                      sx={{
                        color: 'rgba(255,255,255,0.7)',
                        lineHeight: 1.6
                      }}
                    >
                      {faq.answer}
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              ))}
            </Box>
          </Container>
        </Box>
      </Box>
    </>
  );
};

export default Home; 