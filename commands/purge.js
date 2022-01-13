module.exports = {
    commands: 'purge',
    expectedArgs: '<number>',
    permissionError: 'You must be a Guardian to use this command',
    minArgs: 1,
    maxArgs: 1,
    callback: (message, arguments) => {
            console.log(`${message.author.username} ran the command "purge ${arguments[0]}" in channel #${message.channel.name}`)
            if(arguments[0] < 100) {
            message.channel.bulkDelete(+arguments[0] + 1)
            }
            else message.channel.send("You cannot delete that much of civilization's history at once!")
    },
    permissions: '',
    requiredRoles: [''],
    modCommand: 'true'
}