function equalSumEvenOddPosition(start, end){
    
    let printOutput = '';
    
    for (let n = start; n <= end; n++) {
        let evenPositionsSum = 0;
        let oddPositionsSum = 0;
        let currentNumber = String(n) // числото ми трябва като текст
        
        for (let i = 0; i < currentNumber.length; i++) { // currentNumber е string
            let currentDigit = Number(currentNumber[i]); // обръщам взетия елемент по индекс в число
            
            if (i % 2 === 0){
                evenPositionsSum += currentDigit;
            } else {
                oddPositionsSum += currentDigit;
            }        
        }

        if (evenPositionsSum === oddPositionsSum){
            printOutput += n + ' '
        }
        
    }

    console.log(printOutput)
}

equalSumEvenOddPosition(100000, 100050)