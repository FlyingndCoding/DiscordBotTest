module.exports = {
    name: 'channel',
    description: 'this is a channel command',
    execute(client, receivedMessage,command, args, Discord){
        
        
        if(!args[0]){
        var sendertag = receivedMessage.member.user.tag
        const channelembed = new Discord.MessageEmbed()
            .setTitle('Channel Commands')
            .setDescription('Instructions on how to use the embedded commands')
            .setThumbnail("https://www.prensario.net/Multimedios/imgs/43206_750.jpg")
            .addFields(
                { name: 'create <T or V> <New channel name> <Category ID>', value: "creates a text channel"},
            )
            .setFooter("Requested by: " + sendertag)

            receivedMessage.channel.send(channelembed);
            }
        

            const categoryID = args.pop();
        
        if(args[0]=== 'create'){
            if(categoryID.length < 18) return receivedMessage.channel.send('Recheck Category ID.')
            
        const category = receivedMessage.guild.channels.cache.find(c => c.id == categoryID && c.type == "category")
        if(!category) return receivedMessage.channel.send('Category Does Not Exist!')
        args.shift();

        if(args[0].toLowerCase() ==='t'){
        args.shift();
        console.log(args)
        const channelname = args.join('-') 
        const channel = receivedMessage.guild.channels.cache.find(c => c.name == channelname.toString() && c.type == "text");
        if(channel) return receivedMessage.channel.send('Channel Already Exists!')
        
        receivedMessage.guild.channels.create(channelname, {
            type : 'text',
        }).then((channel) =>{
            console.log(channel)
            channel.setParent(categoryID);
            receivedMessage.channel.send('Channel created successfuly!')
        })}
        if(args[0].toLowerCase() ==='v'){
          var x =  args.shift();
        console.log(args)
        const channelname = args.join('-') 
        const channel = receivedMessage.guild.channels.cache.find(c => c.name == channelname.toString() && c.type == "voice");
        if(channel) return receivedMessage.channel.send('Channel Already Exists!')
         args.unshift(x);
        
        receivedMessage.guild.channels.create(channelname, {
            type : 'voice',
        }).then((channel) =>{
            console.log(channel)
            channel.setParent(categoryID);
            receivedMessage.channel.send('Channel created successfuly!')
        })

        }
        }

        
    }
}