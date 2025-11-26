function building(floors, rooms) {

    for (let floor = floors; floor >= 1; floor--) {
        let floorOutput = '';   
        for (let room = 0; room < rooms; room++) {
            if (floor === floors) {
                floorOutput += `L${floor}${room} `; 
            } else if (floor % 2 === 0) {
                floorOutput += `O${floor}${room} `; 
            } else {
                floorOutput += `A${floor}${room} `; 
            }
        }
        console.log(floorOutput.trim()); 
    }   
}

building(6, 4);