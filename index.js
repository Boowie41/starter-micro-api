const fs = require('node:fs');
const path = require('node:path');
const { Client, Collection, Events, GatewayIntentBits, EmbedBuilder } = require('discord.js');
const { token } = require('./config.json');
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.commands = new Collection();

const foldersPath = path.join(__dirname, 'commands');
const commandFolders = fs.readdirSync(foldersPath);

for (const folder of commandFolders) {
  const commandsPath = path.join(foldersPath, folder);
  const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));
  for (const file of commandFiles) {
    const filePath = path.join(commandsPath, file);
    const command = require(filePath);
    
    if ('data' in command && 'execute' in command) {
      client.commands.set(command.data.name, command);
    } else {
      console.log(`[WARNING] The command at ${filePath} is missing a required "data" or "execute" property.`);
    }
  }
}

const eventsPath = path.join(__dirname, 'events');
const eventFiles = fs.readdirSync(eventsPath).filter(file => file.endsWith('.js'));

for (const file of eventFiles) {
  const filePath = path.join(eventsPath, file);
  const event = require(filePath);
  if (event.once) {
    client.once(event.name, (...args) => event.execute(...args));
  } else {
    client.on(event.name, (...args) => event.execute(...args));
  }
}

client.login(token);



const express = require('express');
const app = express();
const port = 3000;

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/ticket', (req, res) => {
  
  let pds = req.query.pds;
  let pmc = req.query.pmc;
  let age = req.query.age;
  let micro = req.query.micro;
  let vous = req.query.vous;
  let mc = req.query.mc;
  let pala = req.query.pala;
  let metiers = req.query.metiers;
  let sanctions = req.query.sanctions;
  let horaires = req.query.horaires;
  let pvp = req.query.pvp;
  let farm = req.query.farm;
  let build = req.query.build;
  let deco = req.query.deco;
  let pillage = req.query.pillage;
  let fac = req.query.fac;
  let objectifs = req.query.objectifs;
  let richesses = req.query.richesses;
  let grade = req.query.grade;
  let pkn = req.query.pkn;
  let pkv = req.query.pkv;
  let aide = req.query.aide;
  let style = req.query.style;
  let origine = req.query.origine;

  console.log(pds, pmc, age, micro, vous, mc, pala, metiers, sanctions, horaires, pvp, farm, build, deco, pillage, fac, objectifs, richesses, grade, pkn, pkv, aide, style, origine)

  
  res.send("Votre requête à bien été prise en compte, nous vous répondrons sous peu dans vos dm discord !");

const channel = client.channels.cache.get('1212490791063388192');
  
const embed = new EmbedBuilder()
    .setColor(0x6600FF)
    .setTitle("**Recrutement :**")
    .setDescription(`
    - Pseudo Minecraft : ${pmc}
    - Age : ${age}
    - Tag Discord : ${pds}
    - Micro : ${micro}
    - Présentation : ${vous}
    - Minecraft : ${mc}
    - Paladium : ${pala}
    - Metiers : ${metiers}
    - Sanctions : ${sanctions}
    - Horaires : ${horaires}
    - PvP : ${pvp}
    - Farm : ${farm}
    - Build de BC : ${build}
    - Décoration : ${deco}
    - Pillage : ${pillage}
    - Autre(s) faction(s) : ${fac}
    - Objectifs : ${objectifs}
    - Richesses : ${richesses}
    - Grade : ${grade}
    - Pourquoi nous : ${pkn}
    - Pourquoi lui/elle : ${pkv}
    - Va-t-il/elle nous aider : ${aide}
    - Style de jeu : ${style}
    - Où il/elle à eu le formulaire : ${origine}
    `)
    .setTimestamp()

    channel.send({ embeds: [embed] });
  
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
