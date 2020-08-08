const discord = require("discord.js");
const botConfig = require("../botconfig.json");

module.exports.run = async (bot, message, args) => {

    const categoryID = "734314126318370816";

    var userName = message.author.username;
    var userDiscriminator = message.author.discriminator;

    var ticketExist = false;

    message.guild.channels.cache.forEach(channel => {

        if (channel.name == "〚🎫〛" + userName.toLowerCase()) {
            ticketExist = true;

            message.reply("Er is al een channel");

            return;
        }

    });

    if (ticketExist) return;

    message.channel.send(embed).then(msg => msg.delete({timeout: 4000}));

    message.guild.channels.create("〚🔮〛" + message.guild.memberCount(), { type: 'text' }).then(
        (createdChannel) => {
            createdChannel.setParent(categoryID).then(
                (settedParent) => {

                    settedParent.updateOverwrite(message.guild.roles.cache.find(x => x.name === '@everyone'), {
                        SEND_MESSAGES: false,
                        VIEW_CHANNEL: true
                    });

                }
            ).catch(err => {
                message.channel.send("Oh jee, iets ging niet helemaal goed! (catch 1)"),
                    console.log(err);
            });
        }
    ).catch(err => {
        message.channel.send("Oh jee, iets ging niet helemaal goed! (catch 2)"),
            console.log(err);
    });

}

module.exports.help = {
    name: "Membercount",
    description: "dit is Onze ticket systeem."
}