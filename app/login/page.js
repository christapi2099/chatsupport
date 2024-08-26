'use client';
import { useEffect, useState } from 'react';
import { Box, Button, TextField, Typography, Link, IconButton } from '@mui/material';
import { useRouter } from 'next/navigation';
import ArrowBackIcon from '@mui/icons-material/ArrowBack'; // Import the ArrowBack icon
import { auth, provider, firestore } from '../../firebaseConfig';
import { 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword, 
  signInWithPopup, 
  setPersistence, 
  browserLocalPersistence, 
  onAuthStateChanged 
} from 'firebase/auth';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSignUp, setIsSignUp] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        router.push('/home'); // Redirect to home if already logged in
      }
    });

    return () => unsubscribe(); // Cleanup subscription on unmount
  }, [router]);

  const handleAuth = async () => {
    try {
      await setPersistence(auth, browserLocalPersistence); // Set persistence to local storage

      let userCredential;
      if (isSignUp) {
        // Create a new account
        userCredential = await createUserWithEmailAndPassword(auth, email, password);
      } else {
        // Sign in with existing account
        userCredential = await signInWithEmailAndPassword(auth, email, password);
      }
      router.push('/home');
    } catch (error) {
      console.error("Authentication error:", error);
      alert(error.message); // Show error message to user
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await setPersistence(auth, browserLocalPersistence); // Set persistence to local storage

      const userCredential = await signInWithPopup(auth, provider);
      router.push('/home');
    } catch (error) {
      console.error("Google Sign-In error:", error);
      alert(error.message); // Show error message to user
    }
  };

  const handleBackClick = () => {
    router.push('/landingpage'); // Navigate back to the landing page
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        position: 'relative',
      }}
    >
      <IconButton 
        onClick={handleBackClick} 
        sx={{ position: 'absolute', top: 16, left: 16, color: '#1976d2' }}
      >
        <ArrowBackIcon />
      </IconButton>
      <Box
        sx={{
          width: '100%',
          maxWidth: '400px',
          padding: '32px',
          backgroundColor: '#fff',
          borderRadius: '8px',
          boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
        }}
      >
        <Typography variant="h4" gutterBottom textAlign="center">
          {isSignUp ? 'Sign Up' : 'Sign In'}
        </Typography>
        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          sx={{ marginBottom: '20px' }}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          label="Password"
          variant="outlined"
          type="password"
          fullWidth
          sx={{ marginBottom: '20px' }}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Link href="#" sx={{ alignSelf: 'flex-start', marginBottom: '20px', color: '#1976d2' }}>
          Forgot Password?
        </Link>
        <Button
          variant="contained"
          fullWidth
          sx={{ marginBottom: '20px', backgroundColor: '#d3d3d3', color: '#000', '&:hover': { backgroundColor: '#b0b0b0' } }}
          onClick={handleAuth}
        >
          {isSignUp ? 'Sign Up' : 'Sign In'}
        </Button>
        <Button
          variant="contained"
          fullWidth
          sx={{ marginBottom: '20px', backgroundColor: '#ff4d4d', color: '#fff', '&:hover': { backgroundColor: '#e60000' } }}
          onClick={() => setIsSignUp(!isSignUp)}
        >
          {isSignUp ? 'Switch to Sign In' : 'Switch to Sign Up'}
        </Button>
        <Typography sx={{ marginBottom: '20px', textAlign: 'center' }}>or sign-in using the below</Typography>
        <Button
          variant="contained"
          fullWidth
          sx={{ marginBottom: '20px', backgroundColor: '#db4437', color: '#fff', '&:hover': { backgroundColor: '#c23321' } }}
          onClick={handleGoogleSignIn}
        >
          Google
        </Button>
      </Box>
    </Box>
  );
}
