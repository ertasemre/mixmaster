import React from 'react';
import {
  Box,
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  TextField,
  Button,
  Divider,
  IconButton
} from '@mui/material';
import { Send, AttachFile, ArrowBack } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const Messages = () => {
  const navigate = useNavigate();

  const conversations = [
    {
      id: 1,
      name: "Ahmet Yılmaz",
      role: "Prodüktör",
      avatar: "/images/producer1.jpg",
      lastMessage: "Mix'in ilk versiyonunu gönderdim, kontrol eder misiniz?",
      time: "14:30",
      unread: true
    },
    {
      id: 2,
      name: "MixMaster Destek",
      role: "Destek Ekibi",
      avatar: "/images/support.jpg",
      lastMessage: "Nasıl yardımcı olabiliriz?",
      time: "Dün",
      unread: false
    }
  ];

  return (
    <Box sx={{ bgcolor: '#121212', minHeight: '100vh', py: 4 }}>
      <Container>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 4 }}>
          <IconButton 
            onClick={() => navigate('/dashboard')} 
            sx={{ 
              color: 'white',
              mr: 2,
              '&:hover': { bgcolor: 'rgba(255,255,255,0.1)' }
            }}
          >
            <ArrowBack />
          </IconButton>
          <Typography variant="h4" color="white">
            Mesajlar
          </Typography>
        </Box>
        <Grid container spacing={3}>
          {/* Sol Kolon - Konuşma Listesi */}
          <Grid item xs={12} md={4}>
            <Card sx={{ bgcolor: 'rgba(255,255,255,0.05)' }}>
              <List sx={{ p: 0 }}>
                {conversations.map((conv, index) => (
                  <React.Fragment key={conv.id}>
                    <ListItem 
                      button
                      sx={{ 
                        py: 2,
                        bgcolor: conv.unread ? 'rgba(29, 185, 84, 0.1)' : 'transparent'
                      }}
                    >
                      <ListItemAvatar>
                        <Avatar src={conv.avatar} />
                      </ListItemAvatar>
                      <ListItemText
                        primary={
                          <Typography color="white">
                            {conv.name}
                          </Typography>
                        }
                        secondary={
                          <Box>
                            <Typography variant="body2" color="gray" component="span">
                              {conv.role}
                            </Typography>
                            <Typography 
                              variant="body2" 
                              color="gray" 
                              sx={{ 
                                display: 'block',
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                                whiteSpace: 'nowrap'
                              }}
                            >
                              {conv.lastMessage}
                            </Typography>
                          </Box>
                        }
                      />
                      <Typography variant="caption" color="gray">
                        {conv.time}
                      </Typography>
                    </ListItem>
                    {index < conversations.length - 1 && (
                      <Divider sx={{ bgcolor: 'rgba(255,255,255,0.1)' }} />
                    )}
                  </React.Fragment>
                ))}
              </List>
            </Card>
          </Grid>

          {/* Sağ Kolon - Mesajlaşma Alanı */}
          <Grid item xs={12} md={8}>
            <Card sx={{ bgcolor: 'rgba(255,255,255,0.05)', height: '70vh', display: 'flex', flexDirection: 'column' }}>
              {/* Mesaj Başlığı */}
              <Box sx={{ p: 2, borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                <Typography variant="h6" color="white">
                  Ahmet Yılmaz
                </Typography>
                <Typography variant="body2" color="gray">
                  Prodüktör
                </Typography>
              </Box>

              {/* Mesaj Alanı */}
              <Box sx={{ flexGrow: 1, p: 2, overflowY: 'auto' }}>
                {/* Örnek mesajlar */}
                <Box sx={{ display: 'flex', mb: 2 }}>
                  <Avatar sx={{ mr: 2 }} src="/images/producer1.jpg" />
                  <Box>
                    <Typography variant="body2" color="gray">
                      Ahmet Yılmaz
                    </Typography>
                    <Card sx={{ bgcolor: 'rgba(255,255,255,0.1)', p: 1 }}>
                      <Typography color="white">
                        Mix'in ilk versiyonunu gönderdim, kontrol eder misiniz?
                      </Typography>
                    </Card>
                  </Box>
                </Box>
              </Box>

              {/* Mesaj Yazma Alanı */}
              <Box sx={{ p: 2, borderTop: '1px solid rgba(255,255,255,0.1)' }}>
                <Grid container spacing={2} alignItems="center">
                  <Grid item>
                    <IconButton sx={{ color: 'gray' }}>
                      <AttachFile />
                    </IconButton>
                  </Grid>
                  <Grid item xs>
                    <TextField
                      fullWidth
                      placeholder="Mesajınızı yazın..."
                      variant="outlined"
                      size="small"
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          color: 'white',
                          '& fieldset': { borderColor: 'rgba(255,255,255,0.2)' },
                          '&:hover fieldset': { borderColor: 'rgba(255,255,255,0.3)' },
                        }
                      }}
                    />
                  </Grid>
                  <Grid item>
                    <IconButton sx={{ color: '#1DB954' }}>
                      <Send />
                    </IconButton>
                  </Grid>
                </Grid>
              </Box>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Messages; 