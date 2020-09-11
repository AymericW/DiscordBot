const Discord = require('discord.js')
const client = new Discord.Client()
const { MessageAttachment } = require('discord.js');
const fetch = require('node-fetch');

const querystring = require('querystring');

let bodyresponse;


client.on('ready', async () => {
    console.log('Connected as ' + client.user.tag)

    client.user.setActivity('D&D', {type: "PLAYING"})

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

    if (primaryCommand == 'r') {
        helpCommand(arguments, recievedMessage);
    }else if (primaryCommand == 'shutup'){
        shutupCommand(recievedMessage)
    }
    else if (primaryCommand == 'hp'){
        healthCommand(arguments, recievedMessage);
    }
}

function healthCommand(arguments, recievedMessage){
    if (arguments != null) {
        console.log(arguments);
        let hpmodif = Math.ceil(Math.random() * arguments[0]) + (arguments[1] * 2);
        console.log(hpmodif);
        recievedMessage.channel.send(hpmodif);
    }
}


function helpCommand(arguments, recievedMessage) {

    if (arguments.length == 0){
        recievedMessage.channel.send("I'm not sure what u need help with. Try `!help [topic]`");
    } 
    else if (arguments != null)  {
        let nmbr = Math.ceil(Math.random() * arguments);
        recievedMessage.channel.send(nmbr);
    }
    
    
    else {
        recievedMessage.channel.send("It looks like u need help with " + arguments);
    }
}


function shutupCommand(recievedMessage) {
    recievedMessage.channel.send("Please SHUT THE FUCK UP YOU MONKEY ")
}

client.login('NzE4Mzk0MzkyMzA5NjYxNjk3.XtoO6g.T7NCQMGYWQLUWxxbjYghDTZ-NHE');

//client.login(process.env.BOT_TOKEN);