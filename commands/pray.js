module.exports = {
    commands: 'pray',
    expectedArgs: '',
    permissionError: 'You must be an admin to use this command',
    minArgs: 0,
    maxArgs: null,
    callback: (message) => {
        const replies = [
            'Thou art worthy',
            'And on the seventh day, I forgor',
            'You cannot believe in Civilization until you first believe in yourself',
            'You are forgorven',
            'image'
        ]
        var replyNum = Math.floor(Math.random() * (replies.length) )
        if (replyNum === 4)
            {
                message.channel.send( {files: [`./images/pray.png`] })
                return
            }
        message.reply(`${replies[replyNum]}`)
        console.log(`${message.author.username} ran the command "Pray" in channel #${message.channel.name}`)
    },
    permissions: '',
    requiredRoles: [''],
}