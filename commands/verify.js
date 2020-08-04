const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    if(! message.member.roles.cache.has("740310661997002753")) return message.reply("Je bent al verified!");

    var verified = new discord.MessageEmbed()
    .setTitle("U bent nu verified, ")
    .setColor("#3de361")
    .setFooter("DutchFM Bot")
    .setTimestamp()
    .setDescription(`${message.author.username} je bent verified!`)
    return message.channel.send(verified);


}

module.exports.help = {
    name: "verify"
}