function moving(arr){
    const width = Number(arr[0]);
    const length = Number(arr[1]);
    const height = Number(arr[2]);

    let freeSpace = width * length * height;

    let index = 3;

    while(freeSpace > 0){
        let input = arr[index];

        if (input === 'Done'){
            break;
        }

        let currentBoxes = Number(input);

        freeSpace -= currentBoxes;
        index++;
    }

    if(freeSpace >= 0){
        console.log(`${freeSpace} Cubic meters left.`)
    } else {
        console.log(`No more free space! You need ${Math.abs(freeSpace)} Cubic meters more.`)
    }

}

moving(["10", 
"1",
"2",
"14", 
"8",
"Done"])