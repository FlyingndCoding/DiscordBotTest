require('dotenv').config()
module.exports = (Discord, client, receivedMessage) =>{
    const prefix = process.env.PREFIX;
    if(receivedMessage.author.bot) return;
      if(!(receivedMessage.channel.type === 'dm')){
        const channel = receivedMessage.guild.channels.cache.find(c => c.name === 'ai-chat');
       if(receivedMessage.channel === channel){
           client.commands.get('ai-chat').execute(client, receivedMessage,Discord);
       return;
       }   
     }
     
    
    const args = receivedMessage.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    const cmd = client.commands.get(command) || client.commands.find(a => a.aliases && a.aliases.includes(command));
  //console.log(receivedMessage.content);  
    if (receivedMessage.mentions.has(client.user)) {
        client.commands.get('bottagreply').execute(client, receivedMessage, args, Discord);
    }
    console.log(receivedMessage.content);
    if(receivedMessage.channel.type === 'dm'){
	    console.log(receivedMessage.content);
        client.commands.get('dm').execute(client, receivedMessage,command, args, Discord);
    }
//console.log(receivedMessage.content);
	
  

   if(!receivedMessage.content.startsWith(prefix) || !cmd) return;
	 if(receivedMessage.content.startsWith(prefix) || cmd){
	try {
		cmd.execute(client, receivedMessage,command, args, Discord);
		return;
	} catch (error) {
		console.error(error);
		console.log('there was an error trying to execute that command!');
	}}
   
	
    
   	
}