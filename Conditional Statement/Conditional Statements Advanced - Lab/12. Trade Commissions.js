function tradeCommissions(city, sales) {
    let commission = 0;
    if (sales >= 0 && sales <= 500) {
        if (city === "Sofia") {
            commission = sales * 0.05;
        } else if (city === "Varna") {
            commission = sales * 0.045;
        } else if (city === "Plovdiv") {
            commission = sales * 0.055;
        }   else {          
            console.log("error");
            return;
        }
    } else if (sales > 500 && sales <= 1000) {
        if (city === "Sofia") {
            commission = sales * 0.07;
        } else if (city === "Varna") {
            commission = sales * 0.075;
        } else if (city === "Plovdiv") {
            commission = sales * 0.08;
        }   else {          
            console.log("error");
            return;
        }   
    } else if (sales > 1000 && sales <= 10000) {
        if (city === "Sofia") {
            commission = sales * 0.08;
        } else if (city === "Varna") {
            commission = sales * 0.10;
        } else if (city === "Plovdiv") {        
            commission = sales * 0.12;
        }   else {
            console.log("error");
            return;
        }   
    } else if (sales > 10000) {
        if (city === "Sofia") {
            commission = sales * 0.12;
        } else if (city === "Varna") {
            commission = sales * 0.13;
        } else if (city === "Plovdiv") {
            commission = sales * 0.145;
        }   else {          
            console.log("error");
            return;
        }   
    } else {
        console.log("error");
        return;
    }
    console.log(commission.toFixed(2));




}
tradeCommissions("Sofia", 1500);