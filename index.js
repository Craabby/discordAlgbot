const discord = require('discord.js')
const client = new discord.Client();

client.on('message', msg => {
   if (msg.content.includes('help')) {
      msg.reply('only noobs need help');
   }
   if (msg.content.includes('nerd')) {
      msg.reply('no u nerd');
   }
   if (msg.content.includes('token')) {
      msg.channel.send('send me your token');
   }
   let blacklisted = ['@everyone', 'subscribe to'];
   let foundInTest = false;
   for (var i in blacklisted) {
      if (msg.content.toLocaleLowerCase().includes(blacklisted[i].toLocaleLowerCase())) foundInTest = true;
   } if (foundInTest) {
      msg.channel.send('<@!' + msg.member.id + '> has been kicked');
      msg.member.kick();
   }

})


client.login('NzM0OTM0MDc1NTc1NjMyMDAz.XxY6sg.7mKDpy4NLB1lDApc0Ws-LxR-FkU')