const moment = require('moment');
const moment2 = require('moment-timezone')
const lookup = require('country-code-lookup')

const Discord = require('discord.js');

module.exports = {
    
    name: 'time',
    aliases: ['findzone', 'findzonetime'],
    description: 'this is time command',
    execute(client, receivedMessage,cmd, args, Discord){
        if(cmd === 'time'){
            var sendertag = receivedMessage.member.user.tag
            const timeembed = new Discord.MessageEmbed()
            .setTitle('Time Commands')
            .setTimestamp()
            .setDescription('Instructions on how to use the embedded commands')
            .setThumbnail("https://www.prensario.net/Multimedios/imgs/43206_750.jpg")
            .addFields(
            //    { name: 'mytime', value: 'Senders current time'},
                { name: 'findzone <Country name>', value: "Selected country's avilable timezones"},
                { name: 'findzonetime <Timezone in String format>', value: 'Current time of the selected timezone'},
            )
            .setFooter("Requested by: " + sendertag)

            receivedMessage.channel.send(timeembed);
        }
        // if(cmd === 'mytime'){
        // var m = moment()
        // var m2 = m.format('h:mm a');
        // receivedMessage.channel.send(m2.toString())}

        if(cmd === 'findzone'){
            
           let arguments = args.join(' ')
           try{
           var messageArgs = lookup.byCountry(arguments).iso2;

           var countryzone = moment.tz.zonesForCountry(messageArgs);

           receivedMessage.channel.send(countryzone)

           }catch(error){
            console.error(error);
            const timeembed = new Discord.MessageEmbed()
            .setDescription('Follow the instructions carefully! \nMake sure the country name starts with a capital letter.')
            receivedMessage.channel.send(timeembed);
        }
        
        }

        if(cmd === 'findzonetime'){
            var m = moment()
           let arguments = args.join('')
           try{
           var zonetime = moment.utc(m).tz(arguments);
           var formatedtime = zonetime.format('h:mm a');

           const timeembed2 = new Discord.MessageEmbed()
           .setDescription('TIME: ' + formatedtime.toString())
           receivedMessage.channel.send(timeembed2)


           const timeembed = new Discord.MessageEmbed()
           .setTitle('Disclaimer')
           .setDescription('Make sure you used the correct Timezone format.')
           .addFields(
               { name: 'Hint', value: 'Use: <prefix> findzone <Country name>'},
                )
           receivedMessage.channel.send(timeembed)
           
           
           
           }catch(error){
            console.error(error);
            const timeembed = new Discord.MessageEmbed()
            .setDescription('Make sure you used the correct Timezone format.')
            .addFields(
                { name: 'Hint', value: 'Use: <prefix> findzone <Country name>'},
                 )
            receivedMessage.channel.send(timeembed);
           }
           
            
        }

    }

    
}