module.exports = {
    commands: 'pfp',
    expectedArgs: '<username>',
    permissionError: 'You must be an admin to use this command',
    minArgs: 0,
    maxArgs: 1,
    callback: (message) => {
        if (message.mentions.users.first() != null && message.mentions.users.first() != undefined){
            console.log(`${message.author.username} ran the command "pfp" in channel #${message.channel.name}`)
            const victim = message.mentions.users.first()
            const pfp = victim.displayAvatarURL({ format: 'png' })
            message.channel.send(`${pfp}`)
        }
        else {
            console.log("Else statement. .pfp command")
            message.channel.send(`No user found.`)
        }
    },
    permissions: '',
    requiredRoles: [''],
}