const Discord = require('discord.js')
const client = new Discord.Client()
const config = require('./config.json')
const prefix = '-'

const fs = require('fs')
 
client.commands = new Discord.Collection();
 
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
 
    client.commands.set(command.name, command);
}



client.on('ready', () => {
    console.log("Connected as " + client.user.tag)

    client.user.setActivity("With you heart (;", {type: "PLAYING"})
    
    client.guilds.cache.forEach((guild) => {
         console.log(guild.name)
         guild.channels.cache.forEach((channel) => {
         console.log(` - ${channel.name} ${channel.type} - ${channel.id}`)
         })
    })

    var generalChannel = client.channels.cache.get("839441787855699989") 
    const webAttachment = new Discord.MessageAttachment('https://www.prensario.net/Multimedios/imgs/43206_750.jpg')
    generalChannel.send("I'M ALIVE!!!")
    generalChannel.send(webAttachment)
})

client.on('message', (receivedMessage) => {
    if (!receivedMessage.content.startsWith(prefix) || receivedMessage.author.bot) return;
    
    const args = receivedMessage.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    if(command === 'ping'){
        client.commands.get('ping').execute(receivedMessage, args);
    } 

    if (receivedMessage.mentions.has(client.user)) {
        client.commands.get('bottagreply').execute(receivedMessage, args);
    }

    if (command === 'help'){
        client.commands.get('help').execute(receivedMessage, args);
    }
   
    
})


client.login(config.token)