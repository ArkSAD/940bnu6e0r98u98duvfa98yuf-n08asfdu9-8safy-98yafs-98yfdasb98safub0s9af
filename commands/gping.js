exports.run = function(bot, message) {
    const Discord = require('discord.js');
    const embed = new Discord.RichEmbed()
        .addField('WebSocket Heartbeat <a:lodad2:617865137415782404>', `${Math.floor(bot.ping)} ms`, )
        .addField('Host Ping <a:lodad2:617865137415782404>', `Computing...`, )
        .setColor('BLUE');
    message.channel.send({embed}).then(function(newMessage) {
        const ping = newMessage.createdTimestamp - message.createdTimestamp;
        var color = 'BLUE';

        if (ping <= 500) {
            color = 'GREEN';
        } else if (ping > 1000) {
            color = 'RED';
        } else if (ping > 500) {
            color = 'ORANGE';
        }

        const embed = new Discord.RichEmbed()
            .addField('WebSocket Heartbeat <a:lodad2:617865137415782404>', `${Math.floor(bot.ping)} ms`, )
            .addField('Host Ping <a:lodad2:617865137415782404>', `${ping} ms`, )
            .setColor(color);
        message.channel.send({embed});
        newMessage.delete();
    }).catch(function(error) {
        const embed = new Discord.RichEmbed()
            .setTitle('An error occured.')
            .setDescription(`Please report this error to the development team of **${bot.user.username}**.\n\`\`\`${error}\`\`\``)
            .setColor('RED');
        message.channel.send({embed});
    })
}

exports.infos = {
    name: "Client Ping",
    perms: {
        bot: 1,
        discord: null
    },
    enabled: null,
    category: "Bot",
    description: "Checks bot's latency"
}