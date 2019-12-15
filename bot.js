const Discord = require('discord.js');

const fs = require("fs");
const client = new Discord.Client();
const config1 = require("./db/config1.json");
const ownerID = config1.ownerID;
const prefix = config1.prefix;

const giveaways = require("discord-giveaways")
const ms = require('ms')

const path = require("path");   // To get the giveaways.json file location

client.on("ready", () => {
    console.log("I'm ready !");
    giveaways.launch(client, {
        updateCountdownEvery: 5000,
        botsCanWin: false,
        embedColor: "#161515",
        reaction: "🎉",
        storage: __dirname+"/giveaways.json"

    });
});


client.on('message', async message => { // Alpha Codes Server.
    if(message.author.bot) return;
    if(message.channel.type === 'dm') return;
   var win = '';
    var prize = '';
 
    var filter = m => m.author.id === message.author.id;
    var args = message.content.toLowerCase().split(" "); // Alpha Codes Server.
 
  if (message.content.startsWith(prefix + 'gedit')) {

             let messageID = args[1];
    if(!args[1])return message.reply(`**Please add the id Message of the giveaway <a<a:worng:618171880855044129>618171880855044129> \`example: #gedit <id Message> \`** `);
      let FireKing1 = new Discord.RichEmbed()
      .setTitle("**Edit Giveaway**")
     .setDescription(`**
     1️⃣ | To Edit Winners
     2️⃣  | To Edit Prize
     **`)
     message.channel.send(FireKing1).then(msg => {
        msg.react('✅')
        .then(() => msg.react('❌'))
        .then(() =>msg.react('✅'))
        
        let reaction1Filter = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;
        let reaction2Filter = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;
        
        let reaction1 = msg.createReactionCollector(reaction1Filter, { time: 12000 });
        let reaction2 = msg.createReactionCollector(reaction2Filter, { time: 12000 });
        reaction1.on("collect", r => {
            message.channel.send(`**Put the number of winners**`).then(msgS => {

          message.channel.awaitMessages(filter, { max: 1, time: 80000, errors: ['time'] }).then(collected => {

                win = collected.first().content;
              message.edit("")  
if(isNaN(win))return message.reply(`**What? <a:worng:618171880855044129> The winner is not a number <a:wt:618171734830350343>**`)

              giveaways.edit(messageID, {
                newWinnersCount: win,
                        })
                  message.channel.send(`**Done, Change Winners To ${win}**`)
    })       
                    reaction2.on("collect", r => {
                        message.channel.send(`**Write the new prize**`).then(msgS => {

          message.channel.awaitMessages(filter, { max: 1, time: 80000, errors: ['time'] }).then(collected => {

                prize = collected.first().content;
              message.edit("")  

              giveaways.edit(messageID, {
                newPrize: prize,

                        })
                  message.channel.send(`**Done, Change prize To ${prize}**`)
                            })
                    })
                
                })
            })
        })
    })

    
    }

});


client.on('message', message => {
    





    let args = message.content.slice(prefix.length).trim().split(/ +/g);
    let cmd = args.shift().toLowerCase();
    let messageArray = message.content.split(" ").slice(prefix.length)


    if (message.author.bot) return;
    if (!message.content.startsWith(prefix))return;


    try {
    
        delete require.cache[require.resolve(`./commands/${cmd}.js`)];


        

	
        let commandFile = require(`./commands/${cmd}.js`);
        commandFile.run(client, message, args);

    } catch (e) {
    
        return undefined;
    }


});







client.on('ready', () => {console.log('I Ready !'), client.user.setGame(config1.game),client.user.setStatus(config1.Status) });


client.login(config1.token);

