const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    const ping = new discord.MessageEmbed()
    .setDescription(`🏓 Wow je slaat je bal\`${Date.now() - message.createdTimestamp}\` Meter ver weg!`);


    message.channel.send(ping);

}

module.exports.help = {
    name: "ping"
}