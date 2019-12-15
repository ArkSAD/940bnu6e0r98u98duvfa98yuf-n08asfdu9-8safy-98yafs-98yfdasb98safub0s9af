module.exports.run = async (bot, message) => {

    const Discord = require("discord.js");


    let compare = (a, b) => {
        if (a.position > b.position) return -1;
        if (a.position < b.position) return 1;
        return 0;
    }

    var successEmbed = new Discord.RichEmbed()
        .setAuthor(`This bot is active on ${bot.guilds.size} Servers:`)
        .setTitle(`Server + ID + Members`)
        .setDescription(`${bot.guilds.sort(compare).map(servers => `${servers}\n${servers.id}\n${servers.members.size}`).join("\n\n")}`)
        .setTimestamp();

    if (message.args.join(" ") == 0) {
        if (message.author.id === BotSettings.OwnerID) {
            bot.users.get(BotSettings.OwnerID).send(successEmbed);
        } else {
            let msglist = await Embeds.dev(message.channel);
            setTimeout(async () => {
                msglist.delete();
            }, 5000);
        }
        message.delete();
    };
    if (message.args.join(" ") === "channel") {
        if (message.author.id === BotSettings.OwnerID) {
            return message.channel.send(successEmbed);
        } else {
            let msglist = await Embeds.dev(message.channel);
            setTimeout(async () => {
                msglist.delete();
            }, 5000);
        }
    }
};

module.exports.help = {
    name: "guildlist",
    desc: "Displays all servers on which this bot is located.",
    usage: "guildlist or + channel",
    perms: "Developer Perms"
};