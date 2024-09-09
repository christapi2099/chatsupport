// "use client"; // Add this directive at the top

// import React from 'react';
// import { Box, Typography, Button, Container, Grid, Card, CardContent, Avatar } from '@mui/material';
// import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
// import TrendingUpIcon from '@mui/icons-material/TrendingUp';
// import PersonIcon from '@mui/icons-material/Person';
// import { useRouter } from 'next/navigation'; // Correct import for useRouter in App Router

// const HomePage = () => {
//   const router = useRouter(); // Initialize the router

//   const handleGetStartedClick = () => {
//     router.push('/login'); // Navigate to the login page when the button is clicked
//   };

//   return (
//     <div style={{ backgroundColor: '#1e1e1e', color: '#ecf0f1', fontFamily: 'Arial, sans-serif' }}>
//       {/* Hero Section */}
//       <Box
//         sx={{
//           backgroundImage: 'url(https://source.unsplash.com/1600x900/?sports)',
//           backgroundSize: 'cover',
//           backgroundPosition: 'center',
//           height: '90vh',
//           display: 'flex',
//           alignItems: 'center',
//           justifyContent: 'center',
//           textAlign: 'center',
//           padding: '0 20px'
//         }}
//       >
//         <Container>
//           <Typography variant="h2" sx={{ fontWeight: 'bold', marginBottom: '20px' }}>
//             Elevate Your Sports Betting Game
//           </Typography>
//           <Typography variant="h5" sx={{ marginBottom: '30px' }}>
//             Get AI-powered insights, real-time odds, and personalized betting advice.
//           </Typography>
//           <Button
//             variant="contained"
//             color="primary"
//             sx={{ backgroundColor: '#3498db', padding: '15px 30px', fontSize: '18px' }}
//             onClick={handleGetStartedClick} // Attach the click handler
//           >
//             Get Started
//           </Button>
//         </Container>
//       </Box>

//       {/* Features Section */}
//       <Container sx={{ padding: '50px 0' }}>
//         <Typography variant="h4" sx={{ textAlign: 'center', marginBottom: '40px', fontWeight: 'bold' }}>
//           Key Features
//         </Typography>
//         <Grid container spacing={4}>
//           <Grid item xs={12} md={4}>
//             <Card sx={{ backgroundColor: '#2c2c2c', textAlign: 'center', padding: '20px' }}>
//               <CardContent>
//                 <TrendingUpIcon sx={{ fontSize: '40px', color: '#3498db', marginBottom: '20px' }} />
//                 <Typography variant="h6" sx={{ marginBottom: '15px', fontWeight: 'bold' }}>
//                   AI-Powered Predictions
//                 </Typography>
//                 <Typography variant="body1">
//                   Leverage advanced AI to get the best predictions and stay ahead in the game.
//                 </Typography>
//               </CardContent>
//             </Card>
//           </Grid>
//           <Grid item xs={12} md={4}>
//             <Card sx={{ backgroundColor: '#2c2c2c', textAlign: 'center', padding: '20px' }}>
//               <CardContent>
//                 <SportsSoccerIcon sx={{ fontSize: '40px', color: '#3498db', marginBottom: '20px' }} />
//                 <Typography variant="h6" sx={{ marginBottom: '15px', fontWeight: 'bold' }}>
//                   Real-Time Updates
//                 </Typography>
//                 <Typography variant="body1">
//                   Stay updated with the latest odds and stats to make informed bets instantly.
//                 </Typography>
//               </CardContent>
//             </Card>
//           </Grid>
//           <Grid item xs={12} md={4}>
//             <Card sx={{ backgroundColor: '#2c2c2c', textAlign: 'center', padding: '20px' }}>
//               <CardContent>
//                 <PersonIcon sx={{ fontSize: '40px', color: '#3498db', marginBottom: '20px' }} />
//                 <Typography variant="h6" sx={{ marginBottom: '15px', fontWeight: 'bold' }}>
//                   Personalized Advice
//                 </Typography>
//                 <Typography variant="body1">
//                   Receive tips tailored to your betting style and preferences.
//                 </Typography>
//               </CardContent>
//             </Card>
//           </Grid>
//         </Grid>
//       </Container>

//       {/* Testimonials Section */}
//       <Box sx={{ backgroundColor: '#121212', padding: '50px 0', textAlign: 'center' }}>
//         <Container>
//           <Typography variant="h4" sx={{ marginBottom: '40px', fontWeight: 'bold' }}>
//             What Our Users Say
//           </Typography>
//           <Grid container spacing={4}>
//             <Grid item xs={12} md={4}>
//               <Card sx={{ backgroundColor: '#2c2c2c', padding: '20px' }}>
//                 <CardContent>
//                   <Typography variant="body1" sx={{ marginBottom: '15px' }}>
//                   &quot;This chatbot has transformed the way I approach sports betting. The AI predictions are incredibly accurate!&quot;
//                   </Typography>
//                   <Box display="flex" justifyContent="center" alignItems="center" marginTop="10px">
//                     <Avatar sx={{ backgroundColor: '#3498db' }}>J</Avatar>
//                     <Typography variant="subtitle1" sx={{ marginLeft: '10px', fontWeight: 'bold' }}>John D.</Typography>
//                   </Box>
//                 </CardContent>
//               </Card>
//             </Grid>
//             <Grid item xs={12} md={4}>
//               <Card sx={{ backgroundColor: '#2c2c2c', padding: '20px' }}>
//                 <CardContent>
//                   <Typography variant="body1" sx={{ marginBottom: '15px' }}>
//                   &quot;Real-time odds updates and personalized tips have made a huge difference in my betting strategy.&quot;
//                   </Typography>
//                   <Box display="flex" justifyContent="center" alignItems="center" marginTop="10px">
//                     <Avatar sx={{ backgroundColor: '#3498db' }}>A</Avatar>
//                     <Typography variant="subtitle1" sx={{ marginLeft: '10px', fontWeight: 'bold' }}>Alice M.</Typography>
//                   </Box>
//                 </CardContent>
//               </Card>
//             </Grid>
//             <Grid item xs={12} md={4}>
//               <Card sx={{ backgroundColor: '#2c2c2c', padding: '20px' }}>
//                 <CardContent>
//                   <Typography variant="body1" sx={{ marginBottom: '15px' }}>
//                   &quot;I love how easy it is to use and the accuracy of the insights provided by this amazing tool!&quot;
//                   </Typography>
//                   <Box display="flex" justifyContent="center" alignItems="center" marginTop="10px">
//                     <Avatar sx={{ backgroundColor: '#3498db' }}>R</Avatar>
//                     <Typography variant="subtitle1" sx={{ marginLeft: '10px', fontWeight: 'bold' }}>Robert C.</Typography>
//                   </Box>
//                 </CardContent>
//               </Card>
//             </Grid>
//           </Grid>
//         </Container>
//       </Box>

//       {/* Call to Action Section */}
//       <Box sx={{ textAlign: 'center', padding: '50px 0', backgroundColor: '#1e1e1e' }}>
//         <Container>
//           <Typography variant="h4" sx={{ fontWeight: 'bold', marginBottom: '20px' }}>
//             Ready to Elevate Your Betting Strategy?
//           </Typography>
//           <Button
//             variant="contained"
//             color="primary"
//             sx={{ backgroundColor: '#3498db', padding: '15px 30px', fontSize: '18px' }}
//             onClick={handleGetStartedClick} // Attach the same click handler for the "Join Now" button
//           >
//             Join Now
//           </Button>
//         </Container>
//       </Box>

//       {/* Footer */}
//       <Box sx={{ backgroundColor: '#121212', color: '#7f8c8d', padding: '20px 0', textAlign: 'center' }}>
//         <Container>
//           <Typography variant="body2">© 2024 Your Company. All rights reserved.</Typography>
//           <Typography variant="body2">
//             <a href="/terms" style={{ color: '#3498db' }}>Terms</a> | <a href="/privacy" style={{ color: '#3498db' }}>Privacy</a> | <a href="/contact" style={{ color: '#3498db' }}>Contact</a>
//           </Typography>
//         </Container>
//       </Box>
//     </div>
//   );
// };

// export default HomePage;
