module.exports = {
    commands: 'goodjob',
    expectedArgs: '',
    minArgs: 0,
    maxArgs: 1,
    callback: (message) => {
        message.channel.send( {files: [`./audio/Mumei_good_job_you_figured_it_out.wav`] })
        console.log(`${message.author.username} ran the command "good job" in channel #${message.channel.name}`)
    },
    permissions: [],
    requiredRoles: [''],
}