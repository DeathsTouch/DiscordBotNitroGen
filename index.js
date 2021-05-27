const Discord = require('discord.js');
const config = require('./config.json')
const client = new Discord.Client();

function nitroCodeGen() {
   var length = 18;
   var result           = '';
   var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
   var charactersLength = characters.length;
   for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   return result;
}

client.on('ready', () => {
   console.log(`Logged in as ${client.user.tag}`);
 }); 


client.on("ready", () => {

   client.user.setActivity(config.Activity, { type: "WATCHING"})
});

client.on('message', msg => {

  if (msg.author.id === config.ownerID)
  if (msg.content === config.prefix) {

    msg.channel.send("https://discord.gift/" + nitroCodeGen());  

  

    msg.reply('End')
    

  }
});
client.login(config.token)