module.exports = {
    commands: 'mute',
    expectedArgs: '<username>',
    permissionError: 'You must be an admin to use this command',
    minArgs: 1,
    maxArgs: 1,
    callback: (message) => {
        const role = message.guild.roles.cache.find(role => role.id === '880623120568959006')
        //protect against bad arguments being passed in
        if (message.mentions.users.first() != null && message.mentions.users.first() != undefined){
        console.log(`${message.author.username} ran the command "mute" on ${message.mentions.users.first().username} in channel #${message.channel.name}`)
        //protect against role being changed or removed
            if (role !== undefined) {
                const victim = message.guild.members.cache.find(member => member.id === message.mentions.users.first().id)
                victim.roles.add(role)
                message.channel.send(`${message.mentions.users.first().username} has been muted. Cast from Civilization!`)
                message.channel.send( {files: [`./audio/mumei-mute.mp3`] })
            }
            else {
                console.log("Role does not exist. .mute command")
                message.channel.send(`Civilization does not have a role for this.`)
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