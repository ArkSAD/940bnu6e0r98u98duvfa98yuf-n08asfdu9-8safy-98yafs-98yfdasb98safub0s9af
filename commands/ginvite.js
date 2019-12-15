module.exports.run = async (client, message, args) => {
	if (message.author.id === client.user.id) return;


message.channel.send(`**Hi ! I am ${client.user.username} Bot <a:lodad2:617865137415782404>
 To see my all Commands Type \`#ghelp\`
Link Bot
🔗- https://bit.ly/2jSvsEi
**`);
}