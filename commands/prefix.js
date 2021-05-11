// const prefix = require('discord-prefix');
// require('dotenv').config()
// module.exports = {
//     name: 'prefix',
//     description: 'change prefix command',
//     execute(client, receivedMessage,command, args, Discord){
//         let messageclient = receivedMessage.guild.id;
//         console.log(messageclient)
//         const list = client.guilds.get(messageclient)

       

//         if(!args[0]) return receivedMessage.channel.send('TRY : <prefix> prefix <prefix command>')

//         if(args[0] === 'change'){
//             let newprefix = args[1]
//             process.env.PREFIX = newprefix
//             receivedMessage.channel.send('Prefix successfully changed!')

//         }
//         if(args[0] === 'now'){
//             receivedMessage.channel.send('Current Prefix : ' + process.env.PREFIX)
//         }

//     }
// }