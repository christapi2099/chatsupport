'use client';
import { useState, useEffect, useCallback } from "react";
import { Box, Stack, TextField, Button, List, ListItem, ListItemIcon, ListItemText, Divider, Typography, IconButton } from '@mui/material';
import ChatIcon from '@mui/icons-material/Chat';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useRouter } from 'next/navigation';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { getApps, initializeApp } from 'firebase/app';
import { getFirestore, doc, setDoc, getDoc, updateDoc } from 'firebase/firestore';
import { firebaseConfig } from '../../firebaseConfig';

export default function Home() {
  console.log("API Key:", process.env.NEXT_PUBLIC_OPENROUTER_API_KEY);
  const [conversations, setConversations] = useState([]);
  const [currentConversationId, setCurrentConversationId] = useState(null);
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const db = getFirestore();

  const createFirstConversation = useCallback(async (userId) => {
    const newConversation = {
      id: 1,
      title: `Conversation 1`,
      messages: [{
        role: 'assistant',
        content: 'Hi, I am the support agent. How can I assist you today?'
      }]
    };

    const updatedConversations = [newConversation];
    setConversations(updatedConversations);
    setCurrentConversationId(1);

    const userDocRef = doc(db, 'users', userId);
    await updateDoc(userDocRef, {
      conversations: updatedConversations
    });
  }, [db]);

  const createNewConversation = useCallback(async (userId, existingConversations) => {
    const newId = existingConversations.length + 1;
    const newConversation = {
      id: newId,
      title: `Conversation ${newId}`,
      messages: [{
        role: 'assistant',
        content: 'Hi, I am the support agent. How can I assist you today?'
      }]
    };

    const updatedConversations = [...existingConversations, newConversation];
    setConversations(updatedConversations);
    setCurrentConversationId(newId);

    const userDocRef = doc(db, 'users', userId);
    await updateDoc(userDocRef, {
      conversations: updatedConversations
    });
  }, [db]);

  const fetchConversations = useCallback(async (userId) => {
    const userDocRef = doc(db, 'users', userId);
    const userDoc = await getDoc(userDocRef);
    if (userDoc.exists()) {
      const userData = userDoc.data();
      if (userData.conversations && userData.conversations.length > 0) {
        setConversations(userData.conversations);
        createNewConversation(userId, userData.conversations);
      } else {
        createFirstConversation(userId);
      }
    } else {
      await setDoc(userDocRef, { conversations: [] });
      createFirstConversation(userId);
    }
  }, [db, createFirstConversation, createNewConversation]);

  useEffect(() => {
    if (!getApps().length) {
      initializeApp(firebaseConfig);
    }

    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        await fetchConversations(user.uid);
        setLoading(false);
      } else {
        router.push('/landingpage');
      }
    });

    return () => unsubscribe();
  }, [router, fetchConversations]);

  const deleteConversation = async (conversationId) => {
    const updatedConversations = conversations.filter(conv => conv.id !== conversationId);
    setConversations(updatedConversations);
    
    if (updatedConversations.length > 0) {
      setCurrentConversationId(updatedConversations[0].id);
    } else {
      createFirstConversation(getAuth().currentUser.uid);
    }

    const userDocRef = doc(db, 'users', getAuth().currentUser.uid);
    await updateDoc(userDocRef, {
      conversations: updatedConversations
    });
  };

  const saveConversation = async (userId, updatedConversations) => {
    const userDocRef = doc(db, 'users', userId);
    await updateDoc(userDocRef, {
      conversations: updatedConversations
    });
  };

  const extractTheme = async (conversationText) => {
    try {
      const response = await fetch('http://127.0.0.1:5000/extract-theme', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text: conversationText }),
      });
  
      const data = await response.json();
      return data.theme;
    } catch (error) {
      console.error('Error extracting theme:', error);
      return 'Conversation'; // Fallback if extraction fails
    }
  };

  const fetchOddsData = async (prompt) => {
    try {
      const response = await fetch('http://127.0.0.1:5000/fetch-odds', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt }),
      });

      const data = await response.text(); // Since Flask returns plain text
      return data;
    } catch (error) {
      console.error('Error fetching odds data:', error);
      return null;
    }
  };

  const isSportsQuery = (message) => {
    const sportsKeywords = ['football', 'soccer', 'basketball', 'tennis', 'cricket', 'odds', 'score', 'betting', 'match', 'game']; // Add more sports-related keywords as needed
    return sportsKeywords.some(keyword => message.toLowerCase().includes(keyword));
  };
  
  const sendMessage = async () => {
    let sanitizedMessage = message.replace(/[{}]/g, '');
    const estimatedTokens = sanitizedMessage.split(' ').length;
    const maxTokens = 4000;
  
    if (estimatedTokens > maxTokens) {
      sanitizedMessage = sanitizedMessage.split(' ').slice(0, maxTokens).join(' ');
    }
  
    const newMessage = { role: "user", content: sanitizedMessage };
  
    setMessage('');
  
    const updatedMessages = [...currentConversation().messages, newMessage];
    const updatedConversations = conversations.map(conv => 
      conv.id === currentConversationId 
        ? { ...conv, messages: updatedMessages } 
        : conv
    );
    
    setConversations(updatedConversations);
  
    try {
      let llamaPrompt = sanitizedMessage;
  
      // If the query is sports-related, fetch odds data
      if (isSportsQuery(sanitizedMessage)) {
        const oddsData = await fetchOddsData(sanitizedMessage);
        llamaPrompt = oddsData
          ? `${sanitizedMessage}. Here's some relevant information: ${oddsData}`
          : sanitizedMessage;
      }
      const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
        method: "POST",
        headers: {
          "Authorization": "Bearer " + process.env.NEXT_PUBLIC_OPENROUTER_API_KEY,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          messages: [...updatedMessages, { role: "system", content: llamaPrompt }],
        }),
      });
  
      const data = await response.json();
  
      if (data.choices && data.choices[0] && data.choices[0].message) {
        const assistantContent = data.choices[0].message.content;
  
        const updatedConversationsWithResponse = updatedConversations.map(conv => 
          conv.id === currentConversationId 
            ? { 
                ...conv, 
                messages: [...updatedMessages, { role: "assistant", content: assistantContent }] 
              } 
            : conv
        );
  
        const conversationText = updatedMessages.map(msg => msg.content).join(' ');
        const theme = await extractTheme(conversationText); // Extract the theme
  
        const updatedConversationsWithTheme = updatedConversationsWithResponse.map(conv => 
          conv.id === currentConversationId 
            ? { ...conv, title: theme } 
            : conv
        );
  
        setConversations(updatedConversationsWithTheme);
  
        await saveConversation(getAuth().currentUser.uid, updatedConversationsWithTheme);
  
      } else {
        console.error("Unexpected response format:", data);
        setConversations(conversations.map(conv => 
          conv.id === currentConversationId 
            ? { 
                ...conv, 
                messages: [...updatedMessages, { role: "assistant", content: "Sorry, there was an error processing your request." }] 
              } 
            : conv
        ));
      }
    } catch (error) {
      console.error("Error:", error);
      setConversations(conversations.map(conv => 
        conv.id === currentConversationId 
          ? { 
              ...conv, 
              messages: [...updatedMessages, { role: "assistant", content: "Sorry, there was an error processing your request." }] 
            } 
          : conv
      ));
    }
  };
  

  const currentConversation = () => conversations.find(conv => conv.id === currentConversationId);

  const switchConversation = (id) => {
    setCurrentConversationId(id);
  };

  const handleCircleButtonClick = () => {
    router.push('/accountpage');
  };

  if (loading) {
    return (
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '100vh',
          backgroundColor: '#1e1e1e',
          color: '#ecf0f1'
        }}
      >
        <Typography variant="h6">Loading...</Typography>
      </Box>
    );
  }
  const calculateFontSize = (title, containerWidth) => {
    const maxFontSize = 10; // Max font size in pixels
    const minFontSize = 5; // Min font size in pixels
  
    // Estimate the width that each character might occupy
    const estimatedWidthPerChar = 7; 
  
    // Calculate the required font size
    const requiredFontSize = (containerWidth / (title.length * estimatedWidthPerChar)) * maxFontSize;
  
    // Return a clamped value between minFontSize and maxFontSize
    return Math.max(minFontSize, Math.min(maxFontSize, requiredFontSize));
  };
  
  

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', backgroundColor: '#1e1e1e', color: '#ecf0f1', margin: 0, padding: 0, border: 'none', boxSizing: 'border-box', overflow: 'hidden' }}>
      <div style={{ display: 'flex', flexGrow: 1, overflow: 'hidden' }}>
        {/* Sidebar */}
        <div style={{
            width: '250px',
            height: '100%',
            backgroundColor: '#121212',
            padding: '20px',
            boxSizing: 'border-box',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
        }}>
            <div>
                <List>
                    {conversations.map(conv => (
                      <ListItem 
                        button 
                        key={conv.id} 
                        onClick={() => switchConversation(conv.id)}
                        selected={conv.id === currentConversationId}
                        sx={{ display: 'flex', alignItems: 'center' }}
                      >
                        <ListItemIcon>
                          <ChatIcon style={{ color: '#ecf0f1' }} />
                        </ListItemIcon>
                        <ListItemText 
                          primary={conv.title} 
                          primaryTypographyProps={{ 
                            style: { whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', fontSize: `${calculateFontSize(conv.title, 150)}px`,} 
                          }} 
                        />
                        <IconButton onClick={() => deleteConversation(conv.id)}>
                          <DeleteIcon style={{ color: '#ecf0f1' }} />
                        </IconButton>
                      </ListItem>
                    ))}
                </List>
                <Divider style={{ backgroundColor: '#34495e' }} />
                <Button 
                  startIcon={<AddIcon />} 
                  fullWidth 
                  onClick={() => createNewConversation(getAuth().currentUser.uid, conversations)} 
                  sx={{ marginTop: '10px', backgroundColor: '#3498db', color: '#ecf0f1' }}
                >
                  New Conversation
                </Button>
            </div>
        </div>

        {/* Main content */}
        <Box 
          display="flex" 
          flexDirection="column"
          flexGrow={1}
          padding="0"
          boxSizing="border-box"
          position="relative"
          bgcolor="#1e1e1e"
          margin="0"
          border="none"
          overflow="hidden"
        > 
          {/* Header */}
          <Box 
            height="50px" 
            bgcolor="#121212" 
            display="flex" 
            alignItems="center" 
            justifyContent="space-between"
            padding="0 20px"
            borderBottom="1px solid #34495e"
          >
            Chat Header
            {/* Circle button inside the header with icon */}
            <Button 
              onClick={handleCircleButtonClick}
              sx={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                backgroundColor: '#3498db',
                minWidth: '40px',
                padding: 0,
                '&:hover': {
                  backgroundColor: '#2980b9',
                },
              }}
            >
              <AccountCircleIcon fontSize="medium" sx={{ color: '#000' }} />
            </Button>
          </Box>

          <Stack 
            direction="column"
            width="100%"
            flexGrow={1}
            padding="20px"
            boxSizing="border-box"
            bgcolor="#2c2c2c"
            color="#ecf0f1"
            justifyContent="space-between"
            overflow="auto"
          >
            <Stack direction="column" spacing={2} flexGrow={1} overflow="auto">
              {currentConversation()?.messages.map((message, index) => (
                <Box key={index} sx={{ textAlign: message.role === 'user' ? 'right' : 'left' }}>
                  <Box 
                    component="span" 
                    sx={{ 
                      display: 'inline-block', 
                      padding: '8px 12px', 
                      borderRadius: '12px', 
                      backgroundColor: message.role === 'user' ? '#6200ea' : '#03a9f4', 
                      color: 'white' 
                    }}
                  >
                    {message.content}
                  </Box>
                </Box>
              ))}
            </Stack>
            <Box display="flex" width="100%" flexDirection={{ xs: 'column', sm: 'row' }} gap="10px">
              <TextField 
                fullWidth 
                variant="outlined" 
                value={message} 
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    sendMessage();
                  }
                }}
                sx={{
                  backgroundColor: '#1e1e1e',
                  color: '#ecf0f1',
                  input: { color: '#ecf0f1' }
                }}
              />
              <Button 
                variant="contained" 
                onClick={sendMessage} 
                sx={{ 
                  bgcolor: '#6200ea',
                  width: { xs: '100%', sm: '120px' }
                }}
              >
                Send
              </Button>
            </Box>
          </Stack>
        </Box>
      </div>
    </div>
  );
}
