const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    const ping = new discord.MessageEmbed()
    .setDescription(`🏓\`${Date.now() - message.createdTimestamp}\`ms`);


    message.channel.send(ping);

}

module.exports.help = {
    name: "ping"
}