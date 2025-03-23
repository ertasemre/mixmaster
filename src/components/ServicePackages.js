import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';

const ServicePackages = () => {
  const navigate = useNavigate();

  const handlePackageSelect = (packageType) => {
    navigate(`/project-form/${packageType}`);
  };

  return (
    <Button
      onClick={() => handlePackageSelect('starter')}
      variant="contained"
      fullWidth
      sx={{ bgcolor: '#1DB954', '&:hover': { bgcolor: '#1ed760' } }}
    >
      Select Package
    </Button>

    <Button
      onClick={() => handlePackageSelect('pro')}
      variant="contained"
      fullWidth
      sx={{ bgcolor: '#1DB954', '&:hover': { bgcolor: '#1ed760' } }}
    >
      Select Package
    </Button>

    <Button
      onClick={() => handlePackageSelect('premium')}
      variant="contained"
      fullWidth
      sx={{ bgcolor: '#1DB954', '&:hover': { bgcolor: '#1ed760' } }}
    >
      Select Package
    </Button>
  );
};

export default ServicePackages; 