
var vocals = {
    'á': 'a',
    'é': 'e',
    'í': 'i',
    'ó': 'o',
    'ú': 'u'
};

function validateMessage(message) {
    let newMessage = '';

    for (let i = 0; i < message.length; i++) {
        newMessage += (vocals[message[i]]) || message[i];
    }

    return newMessage;
}

module.exports = {
    validateMessage
}