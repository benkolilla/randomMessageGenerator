//container array for messages 
const messages = {
message1 : ['You are not weak.','Dont judge yourself by what others did to you.', 'We all make mistakes.', 'What hurts can be healed.', 'The secret of getting ahead is getting satarted.'],
message2 : ['You are not your mistake.', 'Dont let your fear own you. Own yourself.', 'Falling down is an accident, staying down is a choice.', 'If you are going through hell kepp going.'],
message3 : ['We keep fighting.', 'Care for yourself as much as you care for others.', 'People like us, we are brave.', 'You will never regret being kind.']
};

//generate random number
const generateRandNumber = (num) =>{
    return Math.floor(Math.random()*num)
};

//finalMessage will contain the output that should be printed
let finalMessage = [];

//iterate over the object and push a random message to array finalMessage
 for (let prop in messages) {
    let propIndex = generateRandNumber(messages[prop].length);
    switch (prop){
        case 'message1':
            finalMessage.push(messages[prop][propIndex])
            break
        case 'message2':
            finalMessage.push(messages[prop][propIndex])
            break
        case 'message3':
            finalMessage.push(messages[prop][propIndex])
            break
        default:
            finalMessage.push('Info is missing')
    }
 }

//formatting text: concatenate arrays, add quotation mark
const formatMessage = input =>{
    input.unshift("'");
    input.push("'");

    return input.join(' ');
}

//add new message to array message1 by changing the value of let inputConsole
const pushNewMessageToArray = newMessage =>{
    messages.message1.push(newMessage)
}

let inputConsole = 'No pain no gain'

pushNewMessageToArray (inputConsole);

//prin the final message to the console
console.log(formatMessage(finalMessage));
