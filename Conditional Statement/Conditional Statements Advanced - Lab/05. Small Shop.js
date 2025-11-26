function smallShop(product, town, quantity){
if (town === "Sofia"){
    switch (product){
        case "coffee": console.log((0.50 * quantity).toFixed(2)); break;
        case "water": console.log((0.80 * quantity).toFixed(2)); break;
        case "beer": console.log((1.20 * quantity).toFixed(2)); break;
        case "sweets": console.log((1.45 * quantity).toFixed(2)); break;
        case "peanuts": console.log((1.60 * quantity).toFixed(2)); break;
    }
} else if (town === "Plovdiv"){
    switch (product){
        case "coffee": console.log((0.40 * quantity).toFixed(2)); break;
        case "water": console.log((0.70 * quantity).toFixed(2)); break;
        case "beer": console.log((1.15 * quantity).toFixed(2)); break;
        case "sweets": console.log((1.30 * quantity).toFixed(2)); break;
        case "peanuts": console.log((1.50 * quantity).toFixed(2)); break;
    }
} else if (town === "Varna"){
    switch (product){
        case "coffee": console.log((0.45 * quantity).toFixed(2)); break;
        case "water": console.log((0.70 * quantity).toFixed(2)); break;
        case "beer": console.log((1.10 * quantity).toFixed(2)); break;
        case "sweets": console.log((1.35 * quantity).toFixed(2)); break;
        case "peanuts": console.log((1.55 * quantity).toFixed(2)); break;
    }

}

}
smallShop("coffee", "Varna", 2);