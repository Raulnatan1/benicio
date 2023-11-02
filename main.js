import { Client } from 'discord.js';
const client = new Client();
const token = process.env.TOKEN;

client.on('ready', () => {
  console.log(`Bot está online como ${client.user.tag}`);
});

client.on('message', (message) => {
  if (message.content === 'ping') {
    message.reply('Pong!');
  }
});

client.login(token);