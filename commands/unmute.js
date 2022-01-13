module.exports = {
    commands: 'unmute',
    expectedArgs: '<username>',
    permissionError: 'You must be an admin to use this command',
    minArgs: 1,
    maxArgs: 1,
    callback: (message) => {
        const role = message.guild.roles.cache.find(role => role.name === 'Bad Civ')
        //protect against bad arguments being passed
        if (message.mentions.users.first() != null && message.mentions.users.first() != undefined){
            console.log(`${message.author.username} ran the command "unmute" on ${message.mentions.users.first().username} in channel #${message.channel.name}`)
            //protect against roles name being changed or removed
            if (role !== undefined) {
                const member = message.guild.members.cache.find(member => member.id === message.mentions.users.first().id)
                member.roles.remove(role)
                message.channel.send(`${message.mentions.users.first().username} has been unmuted. Welcome back to Civilization!`)
                message.channel.send( {files: [`./audio/Mumei_youre_back.wav`]})
            }
            else {
                console.log("That role does not exist. .unmute command")
                message.channel.send("Civilization has no role for this to begin with.")
            }
        }
        else {
            console.log(`User not found.`)
            message.reply("I can't find a user by this name in our Civilization.")
        }
    },
    permissions: '',
    requiredRoles: [''],
    modCommand: 'true'
}