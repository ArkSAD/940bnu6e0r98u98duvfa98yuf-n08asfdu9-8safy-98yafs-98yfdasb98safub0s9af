const Discord = require("discord.js");
const fs = require("fs");
const blist = require("../db/blacklist.json");
const config1 = require("../db/config1.json");

module.exports.run = async (bot, message, args) => {
 var prefix = config1.prefix;

 if (message.author.id !== "358966532308729863" && message.author.id !== "" && message.author.id !== "431150885549113344") return message.channel.send(`<a:wt:618171734830350343> \`bot owner only..\``);
  
    let member = message.mentions.members.first();
    if(!member) return message.channel.send(`**<a:worng:618171880855044129>\`${config1.prefix}blacklist [user]\`**` );

    if(message.author.id === member.user.id) return message.channel.send(`**You can not add yourself to the black list**`)

    if(member.highestRole.position >= message.member.highestRole.position) return message.channel.send(`**مقدر احط شخص اقوى مني بالبرمشنات تبغاه يطردني صح ${message.author}؟ **`);

    let bl = blist[message.guild.id];

    if(!bl) {

      blist[message.guild.id] = {
        users: [`<@${member.user.id}>`]
      }

      fs.writeFileSync('./db/blacklist.json', JSON.stringify(blist));

         message.channel.send(`**تم اضافه ${member.user.username}
الى القائمه السوداء هيهي <a:true:618171648394264581>,** `)
      return;
    }

    if(bl.users.includes(`<@${member.user.id}>`)) return message.channel.send(`**هذا الشخص بالفعل في القائمه السوداء <@${member.user.id}> **`)
    bl.users.push(`<@${member.user.id}>`);

    fs.writeFileSync('./db/blacklist.json', JSON.stringify(blist)); 


         message.channel.send(`**تم اضافه ${member.user.username}
الى القائمه السوداء هيهي <a:true:618171648394264581>,** `)
}
