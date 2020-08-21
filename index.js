const Discord = require('discord.js')
const bot = new Discord.Client();
const mathjs = require('mathjs');
const { and, number } = require('mathjs');

const PREFIX = '';

bot.on('ready', () => {
    bot.user.setActivity(">help");
    console.log('ready')
});

bot.on("guildMemberAdd", member => {
    member.roles.add(member.guild.roles.cache.find(role => role.name == "normal"), "auto added.");
})

bot.on('message', msg => {

    let args = msg.content.substring(PREFIX.length).split(' ');
    switch (args[0]) {
        case '>help':
            msg.channel.send("This is the bot that might be able to solve a bit of your math homework! Some examples you can type are: ``start 8 x * 4 = 16`` or something more simple like: ``start 2 x = -18`` If you need any help with the bot then you can join this discord server: https://discord.gg/R3Jzhba and if you would like to dm me then my name is Crabby#9999 but please dont ping me without reason. If you would like to add this bot to another server then you can use >invite.")
            break;
        case '>invite':
            msg.channel.send('Use this link to invite the bot to your server <https://discord.com/oauth2/authorize?client_id=745797470411292703&scope=bot&permissions=1576533239>')

        case 'start':

            if (args[2] === '-') {
                let unknown = args[3];
                let ans = args[5];
                let variable = args[1];
                let finalAns = mathjs.add(ans, unknown);
                msg.reply('the answer is `' + variable + ' = ' + finalAns + '` debugCode: 0');
            }

            else if (args[2] === '+') {
                if (!args[4] === '=') {
                    let unknown = args[3];
                    let ans = args[5];
                    let variable = args[1];
                    let finalAns = ans - unknown
                    msg.reply('the answer is ``' + variable + ' = ' + finalAns + '``debugCode: 1');
                }
            }

            else if (args[2] === '/') {
                let unknown = args[3];
                let ans = args[5];
                var variable = args[1];
                let finalAns = unknown * ans;
                msg.reply('the answer is ``' + variable + ' = ' + finalAns + '``debugCode: 2');

            } else if (args[2] === 'a' || args[2] === 'b' || args[2] === 'c' || args[2] === 'd' || args[2] === 'e' || args[2] === 'f' || args[2] === 'g' || args[2] === 'h' || args[2] === 'i' || args[2] === 'j' || args[2] === 'k' || args[2] === 'l' || args[2] === 'm' || args[2] === 'n' || args[2] === 'o' || args[2] === 'p' || args[2] === 'q' || args[2] === 'r' || args[2] === 's' || args[2] === 't' || args[2] === 'u' || args[2] === 'v' || args[2] === 'w' || args[2] === 'x' || args[2] === 'y' || args[2] === 'z') {
                if (args[3] === '+') {
                    let constant1 = args[1];
                    let variable = args[2];
                    let constant2 = args[4];
                    let expresstionAnswer = args[6];
                    let subBothSides = expresstionAnswer - constant2;
                    if (args[2] === 'a' || args[2] === 'b' || args[2] === 'c' || args[2] === 'd' || args[2] === 'e' || args[2] === 'f' || args[2] === 'g' || args[2] === 'h' || args[2] === 'i' || args[2] === 'j' || args[2] === 'k' || args[2] === 'l' || args[2] === 'm' || args[2] === 'n' || args[2] === 'o' || args[2] === 'p' || args[2] === 'q' || args[2] === 'r' || args[2] === 's' || args[2] === 't' || args[2] === 'u' || args[2] === 'v' || args[2] === 'w' || args[2] === 'x' || args[2] === 'y' || args[2] === 'z') {
                        let devRightSide = subBothSides / constant1;
                        let finalAns = devRightSide;
                        msg.reply('the answer is ``' + variable + ' = ' + finalAns + '``debugCode: 3');
                    }
                } else if (args[3] === '-') {
                    let constant1 = args[1];
                    let variable = args[2];
                    let constant2 = args[4];
                    let expresstionAnswer = args[6];
                    let addBothSides = mathjs.add(expresstionAnswer, constant2)
                    if (args[2] === 'a' || args[2] === 'b' || args[2] === 'c' || args[2] === 'd' || args[2] === 'e' || args[2] === 'f' || args[2] === 'g' || args[2] === 'h' || args[2] === 'i' || args[2] === 'j' || args[2] === 'k' || args[2] === 'l' || args[2] === 'm' || args[2] === 'n' || args[2] === 'o' || args[2] === 'p' || args[2] === 'q' || args[2] === 'r' || args[2] === 's' || args[2] === 't' || args[2] === 'u' || args[2] === 'v' || args[2] === 'w' || args[2] === 'x' || args[2] === 'y' || args[2] === 'z') {
                        let devRightSide = addBothSides / constant1;
                        let finalAns = devRightSide;
                        msg.reply('the answer is ``' + variable + ' = ' + finalAns + '``debugCode: 4');
                    }
                } else if (args[3] === '*') {
                    let constant1 = args[1];
                    let variable = args[2];
                    let constant2 = args[4];
                    let expresstionAnswer = args[6];
                    let devBothSides = expresstionAnswer / constant2;
                    if (args[2] === 'a' || args[2] === 'b' || args[2] === 'c' || args[2] === 'd' || args[2] === 'e' || args[2] === 'f' || args[2] === 'g' || args[2] === 'h' || args[2] === 'i' || args[2] === 'j' || args[2] === 'k' || args[2] === 'l' || args[2] === 'm' || args[2] === 'n' || args[2] === 'o' || args[2] === 'p' || args[2] === 'q' || args[2] === 'r' || args[2] === 's' || args[2] === 't' || args[2] === 'u' || args[2] === 'v' || args[2] === 'w' || args[2] === 'x' || args[2] === 'y' || args[2] === 'z') {
                        let devRightSide = devBothSides / constant1
                        let finalAns = devRightSide;
                        msg.reply('the answer is ``' + variable + ' = ' + finalAns + '``debugCode: 5');
                    }
                } else if (args[3] === '/') {
                    let constant1 = args[1];
                    let variable = args[2];
                    let constant2 = args[4];
                    let expresstionAnswer = args[6];
                    let MultBothSides = expresstionAnswer * constant2;
                    if (args[2] === 'a' || args[2] === 'b' || args[2] === 'c' || args[2] === 'd' || args[2] === 'e' || args[2] === 'f' || args[2] === 'g' || args[2] === 'h' || args[2] === 'i' || args[2] === 'j' || args[2] === 'k' || args[2] === 'l' || args[2] === 'm' || args[2] === 'n' || args[2] === 'o' || args[2] === 'p' || args[2] === 'q' || args[2] === 'r' || args[2] === 's' || args[2] === 't' || args[2] === 'u' || args[2] === 'v' || args[2] === 'w' || args[2] === 'x' || args[2] === 'y' || args[2] === 'z') {
                        let devRightSide = MultBothSides / constant1
                        let finalAns = devRightSide;
                        msg.reply('the answer is ``' + variable + ' = ' + finalAns + '``debugCode: 6');
                    }
                } else {
                    let unknown = args[1];
                    let ans = args[4];
                    var variable = args[2];
                    let finalAns = ans / unknown;
                    msg.reply('the answer is ``' + variable + ' = ' + finalAns + '``debugCode: 7');
                    break;
                }
            }
            bot.on('error', () => { })
            bot.on('presenceUpdate', () => {
                console.log('status')
            })
    }
})

bot.login('NzQ1Nzk3NDcwNDExMjkyNzAz.Xz3ABQ.xt8i45BHkKHAsSGOhV5h9PeGDI4'); // the i have regenerated the token there is not thing to worry about
