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

    if (primaryCommand == 'act1') {
        act1command(recievedMessage);
    }else if (primaryCommand == 'act2'){
        transmuteCommand(recievedMessage)
    }else if (primaryCommand == 'act3'){
        recievedMessage.channel.send("NO. Steam remote play is available !")
    }else if (primaryCommand == "act4") {
        buildCommand(recievedMessage)
    }
    

}

function act1command(recievedMessage) {
    const buildEmbed = new Discord.MessageEmbed()
    .setColor('RED')
	.setTitle('Builds 1.0')
	.setAuthor('Chronicon Bot', 'https://i.imgur.com/j8ib8pK.png')
	.setDescription('Here are all the links for known builds for 1.0')
	.setThumbnail('https://i.imgur.com/j8ib8pK.png')
	.addFields(
		{ name: 'Step1', value: ' - All level in ledge (except bosskiller ofc "watch out for alterations + portal scrolls)' },
        { name: 'Step2', value: ' - Bosskiller hard pushes brutus (cursebot does trial)' },
        { name: 'Step3', value: ' - When bosskiller is in brutus puts a portal up at 20% and we all tp to him (click on blue swirly)' },
        { name: 'Step4', value: 'We all level in prisoners gate (except boss killer goes to pushes merveil)' },
        { name: 'Step5', value: 'Merveil second phase bosskiller puts portal up and we all tp in to kill her'},
        )
	.setTimestamp()
    .setFooter('Big thanks to Squarebit for the game <3', 'https://i.imgur.com/j8ib8pK.png');
    
    recievedMessage.channel.send(buildEmbed)
    }





function buildCommand(recievedMessage) {
    const buildEmbed = new Discord.MessageEmbed()
    .setColor('RED')
	.setTitle('Builds 1.0')
	.setAuthor('Chronicon Bot', 'https://i.imgur.com/j8ib8pK.png')
	.setDescription('Here are all the links for known builds for 1.0')
	.setThumbnail('https://i.imgur.com/j8ib8pK.png')
	.addFields(
		{ name: 'NullPointers Build dump', value: 'https://steamcommunity.com/app/375480/discussions/5/2942494909178938501/' },
        { name: 'Darkness ThunderCharged Avenger Templar', value: 'https://steamcommunity.com/app/375480/discussions/5/2913220877919620020/' },
        { name: 'Muggs Holy fire Hammerdin', value: 'https://steamcommunity.com/app/375480/discussions/5/2913220877912543056/' },
        { name: 'Shrank CoC Tornado Templar', value: 'https://steamcommunity.com/app/375480/discussions/5/4625714282757628078/' },
        { name: 'Flash Fire 0TL M15 MF Farming build Warlock', value: 'https://www.youtube.com/watch?v=Aub3iiqJl28'},
        { name: 'Thunder Orb Stormcaller Warden M15 0TL Farming Build 825% Magic Find', value: 'https://www.youtube.com/watch?v=2zGi_zamV3U'},
        )
	.setTimestamp()
    .setFooter('Big thanks to Squarebit for the game <3', 'https://i.imgur.com/j8ib8pK.png');
    
    recievedMessage.channel.send(buildEmbed)   
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


client.login(process.env.BOT_TOKEN)
