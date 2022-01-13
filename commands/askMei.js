module.exports = {
    commands: 'askmei',
    expectedArgs: '',
    permissionError: "You don't have permission",
    minArgs: 0,
    maxArgs: null,
    callback: (message) => {
        var question = `${message}`.slice(8);
        const replies = [
            'Yes.',
            'No.',
            'I forgor',
            '*birb noises*',
            '*giggle*',
            'Perhaps',
            'Absolutely not',
            'Definitely',
            'Why would you even ask that',
            "I'm not answering that one",
            'Try again later',
            'Only you can answer that one'
        ]

        if (question.includes('borgar') || question.includes('burger')) {
            message.reply(`Borgar always`)
            console.log(`${message.author.username} ran the command "Ask Mei/borgar" in channel #${message.channel.name}`)
            return
        }

        //detects if "or" is said, only makes sense with 2 options and is vague
        if (question.includes(' or ')) {
            const orReplies = [
                "I'd go with the first one",
                "The latter sounds good to me",
                "Why not both?",
                "Neither."
            ]
            orReplyNum = Math.floor(Math.random() * (orReplies.length) )
            message.reply(`${orReplies[orReplyNum]}`)
            console.log(`${message.author.username} ran the command "Ask Mei/or" in channel #${message.channel.name}`)
            return
        }

        //only returns people who have recently spoken in chat, unsure how long Discord retains its cache of this, but at least it ensures only those active are part of the fun
        if (question.toLowerCase().startsWith('who')) {
            var people = []
                for (member of message.channel.members) {
                    const person = message.guild.member(member[0])
                    var name = person.nickname
                    if (name !== null) {
                        people.push(name)
                    }
                }
                personNumber = Math.floor(Math.random() * (people.length))
                const chosen = `${people[personNumber]}`
            message.reply(`${chosen}`)
            console.log(`${message.author.username} ran the command "Ask Mei/who" in channel #${message.channel.name}`)
            return
        }

        //if no fringe cases are detected, gives a generic response
        var replyNum = Math.floor(Math.random() * (replies.length) )
        message.reply(`${replies[replyNum]}`)
        console.log(`${message.author.username} ran the command "Ask Mei" in channel #${message.channel.name}`)
    },
    permissions: '',
    requiredRoles: [''],
}