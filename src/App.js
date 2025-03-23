import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme';
import Navbar from './components/Navbar';
import ServicePackages from './pages/ServicePackages';
import ProjectDetails from './pages/ProjectDetails';
import Home from './pages/Home';
import Producers from './pages/Producers';
import Pricing from './pages/Pricing';
import Blog from './pages/Blog';
import ProducerProfile from './pages/ProducerProfile';
import Messages from './pages/Messages';
import Dashboard from './pages/Dashboard';
import Register from './pages/Register';
import Login from './pages/Login';
import { HelmetProvider } from 'react-helmet-async';
import Timeline from './pages/Timeline';
import ProjectForm from './pages/ProjectForm';
import TermsOfService from './pages/TermsOfService';
import PrivacyPolicy from './pages/PrivacyPolicy';

// Yeni bir layout komponenti oluşturalım
const Layout = () => {
  const location = useLocation();
  // Form sayfalarını da ekleyelim
  const hideNavbarPaths = [
    '/dashboard',
    '/messages',
    '/project-details',
    '/timeline',
    '/project-form', // form sayfalarını ekledik
    '/register',     // kayıt formunu ekledik
    '/login'         // giriş formunu ekledik
  ];

  // Şu anki path'in navbar'ı gizlemesi gereken sayfalardan biri olup olmadığını kontrol et
  const shouldHideNavbar = hideNavbarPaths.some(path => 
    location.pathname.startsWith(path)
  );

  return (
    <>
      {!shouldHideNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/packages" element={<ServicePackages />} />
        <Route path="/project-form/:packageType" element={<ProjectForm />} />
        <Route path="/project-details" element={<ProjectDetails />} />
        <Route path="/producers" element={<Producers />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/producer/:id" element={<ProducerProfile />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/timeline" element={<Timeline />} />
        <Route path="/terms" element={<TermsOfService />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
      </Routes>
    </>
  );
};

function App() {
  return (
    <HelmetProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <Layout />
        </Router>
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App; 