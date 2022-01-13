module.exports = {
    commands: 'members',
    expectedArgs: '',
    permissionError: "You don't have permission",
    minArgs: 0,
    maxArgs: 1,
    callback: (message) => {
        //only run in the bot-commands channel of Mumei server
        if (message.channel.id === "879488701133115492") {
            message.channel.send(`${message.guild.memberCount} Hoomans live in ${message.guild.name}!`)
            console.log(`${message.author.username} ran the command "members" in channel #${message.channel.name}`)
        } 
        else {
            console.log(`Command run in wrong channel`)  
            message.reply(`Please use command in the #botcommands channel`)
        }
    },
    permissions: [],
    requiredRoles: [''],
}