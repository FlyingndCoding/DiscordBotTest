const Discord = require('discord.js')
require('dotenv').config();
const client = new Discord.Client()
 
client.commands = new Discord.Collection();
client.events = new Discord.Collection();

['command_handler', 'event_handler'].forEach(handler =>{
    require(`./handlers/${handler}`)(client, Discord);
})



 client.login(process.env.DISCORD_T)








  
// const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
// for(const file of commandFiles){
//     const command = require(`./commands/${file}`);
 
//     client.commands.set(command.name, command);
// }



// client.on('message', (receivedMessage) => {
//     if (receivedMessage.author.bot) return;
    
//     const args = receivedMessage.content.slice(prefix.length).trim().split(/ +/g);
//     const command = args.shift().toLowerCase();
    
//     if (receivedMessage.mentions.has(client.user)) {
//         client.commands.get('bottagreply').execute(receivedMessage, args);
//     }
//     if(!receivedMessage.content.startsWith(prefix)) return;
//     if(command === 'ping'){
//         client.commands.get('ping').execute(receivedMessage, args);
//     } 

//     if (command === 'help'){
//         client.commands.get('help').execute(receivedMessage, args);
//     }
//     if (command === 'todo'){
//         client.commands.get('todo').execute(receivedMessage, args);
//     }
    

    
// })
