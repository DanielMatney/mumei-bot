module.exports = {
    commands: 'iwantitthatway',
    expectedArgs: '',
    minArgs: 0,
    maxArgs: 1,
    callback: (message) => {
        message.channel.send( {files: [`./audio/Mumei_I_want_it_that_way.wav`] })
        console.log(`${message.author.username} ran the command "I want it that way" in channel #${message.channel.name}`)
    },
    permissions: [],
    requiredRoles: [''],
}