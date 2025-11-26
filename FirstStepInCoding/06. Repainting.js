function repainting (nilon, paint, liquid, workersHoursToBeDone){
// Предпазен найлон 1.50 лв. за кв. метър
// Боя 14.50 лв. за литър
// Разредител за боя 5.00 лв. за литър


let nilonSum = (nilon + 2) * 1.50;
let paintSum = (paint * 1.10) * 14.50;
let liquidSum = liquid * 5.00;
let bagsSum = 0.40;

let materialsSum = nilonSum + paintSum + liquidSum + bagsSum;
let workersSum = (materialsSum * 0.30) * workersHoursToBeDone;

let finalSum = materialsSum + workersSum;

console.log(finalSum);
}

repainting (10,
11,
4,
8
);