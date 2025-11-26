function sumOfTwoNumbers (startInterval, endInterval, magicNum) {
let combinationsCounter = 0;
let combinationFound = false;

for (let i = startInterval; i <= endInterval; i++) {
     for (let j = startInterval; j <= endInterval; j++) {
   
        combinationsCounter++;
        let sum = i + j;


        if (sum === magicNum) {
        combinationFound = true;
console.log(`Combination N:${combinationsCounter} (${i} + ${j} = ${magicNum})`)
break;
    }
   
    }



if (combinationFound) {
break;
    }
}
if (!combinationFound) {

console.log(`${combinationsCounter} combinations - neither equals ${magicNum}`);


     }
}
sumOfTwoNumbers(1, 10, 5);


