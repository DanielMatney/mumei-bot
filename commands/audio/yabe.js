module.exports = {
    commands: 'yabe',
    expectedArgs: '',
    minArgs: 0,
    maxArgs: 1,
    callback: (message) => {
        message.channel.send( {files: [`./audio/Mumei_somethings_not_right_here.wav`] })
        console.log(`${message.author.username} ran the command "yabe" in channel #${message.channel.name}`)
    },
    permissions: [],
    requiredRoles: [''],
}