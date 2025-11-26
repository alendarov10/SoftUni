function basketballEquipment(yearlyPriceTrainings) {
// Баскетболни кецове цената им е 40% по-малка от таксата за една година
// Баскетболен екип цената му е 20% по-евтина от тази на кецовете
// Баскетболна топка цената и е 1/4 от цената на баскетболния екип
// Баскетболни аксесоари цената им е 1/5 от цената на баскетболната толка

let sneakers = yearlyPriceTrainings * 0.60;
let outfit = sneakers * 0.80;
let ball = outfit * 0.25;
let accessories = ball * 0.20;

let finalSum = yearlyPriceTrainings + sneakers + outfit + ball + accessories;
console.log(finalSum);
}

basketballEquipment(365);