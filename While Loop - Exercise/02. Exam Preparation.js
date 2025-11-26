function examPreparation(arr){
    const maxPoorGrades = Number(arr[0]);
    let index = 1;
    let poorGradesCounter = 0;
    let allGrades = 0;
    let problemCounter = 0;
    let lastProblemName = '';
    let problemName = '';

    while(poorGradesCounter < maxPoorGrades){
        problemName = arr[index];

        if(problemName === 'Enough'){ // проверявам дали са свършили задачите
            break;
        }
        problemCounter++; // отброявам си поредната задача

        let grade = Number(arr[index + 1]);

        if(grade <= 4){ // провери дали това не е слаба оценка
            poorGradesCounter++;
        }

        allGrades += grade; // прибавям оценката към сумата от всички оценки
        lastProblemName = problemName; // запазвам си името на последната решена задача

        index += 2; // премествам индекса на следващото име на задача
    }

    if (problemName === 'Enough'){
        let averageGrade = allGrades / problemCounter;
    
        console.log(`Average score: ${averageGrade.toFixed(2)}`);
        console.log(`Number of problems: ${problemCounter}`);
        console.log(`Last problem: ${lastProblemName}`);
    } else { 
        // значи съм стигнал максимален брой слаби оценки
        console.log(`You need a break, ${poorGradesCounter} poor grades.`)
    }
}

examPreparation(["2",
"Income",
"3",
"Game Info",
"6",
"Best Player",
"4"])