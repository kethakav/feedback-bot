# Feedback Bot with Discord Integration

This project is a simple feedback bot that sends user feedback from a web app or website to a designated Discord channel. It uses [Express](https://expressjs.com/) for the API and [discord.js](https://discord.js.org/#/) to interact with Discord.

## Screenshots
![Discord Bot](/media/images/Discord_eCo2YG0CIC.png)
![Front End](/media/images/zen_TrSZNMxWji.png)

## Features

- **Receive Feedback:** Accepts feedback via a REST API.
- **Discord Integration:** Automatically sends feedback messages to a specified Discord channel.
- **Open Source:** Easily customizable and deployable for your own projects.

## Getting Started

### Prerequisites

- **Node.js and npm:** Ensure you have [Node.js](https://nodejs.org/) installed (version 14 or later is recommended).
- **Discord Bot:** You need a Discord bot token. To create your bot:
  1. Go to the [Discord Developer Portal](https://discord.com/developers/applications).
  2. Create a new application and add a bot.
  3. Copy the bot token and invite the bot to your server with proper permissions (e.g., permissions to read and send messages).

### Project Setup

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/kethakav/feedback-bot.git
   cd feedback-bot
   ```

2. **Install Dependencies:**

   ```bash
   npm install
   ```

3. **Environment Variables:**

   Create a `.env` file in the root directory with the following content:

   ```dotenv
   DISCORD_BOT_TOKEN=your_discord_bot_token_here
   PORT=3001
   ```

   **Warning:**  
   - **Do not commit your `.env` file** or any secrets to your public repository. It's already included in the `.gitignore` file in this project. It doesn't hurt to double-check.
   - Incorrect or missing environment variables may cause the application to fail.

4. **Run the Application:**

   Start your server by running:

   ```bash
   npm start
   ```
   
   You should see console messages confirming that the Discord bot has logged in and that the Express server is listening.

## Hosting

You can host this project on any Node.js–compatible platform (such as DigitalOcean, Heroku, Render, or AWS). Ensure that your hosting service supports environment variables and that your domain is set up with HTTPS if your front-end is served securely.

**Note:**  
If you call the API from a front-end served over HTTPS, your API endpoint **must also use HTTPS** to avoid mixed content issues.

## Front-End Integration

Your web app or website can send feedback to the bot using a simple POST request. For example, using JavaScript’s `fetch` API:

```javascript
const sendFeedback = async () => {
  try {
    const response = await fetch('https://yourdomain.com/send-message', { // Use HTTPS if needed
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        channelId: 'your_discord_channel_id',
        message: 'This is a test feedback message.'
      })
    });

    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error sending feedback:', error);
  }
};

sendFeedback();
```

### Collecting Feedback on the Front-End

Below is an example of how you can implement a dialog to collect feedback from users on your front-end. This snippet uses a modal dialog component to let users report bugs, request features, or simply send a message to the developer. Feel free to modify and style it as needed to make it your own:

```jsx
<Dialog>
  <DialogTrigger asChild>
    <div className="flex items-center space-x-4">
      <Button>
        <Send size={16} />
        Developer
      </Button>
    </div>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Contact Me</DialogTitle>
      <DialogDescription>
        Report bugs, request features, or just say hi to the developer.
      </DialogDescription>
    </DialogHeader>
    <Textarea
      placeholder="Enter your message here..."
      value={message}
      onChange={(e) => setMessage(e.target.value)}
      rows={4}
    />
    {statusMessage && <p>{statusMessage}</p>}
    <DialogFooter>
      <div className="flex space-x-4 items-center">
        {loading && <LoadingSpinner />}
        <Button onClick={handleSend} disabled={loading}>
          <Send size={16} />
          {loading ? "Sending..." : "Send Message"}
        </Button>
      </div>
    </DialogFooter>
  </DialogContent>
</Dialog>
```

This component provides a user-friendly interface for collecting feedback and sending it directly through the bot. Use it as a starting point and customize it to suit your project’s style and requirements.

## Reporting Issues and Requesting Features

We welcome your contributions! If you encounter any issues or have ideas for new features, please report them via [GitHub Issues](https://github.com/kethakav/feedback-bot/issues). We've set up issue templates to help you provide detailed information, making it easier for everyone to track and address your feedback.

## Next Steps and Future Enhancements

- **Telegram Bot Support:**  
  We plan to extend the feedback bot to support Telegram alongside Discord. This will allow feedback to be sent to both platforms, broadening its usability.
- **Multi-Platform Feedback Integration:**  
  Integrate additional messaging platforms to offer a unified feedback collection system.
- **Enhanced API Security:**  
  Implement more robust authentication and rate limiting to secure the API endpoints.

## Contributing

We welcome contributions from the community! You can contribute by submitting pull requests. If you have ideas for new features, bug fixes, or improvements, please follow these steps:

1. **Fork the Repository:**  
   Create your own fork of this project.

2. **Create a New Branch:**  
   Create a new branch for your feature or bug fix.

3. **Make Your Changes:**  
   Commit your changes following the project guidelines.

4. **Submit a Pull Request:**  
   Open a pull request to merge your changes. Please ensure your code follows the contribution guidelines.

By contributing, you help make this project better for everyone. Happy coding!

## ⭐ Support the Project

If you find this project useful, consider giving it a star on GitHub! ⭐ It helps others discover it and keeps me motivated to improve it.