//the base of the messages in 3 separate arrays
    const arr1 = ['one', 'two', 'three'];
    const arr2 = ['first', 'second, third'];
    const arr3 = ['1', '2', '3'];

    let randIndex1 = Math.floor(Math.random()*arr1.length);
    let randIndex2 = Math.floor(Math.random()*arr2.length);
    let randIndex3 = Math.floor(Math.random()*arr3.length);

    let randMessage1 = arr1[randIndex1];
    let randMessage2 = arr2[randIndex2];
    let randMessage3 = arr3[randIndex3];

    let message = [];

    message.push(randMessage1);
    message.push(randMessage2);
    message.push(randMessage3);


console.log(message)