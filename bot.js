const Discord = require(`discord.js`);
const client = new Discord.Client();

client.on('Pronto', () => {
    console.log(`Estou pronto!`);
});

client.on(`message`, message => {
    if (message.content.startsWith(`Que Deus...`)){
        message.channel.send(`abençoe os Estados Unidos da América.`);
    }
});

client.login(`process.env.NTM3MzkzNjUyMzkwMDM1NDU3.DyoiMw.SRPT4Z5N1vxLJyaMm8W0zcD0Dv0`);
