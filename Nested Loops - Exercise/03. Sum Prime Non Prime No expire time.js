function sumPrimeNonPrimeNUmber(array){
    let index = 0;
    let input = array[index];

    let sumPrimeNumbers = 0;
    let sumNonPrimeNumbers = 0;

    while(input !== 'stop'){
        let currentNumber = Number(input); // обръщаме входа в числена стойност
        let isPrime = true;

        if(currentNumber < 0){
            console.log('Number is negative.')
            
            index++;
            input = array[index]; // взимам си нов вход, преди новата итерация
            continue;
        }

        for (let i = 2; i < currentNumber; i++) { // цикъл който търси дали едно число е просто
            if(currentNumber % i === 0){
                isPrime = false;
                break;
            }
        }

        if(isPrime){
            sumPrimeNumbers += currentNumber;
        } else {
            sumNonPrimeNumbers += currentNumber;
        }

        index++;
        input = array[index];
    }

    console.log(`Sum of all prime numbers is: ${sumPrimeNumbers}`)
    console.log(`Sum of all non prime numbers is: ${sumNonPrimeNumbers}`)
}

sumPrimeNonPrimeNUmber(["30",
"83",
"33",
"-1",
"20",
"stop"])