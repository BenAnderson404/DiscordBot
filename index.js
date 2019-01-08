const token='YOUR_DISCORD_TOKEN';
const Discord = require('discord.js');

const client = new Discord.Client();
client.on('message', (msg) =>{
    if (msg.content === '!test'){
        msg.channel.send(`Hello ${msg.author}!`);
    }    

    if (msg.content === "!youtube"){
        msg.channel.send('http://www.youtube.com');
    }

    if (msg.content === "!twitter"){
        msg.channel.srend('http://www.twitter.com');
    }
});
client.on('ready', () => {
    console.log('Bot has connected!')

    client.channels.find(x => x.name === 'test').send('Beep beep!  i\'m a jeep!');
});

client.login(token);
