function yardGreening(input){
    let squareMeters = Number(input[0]);
    let pricePerSquareMeter = 7.61;
    let totalPrice = squareMeters * pricePerSquareMeter;
    let discount = totalPrice * 0.18;
    let finalPrice = totalPrice - discount;
    console.log(`The final price is: ${finalPrice.toFixed(2)} lv.`);
    console.log(`The discount is: ${discount.toFixed(2)} lv.`);
}

// Ако Judge подава входа така:
yardGreening( ["550"] );