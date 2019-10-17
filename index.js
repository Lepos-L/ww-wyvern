const Discord = require('discord.js');
const bot = new Discord.Client();

const token = 'NjM0MDk4NjE3ODkxOTQ2NTI3.Xaf5cA.s6JkiLQSVuY0spmf3lDOXeTXoRs';

bot.on('ready', () => {
    console.log('The Wyvern is here!');
})

bot.on('message', msg=>{
    let args = msg.content.substring(PREFIX.length).split(" ");
     
     switch(args[0]){
         case 'hi':
             msg.reply('greetings friend');
             break;
         case 'BB':
             msg.channel.messageSend(https,//calendar.google.com/calendar/r/search?q=BB);
             )
             break;
         case 'JB':
             msg.channel.messageSend(https,//calendar.google.com/calendar/r/search?q=JB);
             )
             break;
         case 'RF':
             msg.channel.messageSend(https,//calendar.google.com/calendar/r/search?q=RF);
             )
             break;
         case 'SP':
             msg.channel.messageSend(https,//calendar.google.com/calendar/r/search?q=SP);
             )
             break;    
         case 'SLD':
             msg.channel.messageSend(https,//calendar.google.com/calendar/r/search?q=sld);
             )
             break;
        case 'die5':
            let replies = ["1", "2", "3", "4", "5"]
            let results = Math.floor((Math.random() * replies.length))
            msg.channel.messageSend(replies[results])  
            break;             
         case 'die6':
             let replies2 = ["1", "2", "3", "4", "5", "6"]
             let results2 = Math.floor((Math.random() * replies2.length))
             msg.channel.messageSend(replies2[results2])  
             break;
        case 'die10':
             let replies3 = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]
             let results3 = Math.floor((Math.random() * replies3.length))
             msg.channel.messageSend(replies3[results3])  
             break;

 }})

bot.login(token);
