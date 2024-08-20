'use client';
import Image from "next/image";
import { useState } from "react";
import { Box, Stack, TextField, Button } from '@mui/material';

export default function Home() {
  const [messages, setMessages] = useState([{
    role: 'assistant',
    content: 'Hi, I am the support agent. How can I assist you today?.'
  }]);

  const [message, setMessage] = useState('');

  const sendMessage = async () => {
    // Preprocess the input to remove unnecessary characters
    let sanitizedMessage = message.replace(/[{}]/g, '');

    // Estimate token count and truncate if necessary
    const estimatedTokens = sanitizedMessage.split(' ').length;
    const maxTokens = 4000;  // Example limit, adjust based on API documentation

    if (estimatedTokens > maxTokens) {
      sanitizedMessage = sanitizedMessage.split(' ').slice(0, maxTokens).join(' ');
    }

    setMessage('');
    setMessages((messages) => [
      ...messages, 
      { role: "user", content: sanitizedMessage },
      { role: "assistant", content: '' }
    ]);

    try {
      const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
        method: "POST",
        headers: {
          "Authorization": "Bearer " + process.env.OPENROUTER_API_KEY,  // Ensure this key is set
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          messages: [...messages, { role: 'user', content: sanitizedMessage }],
        }),
      });

      const data = await response.json();

      // Ensure data.choices exists before accessing data.choices[0]
      if (data.choices && data.choices[0] && data.choices[0].message) {
        const assistantContent = data.choices[0].message.content;

        setMessages((messages) => {
          let lastMessage = messages[messages.length - 1];
          let otherMessages = messages.slice(0, messages.length - 1);
          return [
            ...otherMessages,
            { ...lastMessage, content: assistantContent },
          ];
        });
      } else {
        console.error("Unexpected response format:", data);
        setMessages((messages) => [
          ...messages,
          { role: "assistant", content: "Sorry, there was an error processing your request." }
        ]);
      }
    } catch (error) {
      console.error("Error:", error);
      setMessages((messages) => [
        ...messages,
        { role: "assistant", content: "Sorry, there was an error processing your request." }
      ]);
    }
  };

  return (
    <Box 
      width="100vw" 
      height="100vh" 
      display="flex" 
      flexDirection="column" 
      justifyContent="center" 
      alignItems="center"
    > 
      <Stack 
        direction="column"
        width="600px"
        height="700px"
        border="1px solid black"
        p={2}
        spacing={3}
      >
        <Stack direction="column" spacing={2} flexGrow={1} overflow="auto" maxHeight="100%">
          {messages.map((message, index) => (
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
        />
        <Button variant="contained" onClick={sendMessage}>Send</Button>
      </Stack>
    </Box>
  );
}
