const Discord = require("discord.js");
const giveaways = require('discord-giveaways');
const ms = require("ms");

/*module.exports.run = async (client, message, args) => {
    if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send('**<a<a:worng:618171880855044129>618171880855044129> Sorry, you need the `MANAGE_MESSAGES` permission**')
        if(!message.guild.member(client.user).hasPermission("MANAGE_MESSAGES")) return message.reply("** <a<a:worng:618171880855044129>618171880855044129> I Don't Have `MANAGE_MESSAGES` Permission**").then(msg => msg.delete(6000))
    
            let messageID = args[0];
    if(!args[0])return message.reply(`**Please add the id Message of the giveaway <a<a:worng:618171880855044129>618171880855044129> \`example: #gedit <id Message> \`** `);
    if(!args[1])return message.reply(`**Please add  winners and Prize <a<a:worng:618171880855044129>618171880855044129> \`example: #gedit <id Message> <Winners> <Prize> \`<a<a:true:618171648394264581>618171648394264581>** `)
    
                if(!messageID){
    if(!args[0])return message.reply(`**Please add the id Message of the giveaway <a<a:worng:618171880855044129>618171880855044129> \`example: #gend <id Message>\`** `);
                }
                try {
              giveaways.edit(messageID, {
                newWinnersCount: args[1],
                newPrize: args[2],
      
                    });
             message.channel.send("**Success! Giveaway end! <a<a:true:618171648394264581>618171648394264581>**");
                } catch(e){
                message.channel.send("**No giveaway found for "+messageID+", please check and try again <a<a:worng:618171880855044129>618171880855044129>**");
                }
            
            }*/
/*module.exports.run = async (client, message, args) => {
    var win = '';
    var prize = '';

    var filter = m => m.author.id === message.author.id;

      let messageID = args[0];
    if(!args[0])return message.reply(`**Please add the id Message of the giveaway <a<a:worng:618171880855044129>618171880855044129> \`example: #gedit <id Message> \`** `);
      let FireKing1 = new Discord.RichEmbed()
      .setTitle("**Edit Giveaway**")
     .setDescription(`**
     📬 | xx=--
     📇 | x
     **`)
      message.channel.send(FireKing1) .then(msg=> {
msg.react("624643988376387614").then(r => {
            msg.react("624643956352745494")
     

                  let prize = (reaction, user) => reaction.emoji.name === 'GG2' && user.id === message.author.id;
                let winn = (reaction, user) => reaction.emoji.name === 'hh' && user.id === message.author.id;

                                            let win = d.createReactionCollector(winn);
                                            let prize11 = d.createReactionCollector(prize);
                                            let worng1 = d.createReactionCollector(worng);
            const prize11 = msg.createReactionCollector(prize, { time: 60000 });

   const win11 = msg.createReactionCollector(winn, { time: 60000 });
    
           worng1.on('collect', r => {
  

                 message.delete();
      

 prize11.on("collect", r => {



  message.channel.send(`Put the number of winners`).then(msgS => {

          message.channel.awaitMessages(filter, { max: 1, time: 80000, errors: ['time'] }).then(collected => {

                win = collected.first().content;
                        collected.first().delete();
              message.edit("")  
//if(isNaN(win))return message.reply(`**What? <a:worng:618171880855044129> The winner is not a number <a:wt:618171734830350343> \`example: #gstart 1m 2 Good prize \`**`)

              giveaways.edit(messageID, {
                newWinnersCount: win,
                
              
                                     
});

            win11.on("collect", r => {
  message.channel.send(`Put the number of winnersثصثصث`).then(msgS => {

          message.channel.awaitMessages(filter, { max: 1, time: 80000, errors: ['time'] }).then(collected => {

                prize = collected.first().content;
                        collected.first().delete();
              message.edit("")  

              giveaways.edit(messageID, {
                newPrize: prize,
                }, 5000);       });





        
              
                                     


})          
  
  })
  })
  
  })
})
})
 
  })

  
      
 
}
    */

        
           /*      module.exports.run = async (client, message, args) => {
    var win = '';
    var prize = '';
  if(message.author.bot) return;
    if(message.channel.type === 'dm') return;
 
    var args = message.content.toLowerCase().split(" "); // Alpha Codes Server.
    var filter = m => m.author.id === message.author.id;

      let messageID = args[0];
    if(!args[0])return message.reply(`**Please add the id Message of the giveaway <a<a:worng:618171880855044129>618171880855044129> \`example: #gedit <id Message> \`** `);
      let FireKing1 = new Discord.RichEmbed()
      .setTitle("**Edit Giveaway**")
     .setDescription(`**
     <a:GG2:624643988376387614> | To Edit Winners
     <a:hh:624643956352745494>  | To Edit Prize
     **`)
      message.channel.send(FireKing1)
            .then(msgB => {
                    msgB.react('✅').then(() => msgB.react('❎'))
                   
                    let sendR = (reaction, user) => reaction.emoji.name === '✅'  && user.id === message.author.id;
                    let dontSendR = (reaction, user) => reaction.emoji.name === '❎' && user.id === message.author.id;
                    let send = msgB.createReactionCollector(sendR);
                    let dontSend = msgB.createReactionCollector(dontSendR);
                   
                   
                   
    send.on('collect', r => {

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
                    })

          dontSend.on('collect', r => {
                    msgB.delete();
                    message.channel.send(':negative_squared_cross_mark: | The command has been canceld.').then(msg => msg.delete(5000));
                })
            })

         
                        })
                    
  
      }*/
