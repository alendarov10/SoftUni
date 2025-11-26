function  workingHours(num, day){
       if (num >= 10 && num <= 18 && (day === "Monday" || day === "Tuesday" || day === "Wednesday" || day === "Thursday" || day === "Friday" || day === "Saturday")){
        console.log("open");
       } else {
        console.log("closed");
       }        

}
workingHours(11, "Monday");
