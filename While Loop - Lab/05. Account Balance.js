function accountBalance(input) {
    let index = 0;
    let command = input[index];
    index++;
    let balance = 0;            
    while (command !== "NoMoreMoney") {
        let amount = Number(command);
        if (amount < 0) {
            console.log("Invalid operation!");
            break;
        }   
        balance += amount;
        console.log(`Increase: ${amount.toFixed(2)}`);
        command = input[index];
        index++;
    }       
    console.log(`Total: ${balance.toFixed(2)}`);
}
accountBalance(["120", "45.55", "-150"]);