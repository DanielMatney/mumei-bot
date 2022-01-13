module.exports = {
    commands: 'say',
    expectedArgs: '',
    permissionError: 'You must be a moderator to use this command',
    minArgs: 0,
    maxArgs: null,
    callback: (message) => {
        //if (message.author.id === '245737938468470785') {
            console.log(`${message.author.username} ran the command "say" in channel #${message.channel.name}`)
            message.channel.bulkDelete(1)
            const say = `${message}`
            message.channel.send(`${say.slice(4)}`)
        //}
    },
    permissions: '',
    requiredRoles: [''],
}