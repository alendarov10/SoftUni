function cinema (projectionType, rows, cols) {
const peopleCount = rows * cols;
let income = 0;
//
//if (projectionType === "Premiere") {
//income += peopleCount* 12.0;
//} else if (projectionType === "Normal") {
//income += peopleCount * 7.5;
//} else if (projectionType === "Discount") {
//income += peopleCount* 5.0;
//}

switch (projectionType) {
    case "Premiere":
        income += peopleCount* 12.0;
        break;
    case "Normal":
        income += peopleCount * 7.5;
        break;
    case "Discount":
        income += peopleCount* 5.0;
        break;    
}   





console.log(`${income.toFixed(2)} leva`);
}
cinema("Premiere", 10, 12);
cinema("Normal", 21, 13);
cinema("Discount", 12, 30);
 

