function vacation(arr){
    let vacationPrice = Number(arr[0]);
    let savedMoney = Number(arr[1]);
    let index = 2;

    let dayCounter = 0;
    let spendCounter = 0;

    while(true){
        dayCounter++;
        let action = arr[index];   // spend / save
        let currentAmount = Number(arr[++index])  // ++index, първо прибавя 1 към индекса и тогава го ползваме

        if(action === 'save'){
            savedMoney += currentAmount;
            spendCounter = 0;
        } else if (action === 'spend'){
            savedMoney -= currentAmount;
            spendCounter++;

            if(savedMoney < 0){
                savedMoney = 0;
            }

            if(spendCounter === 5){
                console.log('You can\'t save the money.')
                console.log(dayCounter)
                break;
            }
        }

        if(savedMoney >= vacationPrice){
            console.log(`You saved the money for ${dayCounter} days.`)
            break;
        }

        index++; // мястя само с един индекс за следащото движение, защото по-нагоре имаме ++index
    }
}

vacation(["250",
"150",
"spend",
"50",
"spend",
"50",
"save",
"100",
"save",
"100"])