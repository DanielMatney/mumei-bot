module.exports = {
    commands: 'sleep',
    expectedArgs: '',
    minArgs: 0,
    maxArgs: 1,
    callback: (message) => {
        message.channel.send( {files: [`./audio/sleep.wav`] })
        console.log(`${message.author.username} ran the command "sleep" in channel #${message.channel.name}`)
    },
    permissions: [],
    requiredRoles: [''],
}