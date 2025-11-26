function traveling(input) { 
    let index = 0;
    let destination = input[index];
    index++;    
    while (destination !== "End") {
        let budget = Number(input[index]);
        index++;
        let savedMoney = 0;
        while (savedMoney < budget) {
            let money = Number(input[index]);
            index++;
            savedMoney += money;
        }
        console.log(`Going to ${destination}!`);
        destination = input[index];
        index++;
    }   
}
traveling([
    "Greece",
    "1000",
    "200",
    "200",
    "300",
    "100",
    "150",      
    "240",  
    "Spain",
    "1200",
    "300",      
    "500",
    "400",
    "End"
]);