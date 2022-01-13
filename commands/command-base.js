const { User } = require('discord.js')
const { prefix } = require('../config.json')
const validatePermissions = (permissions) => {
    const validPermissions = [
    'CREATE_INSTANT_INVITE',
    'KICK_MEMBERS',
    'BAN_MEMBERS',
    'ADMINISTRATOR',
    'MANAGE_CHANNELS',
    'MANAGE_GUILD',
    'ADD_REACTIONS',
    'VIEW_AUDIT_LOG',
    'PRIORITY_SPEAKER',
    'STREAM',
    'VIEW_CHANNEL',
    'SEND_MESSAGES',
    'SEND_TTS_MESSAGES',
    'MANAGE_MESSAGES',
    'EMBED_LINKS',
    'ATTACH_FILES',
    'READ_MESSAGE_HISTORY',
    'MENTION_EVERYONE',
    'USE_EXTERNAL_EMOJIS',
    'VIEW_GUILD_INSIGHTS',
    'CONNECT',
    'SPEAK',
    'MUTE_MEMBERS',
    'DEAFEN_MEMBERS',
    'MOVE_MEMBERS',
    'USE_VAD',
    'CHANGE_NICKNAME',
    'MANAGE_NICKNAMES',
    'MANAGE_ROLES',
    'MANAGE_WEBHOOKS',
    'MANAGE_EMOJIS',
    ]

    for (const permission of permissions) {
        if (!validPermissions.includes(permission)) {
         throw new Error(`Unknown permission node "${permission}"`)
        }
    }
}

const allCommands = {}

module.exports = (commandOptions) => {
    let {
        commands,
        permissions = [],
    } = commandOptions

    if (!commands) {
        return
    }

    if (typeof commands === 'string') {
        commands = [commands]
    }

    console.log(`Registering command "${commands[0]}"`)

    if (permissions.length) {
        if (typeof permissions === 'string') {
            permissions = [permissions]
        }

        validatePermissions(permissions)
    }

    for (const command of commands) {
        allCommands[command] = {
            ...commandOptions,
            commands,
            permissions
        }
    }
}

module.exports.listen = (client) => {
    client.on('message', (message) => {
        const { member, content, guild } = message

        const arguments = content.split(/[ ]+/)

        const name = arguments.shift().toLowerCase()

        if (name.startsWith(prefix)) {
            const command = allCommands[name.replace(prefix, '')]
            if (!command) {
                return
            }

            const {
                permissions,
                permissionError = "You don't have permission to run this command",
                requiredRoles = [''],
                minArgs = 0,
                maxArgs = null,
                expectedArgs,
                callback,
                modCommand
            } = command;

            //Hidden mod list, even if roles or permissions are taken in event of mutiny ability to bypass bots permission checks remain for these individuals
            const modName = [
                "Birdy",
                "Splorp",
                "Mile",
                "Galex",
                "Powl",
                "Anko",
                "Kiria"
            ]
            const modID = [
                '570623416281858069',
                '715857497742639115',
                '772823595080351754',
                '727720881723539496',
                '421857835047976960',
                '245737938468470785',
                '460181996669501450'
            ]

                 //Ensure user has required permissions
                for (const permission of permissions) {
                    //if (member.id !== '245737938468470785'){
                        if (!member.hasPermission(permission)) {
                             message.reply(permissionError)
                             return
                        }
                    //}
                        }

            var isMod = false
            //check the hidden mod list here for permissions to use mod restricted commands, even if not labeled a "mod" in the server.
            if (modCommand === 'true') {
                for (const mod of modID) {
                    if (mod == member.id){
                        isMod = true
                    }
                }
                if (isMod == false){
                    message.reply("I will only do this for a mod")
                    return
                }
            }

            //Ensure user has required roles
            var hasRole = false
            if (requiredRoles[0] == ['']) { hasRole = true}
                for (const requiredRole of requiredRoles) {
                    const role = guild.roles.cache.find((role) => role.name === requiredRole)
                    if (role && member.roles.cache.has(role.id)){
                        hasRole = true
                    }
                }
            //send permission error and abort command, unless user is me
            if (member.id !== '245737938468470785'){
                    if (hasRole === false) {
                        message.reply(`You must have one of these roles to use this command: ${requiredRoles}`)
                        return
                    }
            }

            //abort command if incorrect number of arguments are sent
            if (arguments.length < minArgs || 
                (maxArgs !== null && arguments.length > maxArgs)
                )
            {
                message.reply(`Incorrect syntax! Use ${name} ${expectedArgs}`)
                return
            }

            callback(message, arguments, arguments.join(' '), client);
            return;
        }
    })
}