function cake(arr){
    const length = Number(arr[0]);
    const width = Number(arr[1]);
    let cakePieces = length * width;
    let index = 2;

    while(cakePieces > 0){
        let input = arr[index];

        if(input === 'STOP'){
            break;
        }

        let currentPieces = Number(input);
        index++

        cakePieces -= currentPieces
    }

    if(cakePieces >= 0){
        console.log(`${cakePieces} pieces are left.`);
    } else {
        console.log(`No more cake left! You need ${Math.abs(cakePieces)} pieces more.`)
    }
}

cake(["10",
"10",
"20",
"20",
"20",
"20",
"21"])