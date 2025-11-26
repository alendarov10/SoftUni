function sumOfNumbers(numbersAsText){
    let sum = 0;

    for (let i = 0; i <= numbersAsText.length -1; i++){
        let currentChar = Number(numbersAsText[i]);
        let charAsNumber = Number(currentChar);

        sum += charAsNumber;
    }

    console.log(`The sum of the digits is:${sum}`);
}
sumOfNumbers('1234');