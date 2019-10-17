const Discord = require('discord.js');
const bot = new Discord.Client();

const PREFIX = '-';

const token = 'NjM0MDk4NjE3ODkxOTQ2NTI3.XaeEOQ.LV7v9XxDdYDbP4QsPMUjVhd4u7s';

bot.on('ready', () => {
    console.log('The Wyvern is here!');
})

bot.login(process.env.token);
