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
    }else if (primaryCommand == 'multiplayerwhen'){
        recievedMessage.channel.send("NO. Steam remote play is available !")
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
	.setDescription('Here are all the recipes for transmutation')
	.setThumbnail('https://i.imgur.com/j8ib8pK.png')
	.addFields(
		{ name: 'Apply greater Rune', value: 'Consumes 50x Champions crown and a Greater rune to apply it to a fitting item' },
        { name: 'Apply lesser Rune', value: 'Consumes 50x Champions crown and a Lesser rune to apply it to a fitting item' },
        { name: 'Create Greater Rune', value: 'Consumes 50x Champions crown, any True Legendeary item with a Power on it, and a Runestone to create a Greater rune holding the power of the item. The item is lost in the process' },
        { name: 'Create Greater Rune', value: 'Consumes 50x Champions crown, any unique or legendary item with a Power on it, and a Runestone to create a Lesser rune holding the power of the item. The item is lost in the process' },
        { name: 'Permanenet socket', value: 'Consumes 30x Champions crown and any Prismatic Socket to socket an item with a new permanent Prismatic socket - Only one can be applied to an item'},
        { name: 'Set Item conversion', value: 'Sacrifice 30x Champions crown and a Set item of any quality to get a different item from the same set'},
        { name: 'Unlock enchants', value: 'Unlock all Enchants on any equipment by transmuting it with 25x Keys'},
        { name: 'Create spell codex', value: 'Comibining 50x of any spell scrol with a Spell codex crates a codex of that spell with unlimited use'}
        )
	.setTimestamp()
    .setFooter('Big thanks to Squarebit for the game <3', 'https://i.imgur.com/j8ib8pK.png');
    
    recievedMessage.channel.send(exampleEmbed)
}

//client.login('NzE4Mzk0MzkyMzA5NjYxNjk3.XtoO6g.T7NCQMGYWQLUWxxbjYghDTZ-NHE');

client.login(process.env.BOT_TOKEN);

