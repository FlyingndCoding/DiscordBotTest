const fs = require('fs')
module.exports = (client,Discord) =>{
 const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
 for(const file of commandFiles){
     const command = require(`../commands/${file}`);
     if(command.name){
         client.commands.set(command.name, command);
     }else{ 
     continue;}
     
 }

 const helpFiles = fs.readdirSync('./commands/help/').filter(file => file.endsWith('.js'));
 for (const file of helpFiles) {
     const helpcommand = require(`../commands/help/${file}`);
     if (helpcommand.name) {
         client.commands.set(helpcommand.name, helpcommand);
     } else {
         continue;
     }
 }
 
 const animalFiles = fs.readdirSync('./commands/animals/').filter(file => file.endsWith('.js'));
 for (const file of animalFiles) {
     const animalcommand = require(`../commands/animals/${file}`);
     if (animalcommand.name) {
         client.commands.set(animalcommand.name, animalcommand);
     } else {
         continue;
     }
 }

 const ForCertainPeopleFiles = fs.readdirSync('./commands/ForCertainPeople/').filter(file => file.endsWith('.js'));
 for (const file of ForCertainPeopleFiles) {
     const ForCertainPeoplecommand = require(`../commands/ForCertainPeople/${file}`);
     if (ForCertainPeoplecommand.name) {
         client.commands.set(ForCertainPeoplecommand.name, ForCertainPeoplecommand);
     } else {
         continue;
     }
 }

}
