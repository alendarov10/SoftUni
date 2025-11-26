function petShop(dogFood, catFood){ 
    let dogFoodPrice = dogFood * 2.50;
    let catFoodPrice = catFood * 4;
    let totalPrice = dogFoodPrice + catFoodPrice;
    console.log(`${totalPrice} lv`);
}

petShop(5, 4);