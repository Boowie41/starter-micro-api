const { SlashCommandBuilder, EmbedBuilder, Client } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('ping')
    .setDescription('Retourne la latence du bot'),
  async execute(interaction) {

    const embed = new EmbedBuilder()
    .setColor(0x6600FF)
    .setTitle("**Ping :**")
    .setDescription("Retourne la latence du bot")
    .addFields(
      { name: 'Latence du bot :', value: `${Date.now() - interaction.createdTimestamp}ms` },
    )
    .setTimestamp()
    .setFooter({ text: `Executed by ${interaction.author}`, iconURL: 'https://i.imgur.com/AfFp7pu.png' });

    interaction.reply({ embeds: [embed] });
    
  },
};
