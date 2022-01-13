module.exports = {
    commands: 'pete',
    expectedArgs: '',
    minArgs: 0,
    maxArgs: 1,
    callback: (message) => {
        message.channel.send( {files: [`./audio/Mumei_Pete.wav`] })
        console.log(`${message.author.username} ran the command "pete" in channel #${message.channel.name}`)
    },
    requiredRoles: [''],
    permissions: '',
}