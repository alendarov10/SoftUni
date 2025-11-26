function multiplicationTable(number) {
    for (let i = 1; i <= 10; i++) {
        let result = number * i;
            console.log(`${i} * ${number} = ${i * number}`);
    }

}
multiplicationTable(5);