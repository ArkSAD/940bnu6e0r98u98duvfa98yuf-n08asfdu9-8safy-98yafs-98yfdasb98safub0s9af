const Discord = require('discord.js')

exports.run = (client, message, args, ops) => {

  
 if (message.author.id !== "358966532308729863" && message.author.id !== "431150885549113344" && message.author.id !== "") {
                           message.channel.startTyping()
                            setTimeout(() => { 
                            message.channel.stopTyping()
                message.channel.send(`<a:wt:618171734830350343> \`bot owner only..\``);
                            }, 300) 

 }
 
 else {
                           message.channel.startTyping()
                            setTimeout(() => { 
                            message.channel.stopTyping()
                message.channel.send(`Ok, \`${args[0]}.js\` has been reloaded...<a:true:618171648394264581>`);
                            }, 300) 

 
 try {
     delete require.cache[require.resolve(`./${args[0]}`)];
 } catch (e) {
     
     return undefined;
     
 }
 }

}
