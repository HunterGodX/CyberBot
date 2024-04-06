const express = require('express')
const app = express();
const port = 3000
 
app.get('/', (req, res) => res.send('Bot is now running!!'))
 
app.listen(port, () =>
console.log(`Your app is listening a http://localhost:${port}`)
);

const Discord = require('discord.js');
const client = new Discord.Client({
  allowedMentions: {
    phrase: [`users`, `roles`],
    repliedUser: true,

  },
  intents: [
    "Guilds",
    "GuildMessages",
    "GuildPresences",
    "GuildMembers",
    "GuildMessageReactions",
  ],

});

const prefix = '/';

function getCommand(content) {
  const command = content.replace(prefix, '').split(' ')[0];
  return command;
}

client.on('messageCreate', (message) => {
  if (message.content.startsWith(prefix)) {
    let command = getCommand(message.content);
    if (command == 'link') {
      message.reply('https://discord.gg/muamGJmVju');
    }
  }
});

const ping = {
  name: 'ping',
  description: 'Pings the bot and shows the latency'
};

const link = {
  name:'link',
  description:'Generate invite link for 💥🅲🆈🅱🅴🆁 🅴🅳🅴🅽✨'
}

const commands = [ping, link];

client.on('interactionCreate', (interaction) => {
  if (interaction.commandName === 'ping') {
    interaction.reply(`Latency is ${Date.now() - interaction.createdTimestamp}ms. API Latency is ${Math.round(client.ws.ping)}ms`);  
  } else if(interaction.commandName === 'link') {
    interaction.reply('𝑰𝒏𝒗𝒊𝒕𝒆 𝑳𝒊𝒏𝒌: https://discord.gg/muamGJmVju');
  } else {
    interaction.reply('this command\'s response has not been added yet!');
  }
});

client.on('ready', () => {
  console.log('CyberBot up for Party!');

  const activities = ['with 𝓣𝒉𝒆 𝓟𝗿𝞂𝙨 💀', 'it so 𝑬𝒁! 👻', 'ᕼIGᕼ-STᗩKᕮ 🤖'];
  setInterval(() => {
    const status = activities[Math.floor(Math.random() * activities.length)];
    client.user.setPresence({ activities: [{ name: status }] });
  }, 5000);
});

client.login(process.env.TOKEN);