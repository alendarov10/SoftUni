function foodDelivery(chikenMenu, fishMenu, vegetarianMenu){
    // Пилешко меню – 10.35 лв.
    // Меню с риба – 12.40 лв.
    // Вегетарианско меню – 8.15 лв.

    let chikenMenuSum = chikenMenu * 10.35;
    let fishMenuSum = fishMenu * 12.40;
    let vegetarianMenuSum = vegetarianMenu * 8.15;

    let menuSum = chikenMenuSum + fishMenuSum + vegetarianMenuSum; 
    let dessertSum = menuSum * 0.20; 

    let finalSum = menuSum + dessertSum + 2.50;

    console.log(finalSum);
}

foodDelivery(2, 4, 3);