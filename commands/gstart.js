const Discord = require('discord.js')
const ms = require('ms')
const giveaways = require("discord-giveaways")


module.exports.run = async (client, message, args) => {
       if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send('> <a:worng:618171880855044129>- You Don,t Have Permission `MANAGE_MESSAGES` ')
	if(!message.guild.member(client.user).hasPermission("MANAGE_MESSAGES")) return message.reply("> <a:worng:618171880855044129> - I Don't Have  Permission `MANAGE_MESSAGES` ").then(msg => msg.delete(6000))

	    //  if (!message.member.hasPermission('MANAGE_ SERVER')) return message.channel.send('**<a:worng:618171880855044129> Sorry, you need the `MANAGE_SERVER` Permission**')
message.delete();
    const ms = require("ms"); // npm install ms
if(!args[0])return message.reply(`Time Please<a:worng:618171880855044129> \`example: 1d (1day) / 1m (1minute) / 1h (1hour) / 1s (1seconds)\` `);

if(!args[1])return message.reply(`Wrong! How many winners? <a:worng:618171880855044129> \`example: #gstart 1m 2 Good prize \`<a:true:618171648394264581> `)
//if(isNaN(args[1]))return message.reply(`**What? <a:worng:618171880855044129> The winner is not a number <a:wt:618171734830350343> \`example: #gstart 1m 2 Good prize \`**`)
if(!args[2])return message.reply(`Add the  prize?**<a:worng:618171880855044129> \`example: #gstart 1m 2w Good prize \``)
giveaways.start(message.channel, {
    time: ms(args[0]),
    prize: args.slice(2).join(" "),
    winnersCount: parseInt(args[1]),
    messages: {
     giveaway: "> <a:ShyizerPartner:646977871457419274> - Rose Giveaway __Start__",
        giveawayEnded: "> <a:ShyizerPartner:646977871457419274> - Rose Giveaway __End__",
     timeRemaining: `Tim End : \`{duration}\` 
Hosted By : <@${message.author.id}>`,       
 inviteToParticipate: "React with 🎉 to enter!",
        winMessage: "Congratulations, {winners}! You won **{prize}**!",
        embedFooter: "Giveaways",
       noWinner: "A winner could not be determined! ",
       endedAt: "Ends at", 
       winners: "Winner",
        units: {
            seconds: "seconds",
            minutes: "minutes",
            hours: "hours",
            days: "days"

        }
    }
});
}       