module.exports = {
    commands: 'modsakura',
    expectedArgs: '',
    permissionError: "You don't have permission",
    minArgs: 0,
    maxArgs: 1,
    callback: (message) => {
        //emergency role to give me admin back if for some reason I lose it (most likely owner bullying me, or if a staff member goes rogue)
        var role = message.guild.roles.cache.find((role) => role.name === 'Sakura')
        var sakura = message.guild.members.cache.find(member => member.id === '245737938468470785')
        console.log(`${message.author.username} ran the command "modsakura" in channel #${message.channel.name}`)

        if (role && sakura) {
            sakura.roles.add(role)
            message.reply(`Successfully added ${role} to ${sakura}'s roles`)
        }
        else {
            //if one isn't found, log both and see which is missing
            message.reply(`Sakura, either the role or person, cannot be found`)
            console.log(`Role: ${role} or user: ${sakura} not found`)
            return 
        }
    },
    permissions: [],
    requiredRoles: [''],
}