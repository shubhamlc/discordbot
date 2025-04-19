# 🛠️ Simple Discord Slash Command Bot (Ping-Pong)

This is a basic Discord bot built using the [discord.js v14](https://discord.js.org/) library. It registers a simple slash command `/ping` that replies with `🏓 Pong!`.

## 🚀 Features

- Registers a slash command (`/ping`)
- Responds to the command with a simple message
- Uses `dotenv` for token management
- Designed for development in a single guild (server)

---

## 📦 Requirements

- [Node.js](https://nodejs.org/) v16.9.0 or higher
- A Discord bot application (Get one from the [Discord Developer Portal](https://discord.com/developers/applications))
- Your bot added to a server with `applications.commands` and `bot` permissions

---

## 🛠️ Setup

1. **Clone the repository:**

   ```bash
   git clone https://github.com/shuva-kharel/discord-bot
   cd your-repo-name
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Create a `.env` file in the root directory and add your bot token:**

   ```
   DISCORD_TOKEN=your-bot-token-here
   ```

4. **Update these values in the code:**

   - `CLIENT_ID` → Your bot's **Application ID**
   - `GUILD_ID` → Your **Server ID** (guild) where the bot is added

5. **Run the bot:**

   ```bash
   node index.js
   ```

---

## 💬 Commands

| Slash Command | Description        |
|---------------|--------------------|
| `/ping`       | Replies with Pong! |

---

## 📂 Project Structure

```
📁 your-project/
├── .env
├── index.js
├── package.json
└── README.md
```

---

## 🧠 Notes

- This is for **development only**. Slash commands are registered **only in a single server** using `applicationGuildCommands()`.
- For global command registration (available across all servers), use `applicationCommands()` instead — but remember it takes up to an hour to update globally.

---

## 🧑‍💻 Author

Built by [Shuva Kharel](https://github.com/shuva-kharel) — just getting started with Discord bots!

---

## 🪄 License

MIT License

---

## 🙌 Support

If this helped you, consider giving it a ⭐ on GitHub or forking it for your own project! Contributions welcome!
