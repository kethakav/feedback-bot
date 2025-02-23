// index.js

// Load environment variables
require('dotenv').config();

// Import required modules
const express = require('express');
const { Client, GatewayIntentBits } = require('discord.js');

const cors = require('cors');



// Initialize the Discord client
const discordClient = new Client({
  intents: [
    GatewayIntentBits.Guilds,          // for guild info
    GatewayIntentBits.GuildMessages,   // to send messages in channels
    // GatewayIntentBits.MessageContent   // if you want to read message content (optional)
  ]
});

// Log in to Discord using the bot token
discordClient.login(process.env.DISCORD_BOT_TOKEN);

// When the bot is ready, log a confirmation message
discordClient.once('ready', () => {
  console.log(`Discord bot logged in as ${discordClient.user.tag}`);
});

// Set up Express
const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors()); // This will enable CORS for all routes

// Middleware to parse JSON bodies
app.use(express.json());

// Define your API endpoint
// For example, a POST request to /send-message with JSON { "channelId": "...", "message": "..." }
app.post('/send-message', async (req, res) => {
  try {
    const { channelId, message } = req.body;
    
    if (!channelId || !message) {
      return res.status(400).json({ error: 'Missing channelId or message in the request body.' });
    }
    
    // Fetch the channel by its ID (ensure the bot is in the guild where the channel exists)
    const channel = await discordClient.channels.fetch(channelId);
    if (!channel) {
      return res.status(404).json({ error: 'Channel not found.' });
    }
    
    // Send the message to the channel
    await channel.send(message);
    
    res.json({ status: 'Message sent successfully.' });
  } catch (error) {
    console.error('Error sending message:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Start the Express server
app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`);
});
