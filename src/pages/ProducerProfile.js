import React from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Button,
  Avatar,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Stack,
  Chip,
  Divider
} from '@mui/material';
import { PlayArrow, Pause, Favorite, Share, Star } from '@mui/icons-material';
import { tr } from '../translations/tr';

const ProducerProfile = () => {
  const [isPlaying, setIsPlaying] = React.useState(false);

  const producer = {
    name: "Alex Thompson",
    avatar: "/images/producer-avatar.jpg",
    coverImage: "/images/studio-cover.jpg",
    role: "Mix & Mastering Engineer",
    location: "İstanbul, Türkiye",
    rating: 4.9,
    reviewCount: 128,
    genres: ["Hip Hop", "R&B", "Pop", "Electronic"],
    recentWorks: [
      {
        title: "Summer Vibes",
        artist: "Sarah Johnson",
        coverArt: "/images/track1.jpg",
        duration: "3:45",
        plays: "12.5K"
      },
      // ... diğer çalışmalar
    ]
  };

  return (
    <Box sx={{ bgcolor: '#121212', minHeight: '100vh', color: 'white' }}>
      {/* Hero Section */}
      <Box
        sx={{
          height: '400px',
          position: 'relative',
          backgroundImage: `url(${producer.coverImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0,0,0,0.5)'
          }
        }}
      >
        <Container sx={{ height: '100%', position: 'relative' }}>
          <Grid
            container
            sx={{
              height: '100%',
              alignItems: 'flex-end',
              pb: 4
            }}
          >
            <Grid item xs={12} md={8}>
              <Stack direction="row" spacing={3} alignItems="center">
                <Avatar
                  src={producer.avatar}
                  sx={{ width: 180, height: 180, border: '4px solid white' }}
                />
                <Box>
                  <Typography variant="overline" sx={{ color: '#1DB954' }}>
                    {producer.role}
                  </Typography>
                  <Typography variant="h3" sx={{ fontWeight: 700 }}>
                    {producer.name}
                  </Typography>
                  <Stack direction="row" spacing={1} alignItems="center" mt={1}>
                    <Star sx={{ color: '#1DB954' }} />
                    <Typography variant="body1">
                      {producer.rating} ({producer.reviewCount} {tr.reviews})
                    </Typography>
                    <Typography sx={{ mx: 1 }}>•</Typography>
                    <Typography>{producer.location}</Typography>
                  </Stack>
                </Box>
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Main Content */}
      <Container sx={{ mt: 4 }}>
        <Grid container spacing={4}>
          {/* Left Column */}
          <Grid item xs={12} md={8}>
            {/* Genres */}
            <Stack direction="row" spacing={1} mb={4}>
              {producer.genres.map((genre) => (
                <Chip
                  key={genre}
                  label={genre}
                  sx={{
                    bgcolor: 'rgba(29, 185, 84, 0.1)',
                    color: '#1DB954',
                    '&:hover': { bgcolor: 'rgba(29, 185, 84, 0.2)' }
                  }}
                />
              ))}
            </Stack>

            {/* Recent Works */}
            <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
              {tr.recentWorks}
            </Typography>
            <Stack spacing={2}>
              {producer.recentWorks.map((work) => (
                <Card
                  key={work.title}
                  sx={{
                    bgcolor: 'rgba(255,255,255,0.05)',
                    color: 'white',
                    '&:hover': { bgcolor: 'rgba(255,255,255,0.1)' }
                  }}
                >
                  <CardContent sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <CardMedia
                      component="img"
                      sx={{ width: 80, height: 80, borderRadius: 1 }}
                      image={work.coverArt}
                      alt={work.title}
                    />
                    <Box sx={{ flexGrow: 1 }}>
                      <Typography variant="h6">{work.title}</Typography>
                      <Typography variant="body2" color="gray">
                        {work.artist}
                      </Typography>
                    </Box>
                    <Typography variant="body2" color="gray">
                      {work.plays} plays
                    </Typography>
                    <IconButton
                      onClick={() => setIsPlaying(!isPlaying)}
                      sx={{ color: '#1DB954' }}
                    >
                      {isPlaying ? <Pause /> : <PlayArrow />}
                    </IconButton>
                  </CardContent>
                </Card>
              ))}
            </Stack>
          </Grid>

          {/* Right Column */}
          <Grid item xs={12} md={4}>
            <Card sx={{ bgcolor: 'rgba(255,255,255,0.05)', color: 'white', mb: 4 }}>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {tr.contactButton}
                </Typography>
                <Button
                  variant="contained"
                  fullWidth
                  sx={{
                    bgcolor: '#1DB954',
                    '&:hover': { bgcolor: '#1ed760' }
                  }}
                >
                  {tr.contactButton}
                </Button>
                <Stack direction="row" spacing={1} mt={2}>
                  <IconButton sx={{ color: 'white' }}>
                    <Favorite />
                  </IconButton>
                  <IconButton sx={{ color: 'white' }}>
                    <Share />
                  </IconButton>
                </Stack>
              </CardContent>
            </Card>

            {/* Equipment Section */}
            <Card sx={{ bgcolor: 'rgba(255,255,255,0.05)', color: 'white' }}>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {tr.equipment}
                </Typography>
                <Stack spacing={1}>
                  {producer.equipment?.map((item) => (
                    <Typography key={item} variant="body2">
                      • {item}
                    </Typography>
                  ))}
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ProducerProfile; 