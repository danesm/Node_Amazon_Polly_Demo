// Load the SDK
const AWS = require('aws-sdk')
const Fs = require('fs')

// Create an Polly client
const Polly = new AWS.Polly({
    signatureVersion: 'v4',
    region: 'us-east-1'
})

let params = {
    'Text': 'Hello Mr Deb this is amazon polly speaking to you! Today is great day to start trying aws polly services and integrate with your client applications',
    'OutputFormat': 'mp3',
    'VoiceId': 'Brian'
}

Polly.synthesizeSpeech(params, (err, data) => {
    if (err) {
        console.log(err.code)
    } else if (data) {
        if (data.AudioStream instanceof Buffer) {
            Fs.writeFile("./speech.mp3", data.AudioStream, function(err) {
                if (err) {
                    return console.log(err)
                }
                console.log("The file was saved!")
            })
        }
    }
})
