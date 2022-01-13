module.exports = {
    commands: 'hello',
    expectedArgs: '',
    minArgs: 0,
    maxArgs: 1,
    callback: (message) => {
        message.channel.send( {files: [`./audio/mumei_hellohellohello.wav`] })
        console.log(`${message.author.username} ran the command "hello" in channel #${message.channel.name}`)
    },
    permissions: [],
    requiredRoles: [''],
}