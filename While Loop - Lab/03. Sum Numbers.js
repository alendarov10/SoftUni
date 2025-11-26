function sumNumbers(input) {
    let index = 0;
    let target = Number(input[index]);
    index++;
    let sum = 0;    
    while (sum < target) {
        let number = Number(input[index]);
        index++;
        sum += number;
    }   
    console.log(sum);
}
sumNumbers(["20", "1", "2", "3", "4", "5", "6"]);