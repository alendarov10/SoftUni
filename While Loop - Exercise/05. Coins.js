function coins(money){
    let change = parseInt(Number(money) * 100);

    let coinCounter = 0;

    while(change > 0){
        if(change >= 200){
            change -= 200;
            coinCounter++;
        } else if(change >= 100){
            change -= 100;
            coinCounter++;
        } else if(change >= 50){
            change -= 50;
            coinCounter++;
        } else if(change >= 20){
            change -= 20;
            coinCounter++;
        } else if(change >= 10){
            change -= 10;
            coinCounter++;
        } else if(change >= 5){
            change -= 5;
            coinCounter++;
        } else if(change >= 2){
            change -= 2;
            coinCounter++;
        } else if(change >= 1){
            change -= 1;
            coinCounter++;
        }
    }

    console.log(coinCounter)
}

coins(3)