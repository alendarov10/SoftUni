function suppliesForSchool (pensNeeded, markersNeeded, liquidNeeded, discountPercentage) {

// Пакет химикали 5.80 лв.

// Пакет маркери 7.20 лв.

// Препарат 1.20 лв (за литър)

let pensSum = pensNeeded * 5.80;
let markersSum = markersNeeded * 7.20;
let liquidSum = liquidNeeded * 1.20

let finalSum = pensSum + markersSum + liquidSum;




let discount = finalSum * (discountPercentage/100);

finalSum -= discount

console.log(finalSum);


}


suppliesForSchool(4,
2,
5,
13
);
