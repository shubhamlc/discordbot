require('dotenv').config();
const { Client, GatewayIntentBits, REST, Routes, SlashCommandBuilder } = require('discord.js');

const client = new Client({
  intents: [GatewayIntentBits.Guilds]
});

// Register the slash command
const commands = [
  new SlashCommandBuilder()
    .setName('ping')
    .setDescription('Replies with Pong!')
].map(command => command.toJSON());

const rest = new REST({ version: '10' }).setToken(process.env.DISCORD_TOKEN);

// Replace with your bot's CLIENT ID and GUILD ID (test server)
const CLIENT_ID = '1360812237656162484'; // ← your actual Bot Application ID
const GUILD_ID = '871000301912621088'; // ← your server ID where bot is added


(async () => {
  try {
    console.log('🔁 Registering slash commands...');
    await rest.put(Routes.applicationGuildCommands(CLIENT_ID, GUILD_ID), {
      body: commands
    });
    console.log('✅ Slash command registered!');
  } catch (error) {
    console.error('❌ Failed to register slash commands:', error);
  }
})();

client.on('ready', () => {
  console.log(`🚀 Logged in as ${client.user.tag}`);
});

client.on('interactionCreate', async (interaction) => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === 'ping') {
    await interaction.reply('🏓 Pong!');
  }
});

client.login(process.env.DISCORD_TOKEN);
