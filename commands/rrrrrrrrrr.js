const Discord = require("discord.js");
const fs = require("fs");
const config1 = require("../db/config1.json");

module.exports.run = async (client, message, args) => {
message.react("647341573503320065")

 var prefix = config1.prefix;
    let info1 = [`


 **  Hi I am ${client.user.username} 
I make giveaways 
This is easy and simple
Easy to making giveaways
If you have Problem Join server support 

Dev Team | <:3_:644334711455612929>
> <@358966532308729863>
> <@431150885549113344>
** `]


    let arbic = [`
   
** ${client.user.username} info  **

**Commands Arabic Help u | <:615995795061211272:644334940657418251>

${prefix}ping > لمعرفة سرعة إتصال البوت

${prefix}invite > لدعوة البوت

طريقة بدا القيف واي :

${prefix}start > انشاء قيف واي

\`مثال : ${prefix}start 1m 2w Good prize \`

${prefix}reroll [ID message] > لإختيار فائز إخر

${prefix}del [ID message] > لإلغاء القيف واي
 
${prefix}end [ID message] > انهاء القيف واي قبل الوقت المحدد واختيار الفائز

 عند وجودك لخطاء برمجي تواصل مع المطورين وسوف تحصل على جائزة | <:5_:644334746402291712> **

Click here <:uas:649478428453634053> to go to English 
  
   `]

let english = `**
Hi i am ${client.user.username} 

English, <a:lodad2:617865137415782404>

${prefix}ping > To show the ping bot

${prefix}invite > To Invite the bot

Giveaway 🎉 :

${prefix}start > To start the giveaway 

\`example:${prefix}start 1m 2w Good prize \`

${prefix}reroll [ID message] > To Choose a new winner

${prefix}del [ID message] > To Remove Giveaway 

${prefix}end [ID message] > To end the Giveaway and choose a winner

It's simple and easy <a:true:618171648394264581>**

Click here <:Saudi:649478098672287746> to go to Arabic `

let info = `**● Hi -
In order to show the help menu in your language click on the American Emoji
( <:uas:649478428453634053> )

● أهلا -
من أجل أظهار قائمة المساعدة باللغة الخاصة بك قم بالظغط على الأيموجي السعودي 
( <:Saudi:649478098672287746> )** `
    let page = 1;

 message.author.send(`Giveaway`).catch(err => {
  return message.reply("**We can't send you commands because your dm is closed, <a:wt:618171734830350343>**");})


    let embed = new Discord.RichEmbed()
		.setColor("#36393e")
    .setFooter(``)
    .setDescription(`${info}`)
  .addField(`Support Server `, `[Click here!](https://discord.gg/J36zhne)`)
   .addField(`Invite Bot `, `[Click here!](https://discordapp.com/oauth2/authorize?client_id=606026008109514762&permissions=391264&scope=bot)`)

    message.author.sendEmbed(embed).then(msg => {

        msg.react('644334711455612929').then( r => {
        msg.react('649478428453634053')
            msg.react('649478098672287746')

        const info2 = (reaction, user) => reaction.emoji.name === '3_' && user.id === message.author.id;

        const backwardsFilter = (reaction, user) => reaction.emoji.name === 'uas' && user.id === message.author.id;
        const forwardsFilter = (reaction, user) => reaction.emoji.name === 'Saudi' && user.id === message.author.id;


        const backwards = msg.createReactionCollector(backwardsFilter, { time: 2000000});
        const forwards = msg.createReactionCollector(forwardsFilter, { time: 2000000});
        const info55 = msg.createReactionCollector(info2, { time: 2000000});



        backwards.on('collect', r => {

            //if (page === 1) return;
            //page--;
           embed.setDescription(`${english}`);

   
           // embed.setFooter(`Page ${page} of ${pages.length}`);
            msg.edit(embed)
        })
        forwards.on('collect', r => {
           // if (page === pages.length) return;
          //  page++;
            embed.setDescription(`${arbic}`);
   
           // embed.setFooter(`Page ${page} of ${pages.length}`);
            msg.edit(embed)
        })

      info55.on('collect', r => {
           // if (page === pages.length) return;
          //  page++;

            embed.setDescription(`${info1}`);

  
           // embed.setFooter(`Page ${page} of ${pages.length}`);
            msg.edit(embed)
        })
        })
    })
  }
    

  
    
    
