module.exports = {
    commands: 'back',
    expectedArgs: '',
    minArgs: 0,
    maxArgs: 1,
    callback: (message) => {
        message.channel.send( {files: [`./audio/Mumei_youre_back.wav`] })
        console.log(`${message.author.username} ran the command "You're back" in channel #${message.channel.name}`)
    },
    permissions: [],
    requiredRoles: [''],
}