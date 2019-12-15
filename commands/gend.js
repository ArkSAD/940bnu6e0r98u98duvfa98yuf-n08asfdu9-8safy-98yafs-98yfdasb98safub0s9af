const Discord = require("discord.js");
const giveaways = require('discord-giveaways');
const ms = require("ms");

/*module.exports.run = async (client, message, args) => {
  //code here

        let messageID = args[0];
        giveaways.edit(messageID, {
            newWinnersCount: args[1],
            newPrize: args[3],
            addTime: args[2]
        });
}*/



module.exports.run = async (client, message, args) => {           
if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send('**<a:worng:618171880855044129> Sorry, you need the `MANAGE_MESSAGES` permission**')
	if(!message.guild.member(client.user).hasPermission("MANAGE_MESSAGES")) return message.reply("** <a:worng:618171880855044129> I Don't Have `MANAGE_MESSAGES` Permission**").then(msg => msg.delete(6000))

        let messageID = args[0];
            if(!messageID){
if(!args[0])return message.reply(`**Please add the id Message of the giveaway <a:worng:618171880855044129> \`example: #gend <id Message>\`** `);
            }
            try {
                giveaways.edit(messageID, {
                    setEndTimestamp: Date.now()
                });
         message.channel.send("**Success! Giveaway end! <a:true:618171648394264581>**");
            } catch(e){
            message.channel.send("**No giveaway found for "+messageID+", please check and try again <a:worng:618171880855044129>**");
            }
        
        }

    

