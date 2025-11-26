function graduation(input) {
    let index = 0;
    let name = input[index];
    index++;
    let grade = 1;
    let sumGrades = 0;
    let excluded = 0;       
    while (grade <= 12) {
        let currentGrade = Number(input[index]);
        index++;
        if (currentGrade < 4) {
            excluded++; 
            if (excluded > 1) {
                console.log(`${name} has been excluded at ${grade} grade`);
                break;
            }   
            continue;
        }
        sumGrades += currentGrade;
        grade++;
    }   
    if (excluded < 2) {
        let averageGrade = sumGrades / 12;
        console.log(`${name} graduated. Average grade: ${averageGrade.toFixed(2)}`);
    }
}
graduation(["Gosho", "5", "6", "5", "6", "5", "6", "2", "3"]);