module.exports = {
    commands: 'slavery',
    expectedArgs: '',
    minArgs: 0,
    maxArgs: 1,
    callback: (message) => {
        message.channel.send( {files: [`./audio/Mumei_slavery.wav`] })
        console.log(`${message.author.username} ran the command "slave" in channel #${message.channel.name}`)
    },
    permissions: [],
    requiredRoles: [''],
}