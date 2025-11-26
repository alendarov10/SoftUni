function numberPyramid(number){
    let printLine = ''
    let isReached = false
    let currentNumber = 1;

    for (let row = 1; row <= number ; row++) {
       
        for (let col = 1; col <= row; col++) {
            printLine += currentNumber + ' '; // конкатенация (слепвяане на текст)
            
            if(currentNumber === number){ // проверяваме дали сме стигнали крайната цел
                isReached = true
                break;
            }

            currentNumber++;
        }

        console.log(printLine)
        printLine = '' // зануляваме си стринга за следващия ред
        
        if(isReached){  // проверяваме дали isReached е станало true
            break;
        }
    }
}

numberPyramid(7)