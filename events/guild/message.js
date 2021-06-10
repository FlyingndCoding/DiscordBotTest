require('dotenv').config()
module.exports = (Discord, client, receivedMessage) =>{
    const prefix = process.env.PREFIX;
    
     if (receivedMessage.author.bot) return;
    
    const args = receivedMessage.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    const cmd = client.commands.get(command) || client.commands.find(a => a.aliases && a.aliases.includes(command));
    
    if (receivedMessage.mentions.has(client.user)) {
        client.commands.get('bottagreply').execute(client, receivedMessage, args, Discord);
    }
    
    if(receivedMessage.channel.type === 'dm'){
        client.commands.get('dm').execute(client, receivedMessage,command, args, Discord);
    }

    if(receivedMessage.channel.type != 'dm'){
    const channel = receivedMessage.guild.channels.cache.find(c => c.name === 'ai-chat');
    if(receivedMessage.channel === channel){
        client.commands.get('ai-chat').execute(client, receivedMessage,command, args, Discord);
    }}
    
    if(!receivedMessage.content.startsWith(prefix) || !cmd) return;

	try {
		cmd.execute(client, receivedMessage,command, args, Discord);
	} catch (error) {
		console.error(error);
		receivedMessage.reply('there was an error trying to execute that command!');
	}
}