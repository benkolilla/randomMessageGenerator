//container array for messages 
let message1 = ['You are not weak.','Dont judge yourself by what others did to you.', 'We all make mistakes.', 'What hurts can be healed.', 'The secret of getting ahead is getting satarted.'];
let message2 = ['You are not your mistake.', 'Dont let your fear own you. Own yourself.', 'Falling down is an accident, staying down is a choice.', 'If you are going through hell kepp going.'];
let message3 = ['We keep fighting.', 'Care for yourself as much as you care for others.', 'People like us, we are brave.', 'You will never regret being kind.'];

//generate random message  
const GenerateRandomMessage = (arr1, arr2, arr3)=>{
    let message = []; 

    let randIndex1 = Math.floor(Math.random()*arr1.length);
    let randIndex2 = Math.floor(Math.random()*arr2.length);
    let randIndex3 = Math.floor(Math.random()*arr3.length);

    let randMessage1 = arr1[randIndex1];
    let randMessage2 = arr2[randIndex2];
    let randMessage3 = arr3[randIndex3];

    message.push(randMessage1);
    message.push(randMessage2);
    message.push(randMessage3);

    message.unshift("'");
    message.push("'");

    return message.join(' ');
}

//add new message to arrays

console.log(GenerateRandomMessage(message1,message2,message3))

// create messages with loops and switch