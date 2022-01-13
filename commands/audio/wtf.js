module.exports = {
    commands: 'wtf',
    expectedArgs: '',
    minArgs: 0,
    maxArgs: 1,
    callback: (message) => {
        message.channel.send( {files: [`./audio/MumeiWTF.wav`] })
        console.log(`${message.author.username} ran the command "wtf" in channel #${message.channel.name}`)
    },
    permissions: [],
    requiredRoles: [''],
}