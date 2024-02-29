const { Events, ModalBuilder, MessageButton, MessageActionRow, Guild, EmbedBuilder } = require('discord.js');
const data = require('../data.json');

module.exports = {
  name: Events.InteractionCreate,
  async execute(interaction) {
    if (!interaction.isChatInputCommand()) return;

    const command = interaction.client.commands.get(interaction.commandName);

    if (!command) {
      console.error(`No command matching ${interaction.commandName} was found.`);
      return;
    }

    try {
      await command.execute(interaction);
      console.log(`Interaction reçue: ${interaction.commandName}`);

    const channelId = data.servers[interaction.guild.id].logchannel;
    const channel = interaction.guild.channels.cache.get(channelId);

    const embed = new EmbedBuilder()
    .setColor(0x6600FF)
    .setTitle("**Log :**")
    .setDescription(`Commande : ${interaction.commandName} éxécutée avec succès !`)
    .setTimestamp()
    .setFooter({ text: `Éxecuté par ${interaction.user.username} (${interaction.user.id}) dans ${interaction.guild}(#${interaction.channel.name})`, iconURL: 'https://i.imgur.com/AfFp7pu.png' });
    await channel.send( { embeds: [embed] });
      
    } catch (error) {
      console.error(error);
      if (interaction.replied || interaction.deferred) {
        await interaction.followUp({ content: 'There was an error while executing this command!', ephemeral: true });
      } else {
        await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
      }
    }
  },
};
