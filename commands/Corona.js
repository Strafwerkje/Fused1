const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    const corona = await track.all();


    const embed = new discord.MessageEmbed()
    .setTitle(`Worldwide`)
    .setDescription(`Info on COVID-19`)
    .addField('Total Confirmed', corona.cases, true)
    .addField('Total Deaths', corona.deaths, true)
    .addField('Total Recovered', corona.recovered, true)
    .addField('Today\'s cases', corona.todayCases, true)
    .addField('Today\'s deaths', corona.todayDeaths, true)
    .addField('Active cases', corona.active, true)
    .addField('Critical cases', corona.critical, true)
    .setFooter('Thanks for using TestBot111', client.user.displayAvatarURL())

    message.channel.send(embed);

}

module.exports.help = {
    name: "Corona"
}