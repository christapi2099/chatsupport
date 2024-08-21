'use client';
import { Box, Button, Typography, IconButton } from '@mui/material';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { getApps, initializeApp } from "firebase/app";
import ArrowBackIcon from '@mui/icons-material/ArrowBack'; // Import ArrowBack icon
import { firebaseConfig } from '../../firebaseConfig'; // Make sure this path is correct

export default function AccountPage() {
  const router = useRouter();
  const [user, setUser] = useState(null); // State to hold user information

  useEffect(() => {
    // Ensure Firebase is initialized
    if (!getApps().length) {
      initializeApp(firebaseConfig);
    }

    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user); // Set the user information in state
      } else {
        router.push('/'); // Redirect to root (login) if not logged in
      }
    });

    return () => unsubscribe(); // Cleanup the subscription on component unmount
  }, [router]);

  const handleLogout = () => {
    const auth = getAuth();
    signOut(auth).then(() => {
      router.push('/login');
    }).catch((error) => {
      console.error('Error signing out:', error);
    });
  };

  const handleBackToHome = () => {
    router.push('/home');
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        bgcolor: '#1e1e1e',
        color: '#ecf0f1',
        padding: '20px',
        position: 'relative' // To position the arrow icon
      }}
    >
      {/* Back Arrow */}
      <IconButton 
        onClick={handleBackToHome} 
        sx={{ 
          position: 'absolute', 
          top: '20px', 
          left: '20px', 
          color: '#ecf0f1' 
        }}
      >
        <ArrowBackIcon />
      </IconButton>

      <Typography variant="h4" gutterBottom>
        Account Page
      </Typography>
      {user && (
        <>
          <Typography variant="h6">
            Name: {user.displayName || "Anonymous"}
          </Typography>
          <Typography variant="h6" gutterBottom>
            Email: {user.email}
          </Typography>
        </>
      )}
      <Button 
        variant="contained" 
        color="primary" 
        onClick={handleLogout}
        sx={{
          marginTop: '20px',
          bgcolor: '#6200ea',
          '&:hover': {
            backgroundColor: '#3700b3',
          },
        }}
      >
        Logout
      </Button>
    </Box>
  );
}
