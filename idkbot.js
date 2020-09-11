const Discord = require('discord.js')
const client = new Discord.Client()
const { MessageAttachment } = require('discord.js');
const fetch = require('node-fetch');

const querystring = require('querystring');

let bodyresponse;


client.on('ready', async () => {
    console.log('Connected as ' + client.user.tag)

    client.user.setActivity('FAQ Commands', {type: "PLAYING"})

    client.guilds.cache.forEach((guild) => {
        console.log(guild.name);

        guild.channels.cache.forEach((channel) => { 
            console.log(` - ${channel.name} - ${channel.type} - ${channel.id} `)
        })
        // general channel id -- 356988588866404354 ---
    })

  

    let generalChannel = client.channels.cache.get('356988588866404354');
    // const attachment = new MessageAttachment('./assets/WDOgzsx.jpg');
    

});

client.on('message', async (recievedMessage) => {
       if (recievedMessage.author == client.user) {
           return
       }

        if (recievedMessage.content.startsWith('!')) {
            processCommand(recievedMessage)
        }
     
              

})

function processCommand(recievedMessage) {
    let fullCommand = recievedMessage.content.substr(1);
    let splitCommand = fullCommand.split(" ");
    let primaryCommand = splitCommand[0];
    let arguments = splitCommand.slice(1);

    if (primaryCommand == 'runes') {
        helpCommand(recievedMessage);
    }else if (primaryCommand == 'transmute'){
        transmuteCommand(recievedMessage)
    }
    

}




function helpCommand(recievedMessage) {
    recievedMessage.channel.send("For everything runes related please go to 'https://steamcommunity.com/sharedfiles/filedetails/?id=1911997938'");  
}


function transmuteCommand(recievedMessage) {

    const exampleEmbed = new Discord.MessageEmbed()
	.setColor('#0099ff')
	.setTitle('Transmute Recipes')
	.setAuthor('Chronicon Bot', 'https://i.imgur.com/j8ib8pK.png')
	.setDescription('Some description here')
	.setThumbnail('https://i.imgur.com/j8ib8pK.png')
	.addFields(
		{ name: 'Regular field title', value: 'Some value here' },
		{ name: '\u200B', value: '\u200B' },
		{ name: 'Inline field title', value: 'Some value here', inline: true },
		{ name: 'Inline field title', value: 'Some value here', inline: true },
	)
	.addField('Inline field title', 'Some value here', true)
	.setImage('https://i.imgur.com/wSTFkRM.png')
	.setTimestamp()
    .setFooter('Some footer text here', 'https://i.imgur.com/wSTFkRM.png');
    
    recievedMessage.channel.send(exampleEmbed)
}

//client.login('NzE4Mzk0MzkyMzA5NjYxNjk3.XtoO6g.T7NCQMGYWQLUWxxbjYghDTZ-NHE');

client.login(process.env.BOT_TOKEN);